import WalletConnectProvider from "@walletconnect/web3-provider";
import { IRPCMap } from "@walletconnect/types";
import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";

export class WalletConnectConnector extends BaseConnector implements IConnector {

    private _walletConnect: WalletConnectProvider
    private readonly _rpc: IRPCMap

    constructor(logger: ILogger, chains: IChainInfo[]) {
        super(logger, ConnectorNames.WalletConnect, chains)
        this._rpc = {}
        chains.forEach(x => this._rpc[x.chainId] = x.rpcUrl)
        this._walletConnect = new WalletConnectProvider({ rpc: this._rpc })
        this.initListeners(this._walletConnect)
    }

    async disconnect(): Promise<void> {
        await super.disconnect()
        await this._walletConnect.disconnect()
    }
    
    get canSwitchChain() { return false }

    // @ts-ignore
    switchChain(chainId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    protected get rawProvider(): any {
        return this._walletConnect;
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

    async enable(): Promise<any> {
        try {
            return await this._walletConnect.enable();
        }
        catch(error)
        {
            this._walletConnect = new WalletConnectProvider({ rpc: this._rpc });
            return Promise.reject<any>(error);
        }
    }
}