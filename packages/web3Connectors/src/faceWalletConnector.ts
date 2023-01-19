import { ILogger } from "@oort-digital/logger";
import { Face, Network } from "@haechi-labs/face-sdk";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
import { ConnectorNames } from "./connectorNames";

const getNetworkById = (id: number): Network => {
    if(id === 1) { return Network.ETHEREUM }
    if(id === 80001) { return Network.MUMBAI }
    if(id === 5) { return Network.GOERLI }
    throw new Error(`Unknow chain id: ${id}`)
}

export interface IFaceWalletOptions {
    logger: ILogger
    chains: IChainInfo[]
    testnetApiKey: string | null
    mainnetApiKey: string | null
}


let frameCloseCallback: (() => void) | null = null
window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data!
    if ((event.origin === 'https://app.facewallet.xyz' || event.origin === 'https://app.test.facewallet.xyz')
        && event.data.method === 'face_closeIframe') {
        frameCloseCallback && frameCloseCallback()
    }
});

export class FaceWalletConnector extends BaseConnector implements IConnector {

    async disconnect(): Promise<void> {
        await this.face.auth.logout()
    }
    
    get canSwitchChain() { return true }

    // @ts-ignore
    async switchChain(chainId: number): Promise<boolean> {
        const network = getNetworkById(chainId)
        await this.face.switchNetwork(network)
        return true
    }

    get isConnected(): Promise<boolean> {
        if(!this._face) {
            return Promise.resolve(false)
        }
        return this._face.auth.isLoggedIn()
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    async connect(chainId: number): Promise<boolean> {
        
        if(!this._face) {
            const network = getNetworkById(chainId)
            this._face = new Face({
                network: network, 
                apiKey: this.resolveApiKey(network)
            })
        }

        if(await this.face.auth.isLoggedIn()) {
            return true
        }
        
        const loginPromise = this.face.auth.login()
        const frameClosePromise = this.waitFrameClose()

        const loginResponse = await Promise.race([ loginPromise, frameClosePromise ])
        return !!loginResponse
    }

    constructor({ logger, chains, testnetApiKey, mainnetApiKey }: IFaceWalletOptions) {
        super(logger, ConnectorNames.FaceWallet, chains)

        if(!testnetApiKey && !mainnetApiKey) {
            throw new Error(`Set value for testnetApiKey or mainnetApiKey or both`)
        }

        this._mainnetApiKey = mainnetApiKey
        this._testnetApiKey = testnetApiKey

        /*
        don't create new Face in constructor, it catch error
        no time to research it =)
        this._face = new Face({
            network: Network.MUMBAI, 
            apiKey: resolveApiKey(Network.MUMBAI)
        })
        */
    }

    protected getRawProvider(): Promise<any> {
        return Promise.resolve(this.face.getEthLikeProvider())
    }

    /*
    According to https://docs.facewallet.xyz/docs/initialize
    Face objects cannot be duplicated. For an object that was created,
    we recommend you manage and use it as a global variable or global state.
    */
    private _face: Face | undefined

    private get face(): Face {

        if(!this._face) {
            throw new Error('Provider not connected. Call FaceWalletConnector.connect first')
        }
    
        return this._face
    }

    private _testnetApiKey: string | null
    private _mainnetApiKey: string | null

    private resolveApiKey = (network: Network) => {
        switch (network) {
          case Network.ETHEREUM:
          case Network.POLYGON:
          case Network.BNB_SMART_CHAIN:
          case Network.KLAYTN:
          case Network.BORA:
            {
                if(!this._mainnetApiKey) {
                    throw new Error('No API key for mainnet')
                }
                return this._mainnetApiKey
            }
          case Network.GOERLI:
          case Network.MUMBAI:
          case Network.BNB_SMART_CHAIN_TESTNET:
          case Network.BAOBAB:
          case Network.BORA_TESTNET:
            {
                if(!this._testnetApiKey) {
                    throw new Error('No API key for testnet')
                }
                return this._testnetApiKey
            }
          default:
            throw new Error("unsupported network error");
        }
    }

    private waitFrameClose = (): Promise<void> => {
        return new Promise<void>(async ( resolve ) => {
            frameCloseCallback = resolve
        })
    }

}