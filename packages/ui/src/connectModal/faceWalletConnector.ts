import { ConnectorNames, IConnector, BaseConnector, IChainInfo } from '@oort/web3-connectors';
import { ILogger } from "@oort/logger";
import { Face, Network } from "@haechi-labs/face-sdk";
import { ethers } from 'ethers';

// todo:
// these api keys works only for localhost:3000
// to go to production we definitely need your own api keys
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

const getNetworkById = (id: number): Network => {

    if(id === 80001) {
        return Network.MUMBAI
    }

    if(id === 5) {
        return Network.GOERLI
    }

    throw new Error(`Unknow chain id: ${id}`)

}


// todo:
// after develop put it to /packages/web3Connectors
export class FaceWalletConnector extends BaseConnector implements IConnector {

    async disconnect(): Promise<void> {
        await super.disconnect()
        await this.face.auth.logout()
    }
    
    get canSwitchChain() { return true }

    // @ts-ignore
    async switchChain(chainId: number): Promise<void> {
        const network = getNetworkById(chainId)
        await this.face.switchNetwork(network)
        this.logger.debug(`FaceWalletConnector.switchNetwork. ChainId: ${chainId}`)
    }

    get isConnected(): Promise<boolean> {
        return this.face.auth.isLoggedIn()
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    // It looks like you need ask user, which one network he want to connect and pass chainId as parameter.
    // WalletConnetConnector and InjectedConnector must ignore this parameter.
    // Because user selects network in native wallet interface
    async enable(/* chainId: number */): Promise<boolean> {
        
        if(!await this.face.auth.isLoggedIn()) {
            await this.face.auth.login()
        }

        return true
    }

    constructor(logger: ILogger, chains: IChainInfo[]) {
        super(logger, ConnectorNames.FaceWallet, chains)
        /*
        don't create new Face in constructor, it catch error
        no time to research it =)
        this._face = new Face({
            network: Network.MUMBAI, 
            apiKey: resolveApiKey(Network.MUMBAI)
        })
        */
    }

    protected get rawProvider(): any {
        return this.face.getEthLikeProvider()
    }

    private _face: Face | undefined

    // todo: hardcoded just for example. need some refactoring
    private readonly _initialNetworkId: number = 80001

    get face(): Face {

        if(!this._face) {
            const network = getNetworkById(this._initialNetworkId)
            this._face = new Face({
                network: network, 
                apiKey: resolveApiKey(network)
            })
        }
    
        return this._face
    }


}