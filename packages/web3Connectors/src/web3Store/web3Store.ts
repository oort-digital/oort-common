import { ILogger } from "@oort-digital/logger";
import { Signer } from "ethers";
import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { ConnectorNames, ConnectorProvider, IConnector,WalletConnectConnector, InjectedConnector, BaseConnector } from "../connectors";
import { IChainService } from "./chainService";
import { FaceWalletConnector, IFaceWalletCredentials, IFaceWalletOptions } from "../connectors/faceWalletConnector";
import { EMPTY_CHAIN, IChain, isChainEmpty } from "../publicTypesAndInterfaces";
import { IChainInfo } from "../internalTypesAndInterfaces";

export interface IWeb3StoreParams<TChain extends IChain> {
    logger: ILogger,
    chainService: IChainService<TChain>
    faceWalletCredentials?: IFaceWalletCredentials
    //for the next version on WC
    walletConnectProjectId?: string
    walletConnectModalZIndex?: number
    supportedWallets?: ConnectorNames[]
    supportedChains: IChainInfo[]
}

export interface IWeb3Store {
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: {
        [name: string]: IConnector
    }
    switchChain: (newChainId: number) => Promise<boolean>
    connect: (chainId: number, connectorName: ConnectorNames) => Promise<boolean>
    supportedChains: IChain[]
    isConnectedToSupportedChain: boolean
    chain: IChain
    account: string
    signer: Signer | null
    isReady: boolean
}

export class Web3Store<TChain extends IChain> implements IWeb3Store {

    account: string = ''
    chain: IChain = EMPTY_CHAIN
    connectorName: ConnectorNames = ConnectorNames.Undefined
    isReady: boolean = false
    signer: Signer | null = null

    get supportedChains(): IChain[] {
        return this.chainService.supportedChains
    }

    get canSwitchChain(): boolean {
        return this._connectorProvider.canSwitchChain
    }

    get isConnectedToSupportedChain(): boolean {
        if (isChainEmpty(this.chain)) {
            return false
        }
        return !!this.chainService.isSupported(this.chain.chainId)
    }

    get supportedConnectors(): { [name: string]: IConnector } {
        return this._connectorProvider.connectorsByName
    }

    switchChain = (newChainId: number): Promise<boolean> => {
        return this._connectorProvider.switchChain(newChainId)
    }

    async connect(chainId: number, connectorName: ConnectorNames): Promise<boolean> {
        await this._connectorProvider.connect(chainId, connectorName)
        if (this._connectorProvider.curConnector) {
            await this.onConnect(this._connectorProvider.curConnector)
            return true
        }
        return false
    }

    constructor(params: IWeb3StoreParams<TChain>) {
        this.logger = params.logger
        this.chainService = params.chainService
        this._connectorProvider = new ConnectorProvider(params.logger, Web3Store.createWallets(params))

        makeObservable(this, {
            isReady: observable,
            account: observable,
            chain: observable,
            signer: observable,
            connectorName: observable,
            isConnectedToSupportedChain: computed,
            connect: action.bound,
        });

        this.runInit()
    }
    
    private static createWallets<TChain extends IChain>({ supportedWallets, supportedChains: supportedChains, logger, faceWalletCredentials, walletConnectProjectId, walletConnectModalZIndex }: IWeb3StoreParams<TChain>): BaseConnector[] {

        const result: BaseConnector[] = []
    
        if(!supportedWallets || supportedWallets.some(x => x === ConnectorNames.Injected)) {
            result.push(new InjectedConnector(logger, supportedChains))
        }
    
        if(!supportedWallets || supportedWallets.some(x => x === ConnectorNames.WalletConnect)) {
            if(!walletConnectProjectId) {
                throw new Error('You forgot pass IWeb3StoreParams.walletConnectProjectId')
            }
            result.push(new WalletConnectConnector({ projectId: walletConnectProjectId, logger, chains: supportedChains, modalZIndex: walletConnectModalZIndex }))
        }
        
        if(!supportedWallets || supportedWallets.some(x => x === ConnectorNames.FaceWallet)) {

            if(!faceWalletCredentials) {
                throw new Error('You forgot pass IWeb3StoreParams.faceWalletCredentials')
            }
            const faceWalletConnectOptions: IFaceWalletOptions = {
                logger,
                chains: supportedChains,
                credentials: faceWalletCredentials
            }
            result.push(new FaceWalletConnector(faceWalletConnectOptions))
        }
        
        return result
    }

    protected readonly logger: ILogger
    protected readonly chainService: IChainService<TChain>

    private _connector: IConnector | null = null
    private _connectorProvider: ConnectorProvider

    private logDebug = (msg: string) => {
        this.logger.debug(`web3store. ${msg}`)
    }

    private runInit = async (): Promise<void> => {

        await this._connectorProvider.waitInitialisation

        if (this._connectorProvider.curConnector) {
            await this.onConnect(this._connectorProvider.curConnector)
        }

        runInAction(() => {
            this.isReady = true
        })
    }

    private async chainChangeHandler(chainIdStr: string) {
        const chainId = parseInt(chainIdStr)
        this.logDebug(`chainChangeHandler. NewChainId: ${chainId}`)
        const signer = await this._connector!.getSigner()
        runInAction(() => {
            this.signer = signer
            this.chain = {
                chainId: chainId,
                name: this.chainService.chainName(chainId)
            }
        })
    }

    private accountChangeHandler(accounts: Array<string>) {
        // Handle the new accounts, or lack thereof.
        // "accounts" will always be an array, but it can be empty.
        if (accounts && accounts.length > 0 &&
            this.account && this.account.length > 0 &&
            accounts[0].toLowerCase() !== this.account.toLowerCase()) {
            window.location.reload()
        }
    }

    private async disconnectHandler(): Promise<void> {
        this.logDebug('disconnectHandler')
        this._connectorProvider.removeCurConnector()
        this._connector = null
        runInAction(() => {
            this.signer = null
            this.account = ''
            this.chain = EMPTY_CHAIN
            this.connectorName = ConnectorNames.Undefined;
        })
    }

    private async onConnect(connector: IConnector) {
        
        this._connector = connector
        const signer = await this._connector.getSigner()
        const acc: string = await signer.getAddress()
        const chainId: number = await signer.getChainId()

        const that = this
      
        connector.onAccountsChanged((accounts: string[]) => that.accountChangeHandler.call(that, accounts))
        connector.onChainChanged((chainIdStr: string) => that.chainChangeHandler.call(that, chainIdStr))
        connector.onDisconnect(() => {
            that.logDebug("connector.onDisconnect")
            that.disconnectHandler.call(that)
        })
        
        runInAction(() => {
            this.signer = signer
            this.connectorName = connector.name
            this.account = acc.toLowerCase()
            this.chain = {
                chainId: chainId,
                name: this.chainService.chainName(chainId)
            }
        })
    }
   
}

