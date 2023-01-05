import UniversalProvider, { EthereumRpcMap } from "@walletconnect/universal-provider";
import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { SessionTypes } from "@walletconnect/types";
import { Web3Modal } from "@web3modal/standalone";
import { IConnector } from "./iConnector";
import { ConnectorNames } from "./connectorNames";

export class WalletConnectConnector extends BaseConnector implements IConnector {

    async disconnect(): Promise<void> {
        await this._waitInit
        await super.disconnect()
        await this._universalProvider!.disconnect()
    }
    
    get canSwitchChain() { return true }

    async switchChain(chainId: number): Promise<void> {
        await this.disconnect()
        await this.connect(chainId)
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

    async connect(chainId: number): Promise<any> {

        const ethereumProvider = await this.universalProvider

        this._session = await ethereumProvider.connect({
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
    
          this._web3Modal.closeModal()
    }

    constructor(projectId: string, logger: ILogger, chains: IChainInfo[]) {
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
            themeMode: "light",
        })
        // this._walletConnect = new WalletConnectProvider({ rpc: this._rpc })
        // this.initListeners(this._walletConnect)
        this._waitInit = this.init()
    }

    private readonly _projectId: string
    private readonly _web3Modal: Web3Modal

    // private _walletConnect: WalletConnectProvider
    private readonly _rpc: EthereumRpcMap

    private _waitInit: Promise<void>

    // private async checkForPersistedSession(provider: UniversalProvider) {
    //     const pairings = provider.client.pairing.getAll({ active: true });
    //     // populates existing pairings to state
    // }

    private async init(): Promise<void> {
        this._universalProvider = await UniversalProvider.init({
            projectId: this._projectId,
            logger: 'debug',
            relayUrl: 'wss://relay.walletconnect.com',
        });

        this.initListeners(this._universalProvider)
        this.subscribeToProviderEvents(this._universalProvider)

        // await this.checkForPersistedSession(this._universalProvider)
        this._session = this._universalProvider.session
    }

    private get universalProvider(): Promise<UniversalProvider> {
        return this._waitInit.then(() => this._universalProvider!)
    } 

    private async subscribeToProviderEvents(client: UniversalProvider) {
        
        client.on("display_uri", async (uri: string) => {
            console.log("EVENT", "QR Code Modal open");
            this._web3Modal.openModal({ uri });
        });

        // Subscribe to session ping
        client.on("session_ping", ({ id, topic }: { id: number; topic: string }) => {
            console.log("EVENT", "session_ping");
            console.log(id, topic);
        });

        // Subscribe to session event
        client.on("session_event", ({ event, chainId }: { event: any; chainId: string }) => {
            console.log("EVENT", "session_event");
            console.log(event, chainId);
        });

        // Subscribe to session updat
        client.on(
            "session_update",
            ({ /*topic,*/ session }: { /*topic: string;*/ session: SessionTypes.Struct }) => {
                console.log("EVENT", "session_updated");
                this._session = session
            },
        );

        // Subscribe to session delete
        
        client.on("session_delete", ({ id, topic }: { id: number; topic: string }) => {
            console.log("EVENT", "session_deleted");
            console.log(id, topic);
            this._session = undefined
        });
        
    }

    private _universalProvider: UniversalProvider | undefined

    protected getRawProvider = () => this.universalProvider

    private _session: SessionTypes.Struct | undefined
}