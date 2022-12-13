import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";
import { Face, Network } from "@haechi-labs/face-sdk";

//todo: need our own api keys
const resolveApiKey = (network: Network) => {
    switch (network) {
      case Network.ETHEREUM:
      case Network.POLYGON:
      case Network.BNB_SMART_CHAIN:
      case Network.KLAYTN:
      case Network.BORA:
        return 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5jEuZU9r-SBfRHSx70ynSh-3Ew7SapJTbLqEUiA0ZJ2w3OUWeJPz8aYHX0Py78kNaoCCQa8JdAXsyyrrMLE8gmIqoFrjzFYmcUZ1sc5uP7ue8iDhZURYlauFC3npRiMvL__Q_CeIQq9MrFqvCLOZcU-WW-_sjRbslLGMmQWPjcQIDAQAB';
      case Network.GOERLI:
      case Network.MUMBAI:
      case Network.BNB_SMART_CHAIN_TESTNET:
      case Network.BAOBAB:
      case Network.BORA_TESTNET:
        return 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCS23ncDS7x8nmTuK1FFN0EfYo0vo6xhTBMBNWVbQsufv60X8hv3-TbAQ3JIyMEhLo-c-31oYrvrQ0G2e9j8yvJYEUnLuE-PaABo0y3V5m9g_qdTB5p9eEfqZlDrcUl1zUr4W7rJwFwkTlAFSKOqVCPnm8ozmcMyyrEHgl2AbehrQIDAQAB';
      default:
        throw new Error("unsupported network error");
    }
}

export class FaceWalletConnector extends BaseConnector implements IConnector {

    private readonly _face: Face

    constructor(logger: ILogger, chains: IChainInfo[]) {
        super(logger, ConnectorNames.FaceWallet, chains)
        // this._rpc = {}
        // chains.forEach(x => this._rpc[x.chainId] = x.rpcUrl)
        // this._walletConnect = new WalletConnectProvider({ rpc: this._rpc })
        // this.initListeners(this._walletConnect)

        this._face = new Face({
            network: Network.MUMBAI, 
            apiKey: resolveApiKey(Network.MUMBAI)
          });
    }

    async disconnect(): Promise<void> {
        await super.disconnect()
        await this._face.auth.logout()
    }
    
    get canSwitchChain() { return true }

    // @ts-ignore
    switchChain(chainId: number): Promise<void> {
        // todo: use this._face.switchNetwork()
        throw new Error("Method not implemented.");
    }

    protected get rawProvider(): any {
        return this._face.getEthLikeProvider()
    }

    get isConnected(): Promise<boolean> {
        return this._face.auth.isLoggedIn()
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    async enable(): Promise<any> {
        await this._face.auth.login()
    }
}