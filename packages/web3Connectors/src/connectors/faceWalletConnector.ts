import { ILogger } from "@oort-digital/logger";
import { Face, Network } from "@haechi-labs/face-sdk";
import { BaseConnector } from "./baseConnector";
import { IConnector } from "./iConnector";
import { ConnectorNames } from "./connectorNames";
import { connectorStorage } from "./connectorStorage";
import { IChainInfo } from "../internalTypesAndInterfaces";

const getNetworkById = (id: number): Network => {
    if(id === 1)        { return Network.ETHEREUM }
    if(id === 137)      { return Network.POLYGON }
    if(id === 56)       { return Network.BNB_SMART_CHAIN }
    if(id === 80001)    { return Network.MUMBAI }
    if(id === 5)        { return Network.GOERLI }
    throw new Error(`Unknow chain id: ${id}`)
}

export interface IFaceWalletCredentials {
    testnetApiKey: string | null
    mainnetApiKey: string | null
}

export interface IFaceWalletOptions {
    logger: ILogger
    chains: IChainInfo[]
    credentials: IFaceWalletCredentials
}

export class FaceWalletConnector extends BaseConnector implements IConnector {

    async disconnect(): Promise<void> {
        await super.disconnect()
        await this.face.auth.logout()
    }
    
    get canSwitchChain() { return true }

    // @ts-ignore
    async switchChain(chainId: number): Promise<boolean> {
        const network = getNetworkById(chainId)
        await this.face.switchNetwork(network)
        this.chainChangedHandler(chainId.toString())
        return true
    }

    get isConnected(): Promise<boolean> {
        return this.isConnectedInternal()
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    async connect(chainId: number): Promise<boolean> {
        
        if(this._curChainId != chainId) {
            this._curChainId = chainId
        }

        const isLoggedIn = await this.face.auth.isLoggedIn()
       
        if(!isLoggedIn) {
            const loginPromise = this.face.auth.login()
            const frameClosePromise = this.waitFrameClose()
            const loginResponse = await Promise.race([ loginPromise, frameClosePromise ])
            if(!loginResponse) {
                return false
            }
        }

        const curNetwork = getNetworkById(chainId)
        if(this.face.getNetwork() !== curNetwork) {
            await this.face.switchNetwork(curNetwork)
        }
        return true
    }

    //override onDisconned to disable CheckConnection
    public onDisconnect(_handler: (error: any) => void): void {
        //do nothing
    }

    constructor({ logger, chains, credentials }: IFaceWalletOptions) {
        super(logger, ConnectorNames.FaceWallet, chains)

        FaceWalletConnector.initFrameEventsListener()

        const { testnetApiKey, mainnetApiKey } = credentials

        if(!testnetApiKey && !mainnetApiKey) {
            throw new Error(`Set value for testnetApiKey or mainnetApiKey or both`)
        }

        this._mainnetApiKey = mainnetApiKey
        this._testnetApiKey = testnetApiKey

        const curConnector = connectorStorage.read()
        if(curConnector?.name === ConnectorNames.FaceWallet) {
            this._curChainId = curConnector.chainId
        }

        /*
        don't create new Face in constructor, it catch error
        no time to research it =)
        this._face = new Face({
            network: Network.MUMBAI, 
            apiKey: resolveApiKey(Network.MUMBAI)
        })
        */
    }

    private static _frameCloseCallback: (() => void) | null = null
    private static initFrameEventsListener = () => {
       // nextjs ssr
      if (typeof window !== "undefined") {
        window.addEventListener('message', event => {
            // IMPORTANT: check the origin of the data!
            if ((event.origin === 'https://app.facewallet.xyz' || event.origin === 'https://app.test.facewallet.xyz')
                && event.data.method === 'face_closeIframe') {
                    FaceWalletConnector._frameCloseCallback && FaceWalletConnector._frameCloseCallback()
            }
        })
      }
    }

    private _curChainId: number | undefined

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
            if(!this._curChainId) {
                throw new Error('Please set _curChainId first')
            }

            const network = getNetworkById(this._curChainId)
    
            this._face = new Face({
                network: network, 
                apiKey: this.resolveApiKey(network)
            })
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
            {
                if(!this._mainnetApiKey) {
                    throw new Error('No API key for mainnet')
                }
                return this._mainnetApiKey
            }
          case Network.GOERLI:
          case Network.MUMBAI:
          case Network.BNB_SMART_CHAIN_TESTNET:
            {
                if(!this._testnetApiKey) {
                    throw new Error('No API key for testnet')
                }
                return this._testnetApiKey
            }
          default:
            throw new Error(`Unsupported network: ${network}`);
        }
    }

    private waitFrameClose = (): Promise<void> => {
        return new Promise<void>(async ( resolve ) => {
            FaceWalletConnector._frameCloseCallback = resolve
        })
    }

    private async isConnectedInternal(): Promise<boolean> {
        if(!this._curChainId) {
            return false
        }

        try {
            await this.face.getAddresses()
            return true
        }
        catch(err) {

        }

        return false
    }

}