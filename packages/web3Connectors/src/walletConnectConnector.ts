import WalletConnectProvider from "@walletconnect/web3-provider";
import { IRPCMap } from "@walletconnect/types";
import { ILogger } from "@oort-digital/logger";
import { BaseConnector } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";
import { IChainInfo } from "./web3Store";

export interface IWalletConnectOptions {
    modalZIndex?: number //actual for v2
    projectId: string //actual for v2
    logger: ILogger
    chains: IChainInfo[]
}

export class WalletConnectConnector extends BaseConnector implements IConnector {

    private _walletConnect: WalletConnectProvider
    private readonly _rpc: IRPCMap

    constructor({ logger, chains }: IWalletConnectOptions) {
        super(logger, ConnectorNames.WalletConnect, chains)
        this._rpc = {}
        chains.forEach(x => this._rpc[x.chainId] = x.rpcUrl)
        this._walletConnect = new WalletConnectProvider({ rpc: this._rpc })
        this.initListeners(this._walletConnect)
    }

    private initListeners(rawProvider: any) {

        this.logger.debug(`${this.name} initListeners`)

        rawProvider.on('accountsChanged', this.accountsChangedHandler);
        rawProvider.on('chainChanged', this.chainChangedHandler);
        // use custom connection check by timer. See onDisconnect
        // rawProvider.on("disconnect", this.disconnectHandler);
    }

    async disconnect(): Promise<void> {
        const rawProvider = this._walletConnect
        rawProvider.removeListener('accountsChanged', this.accountsChangedHandler);
        rawProvider.removeListener('chainChanged', this.chainChangedHandler);
        // this.rawProvider.removeListener("disconnect", this.disconnectHandler);
        await super.disconnect()
        await this._walletConnect.disconnect()
    }
    
    get canSwitchChain() { return false }

    // @ts-ignore
    switchChain(chainId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    protected getRawProvider(): Promise<any> {
        return Promise.resolve(this._walletConnect)
      }

    get isConnected(): Promise<boolean> {
        const lsItem = localStorage.getItem('walletconnect');
        const result = (!!lsItem) && this._walletConnect.isWalletConnect
        return Promise.resolve(result)
        //return this._walletConnect.connected
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    async connect(_chainId: number/* this parameter is used for V2 */): Promise<boolean> {
        try {
            await this._walletConnect.enable();
        }
        catch(error)
        {
            this._walletConnect = new WalletConnectProvider({ rpc: this._rpc });
            return false
        }
        return true
    }
}