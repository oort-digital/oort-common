import { ILogger } from "@oort/logger";
import { Face, Network } from "@haechi-labs/face-sdk";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
import { ConnectorNames } from "./connectorNames";


/*
https://oortdigital.slack.com/archives/C04EY5MLV50/p1671005355999189

Oort NFT Rental Marketplace

[API Key for Testnet]
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD7uJnqeI74gH6M-cSeEq82_Zrh-dp9KYH9asKMsjmdZpxjuHifc8lRhkKp5ZDTr9H__bpX8XFSBHt52r_iyP2-pMMh5E-T3uQJLFs0dBUSw2COr2ZgA_QWFHaIoSOtV_b9w5gEzxY623L0_Op9ItpZ51NN1WGEWgate5k-vMaDwIDAQAB

[API Key for Mainnet]
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCX9F3aDaZiPAsbGNbnpHAyBJNBHi4DtLkHIo1ZSYKSlxVHkg2ejuN1rMmPFGe6cZsZS7eAcNB-AaVTLyDgmYYdYBYwdJEoTejAJ2nC1ntZwmOEDC6nR_oeedEH2lc4zQp05rV0p8DHDUYxiYC6nlG-RSEUOvJhzsoC2tetoEbjuQIDAQAB
*/
const resolveApiKey = (network: Network) => {
    switch (network) {
      case Network.ETHEREUM:
      case Network.POLYGON:
      case Network.BNB_SMART_CHAIN:
      case Network.KLAYTN:
      case Network.BORA:
        return 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCX9F3aDaZiPAsbGNbnpHAyBJNBHi4DtLkHIo1ZSYKSlxVHkg2ejuN1rMmPFGe6cZsZS7eAcNB-AaVTLyDgmYYdYBYwdJEoTejAJ2nC1ntZwmOEDC6nR_oeedEH2lc4zQp05rV0p8DHDUYxiYC6nlG-RSEUOvJhzsoC2tetoEbjuQIDAQAB';
      case Network.GOERLI:
      case Network.MUMBAI:
      case Network.BNB_SMART_CHAIN_TESTNET:
      case Network.BAOBAB:
      case Network.BORA_TESTNET:
        return 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD7uJnqeI74gH6M-cSeEq82_Zrh-dp9KYH9asKMsjmdZpxjuHifc8lRhkKp5ZDTr9H__bpX8XFSBHt52r_iyP2-pMMh5E-T3uQJLFs0dBUSw2COr2ZgA_QWFHaIoSOtV_b9w5gEzxY623L0_Op9ItpZ51NN1WGEWgate5k-vMaDwIDAQAB';
      default:
        throw new Error("unsupported network error");
    }
}

const getNetworkById = (id: number): Network => {
    if(id === 1) { return Network.ETHEREUM }
    if(id === 80001) { return Network.MUMBAI }
    if(id === 5) { return Network.GOERLI }
    throw new Error(`Unknow chain id: ${id}`)
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
                apiKey: resolveApiKey(network)
            })
        }

        if(await this.face.auth.isLoggedIn()) {
            return true
        }

        /*const response = */await this.face.auth.login()

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


}