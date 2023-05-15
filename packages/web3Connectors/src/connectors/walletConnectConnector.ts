import UniversalProvider, { EthereumRpcMap } from "@walletconnect/universal-provider";
import { ILogger } from "@oort-digital/logger";
import { BaseConnector } from "./baseConnector";
import { SessionTypes } from "@walletconnect/types";
import { Web3Modal } from "@web3modal/standalone";
import { IConnector } from "./iConnector";
import { ConnectorNames } from "./connectorNames";
import { IChainInfo } from "../internalTypesAndInterfaces";


export interface IWalletConnectOptions {
    modalZIndex?: number
    projectId: string
    logger: ILogger
    chains: IChainInfo[]
}

export class WalletConnectConnector extends BaseConnector implements IConnector {

    async disconnect(): Promise<void> {
        await this._waitInit
        await super.disconnect()
        await this._universalProvider!.disconnect()
    }
    
    get canSwitchChain() { return true }

    async switchChain(chainId: number): Promise<boolean> {
        await this.disconnect()
        return await this.connect(chainId)
    }

    get isConnected(): Promise<boolean> {
        return this._waitInit.then(() => !!this._session)
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    async connect(chainId: number): Promise<boolean> {

        const ethereumProvider = await this.universalProvider

        const closePromise = this.waitModalClose()
        const sessionPromise = ethereumProvider.connect({
            namespaces: {
              eip155: {
                methods: [
                  "eth_sendTransaction",
                  "eth_signTransaction",
                  "eth_sign",
                  "personal_sign",
                  "eth_signTypedData",
                ],
                chains: [`eip155:${chainId}`],
                events: ["chainChanged", "accountsChanged"],
                rpcMap: this._rpc,
              },
            },
            // pairingTopic: pairing?.topic,
          });

          const session = await Promise.race([closePromise, sessionPromise])

          if(session && session.expiry) {
            this._session = session
            this._web3Modal.closeModal()
            return true
          }

          //user close web3Modal
          return false

    }

    constructor({ logger, chains, projectId, modalZIndex }: IWalletConnectOptions) {
        super(logger, ConnectorNames.WalletConnect, chains)
        this._rpc = {}
        chains.forEach(x => {
            if(x.rpcUrl) {
                this._rpc[`${x.chainId}`] = x.rpcUrl
            }
        })

        this._projectId = projectId
        this._web3Modal = new Web3Modal({
            projectId: this._projectId,
            themeMode: 'dark',
            walletConnectVersion: 2,
            themeVariables: {
                '--w3m-z-index': `${modalZIndex}`
            }
        })
        this._waitInit = this.init()
    }
    private readonly _projectId: string
    private readonly _web3Modal: Web3Modal
    private readonly _rpc: EthereumRpcMap
    private _waitInit: Promise<void>

    private waitModalClose = (): Promise<void> => {
        let unSubscribe: (() => void) | undefined
        const promise = new Promise<void>((resolve, _reject) => {
            unSubscribe = this._web3Modal.subscribeModal(state => {
                this.debug(`modal.open: ${state.open.toString()}`)
                if(state.open === false) {
                    resolve()
                }
            })
        });

        return promise.then(unSubscribe)
    }

    private debug = (msg: string) => {
        this.logger.debug(`WalletConnectConnector ${msg}`)
    }

    private async init(): Promise<void> {
        this._universalProvider = await UniversalProvider.init({
            projectId: this._projectId,
            logger: 'debug',
            relayUrl: 'wss://relay.walletconnect.com',
        });

        this.subscribeToProviderEvents(this._universalProvider)
        this._session = this._universalProvider.session
    }

    private get universalProvider(): Promise<UniversalProvider> {
        return this._waitInit.then(() => this._universalProvider!)
    } 

    private async subscribeToProviderEvents(client: UniversalProvider) {
        
        client.on("display_uri", async (uri: string) => {
            this.debug("EVENT QR Code Modal open");
            this._web3Modal.openModal({ uri });
        });

        // Subscribe to session ping
        client.on("session_ping", ({ id, topic }: { id: number; topic: string }) => {
            this.debug("EVENT session_ping");
            this.debug(`${id} ${topic}`);
        });

        // Subscribe to session event
        client.on("session_event", ({ event, chainId }: { event: any; chainId: string }) => {
            this.debug("EVENT session_event");
            this.debug(`${event} ${chainId}`);
        });

        // Subscribe to session updat
        client.on(
            "session_update",
            ({ /*topic,*/ session }: { /*topic: string;*/ session: SessionTypes.Struct }) => {
                this.debug("EVENT session_updated");
                this._session = session
            },
        );

        // Subscribe to session delete
        
        client.on("session_delete", ({ id, topic }: { id: number; topic: string }) => {
            this.debug("EVENT session_deleted");
            this.debug(`${id}, ${topic}`);
            this._session = undefined
        });
        
    }

    private _universalProvider: UniversalProvider | undefined

    protected getRawProvider = () => this.universalProvider

    private _session: SessionTypes.Struct | undefined
}