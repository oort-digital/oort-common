import { ILogger } from "@oort-digital/logger";
import { Signer } from "ethers";
import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { ConnectorNames } from "../connectorNames";
import { ConnectorProvider } from "../connectorProvider";
import { EMPTY_CHAIN, IChain, isChainEmpty } from "./ichain";
import { IConnector } from "../iConnector";
import { IChainConfigService } from "./ichainConfigService";

interface IWeb3StoreParams {
    logger: ILogger,
    chainService: IChainConfigService
    connectorProvider: ConnectorProvider
}

export interface IWeb3Store {
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: {
        [name: string]: IConnector
    }
    switchChain: (newChainId: number) => Promise<boolean>
    connect: (chainId: number, connectorName: ConnectorNames) => Promise<boolean>
    disconnect(): Promise<void>
    supportedChains: IChain[]
    isConnectedToSupportedChain: boolean
    chain: IChain
    account: string
    signer: Signer | undefined
}

export class Web3Store implements IWeb3Store {

    account: string = ''
    chain: IChain = EMPTY_CHAIN
    connectorName: ConnectorNames = ConnectorNames.Undefined
    isReady: boolean = false
    signer: Signer | undefined

    get supportedChains(): IChain[] {
        return this._chainService.supportedChains
    }

    get canSwitchChain(): boolean {
        return this._connectorProvider.canSwitchChain
    }

    get isConnectedToSupportedChain(): boolean {
        if (isChainEmpty(this.chain)) {
            return false
        }
        return !!this._chainService.isSupported(this.chain.chainId)
    }

    get supportedConnectors(): { [name: string]: IConnector } {
        return this._connectorProvider.connectorsByName
    }

    switchChain = (newChainId: number): Promise<boolean> => {
        return this._connectorProvider.switchChain(newChainId)
    }

    async connect(chainId: number, connectorName: ConnectorNames): Promise<boolean> {
        await this._connectorProvider.connect(chainId, connectorName);
        if (this._connectorProvider.curConnector) {
            await this.__initAsync(this._connectorProvider.curConnector)
            return true
        }
        return false
    }

    async disconnect(): Promise<void> {
        this._logger.trace('web3store.disconnect')
        await this._connectorProvider.disconnect()
        this._connector = undefined
        runInAction(() => {
            this.account = ''
            this.chain = EMPTY_CHAIN
            this.connectorName = ConnectorNames.Undefined;
        })
    }

    constructor({logger, connectorProvider, chainService}: IWeb3StoreParams) {
        this._logger = logger
        this._chainService = chainService
        this._connectorProvider = connectorProvider;

        connectorProvider.waitInitialisation.then(() => {
            if (connectorProvider.curConnector) {
                this.__initAsync(connectorProvider.curConnector).then(() => {
                    runInAction(() => {
                        this.isReady = true
                    })
                })
            } else {
                runInAction(() => {
                    this.isReady = true
                })
            }

        })

        makeObservable(this, {
            isReady: observable,
            account: observable,
            chain: observable,
            signer: observable,
            connectorName: observable,
            isConnectedToSupportedChain: computed,
            // __initAsync: action.bound,
            connect: action.bound,
            disconnect: action.bound
        });
    }
    
    private readonly _logger: ILogger
    private _connector: IConnector | undefined
    private _connectorProvider: ConnectorProvider
    private readonly _chainService: IChainConfigService

    private async chainChangeHandler(chainIdStr: string) {
        const chainId = parseInt(chainIdStr)
        this._logger.debug(`Web3Store.chainChangeHandler. NewChainId: ${chainId}`)
        const signer = await this._connector!.getSigner()
        runInAction(() => {
            this.signer = signer
            this.chain = {
                chainId: chainId,
                name: this._chainService.chainName(chainId)
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

    // internal method
    private async __initAsync(connector: IConnector) {
        this.connectorName = connector.name
        this.account = ''
        this._connector = connector
        this.signer = await this._connector.getSigner()
        const acc: string = await this.signer.getAddress()
        const chainId: number = await this.signer.getChainId()

        const that = this
        if (acc) {
            connector.onAccountsChanged((accounts: string[]) => that.accountChangeHandler.call(that, accounts))
            connector.onChainChanged((chainIdStr: string) => that.chainChangeHandler.call(that, chainIdStr))
            connector.onDisconnect(() => {
                that._logger.debug("Web3store. connector.onDisconnect")
                that.disconnect.call(that)
            })
        }
        runInAction(() => {
            if (acc) {
                this.account = acc.toLowerCase()
            }
            if (chainId) {
                this.chain = {
                    chainId: chainId,
                    name: this._chainService.chainName(chainId)
                }
            }
        })

    }
   
}

