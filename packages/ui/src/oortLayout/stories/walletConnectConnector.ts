import UniversalProvider, { EthereumRpcMap } from "@walletconnect/universal-provider";
import { ILogger } from "@oort/logger";
import { ConnectorNames } from "@oort/web3-connectors";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { PairingTypes, SessionTypes } from "@walletconnect/types";
import { Web3Modal } from "@web3modal/standalone";
import { IConnector } from "./iConnector";
// import { BaseConnector, IChainInfo } from "./baseConnector";
// import { ConnectorNames } from "./connectorNames";
// import { IConnector } from "./iConnector";


const DEFAULT_PROJECT_ID = 'c2b4ff7ce76613f93a7edea85b9618f5'

const web3Modal = new Web3Modal({
    projectId: DEFAULT_PROJECT_ID,
    themeMode: "light",
  });

export class WalletConnectConnectorNew extends BaseConnector implements IConnector {

    // private _walletConnect: WalletConnectProvider
    private readonly _rpc: EthereumRpcMap

    constructor(logger: ILogger, chains: IChainInfo[]) {
        super(logger, ConnectorNames.WalletConnect, chains)
        this._rpc = {}
        chains.forEach(x => this._rpc[`${x.chainId}`] = x.rpcUrl)
        // this._walletConnect = new WalletConnectProvider({ rpc: this._rpc })
        // this.initListeners(this._walletConnect)

        
    }


    async disconnect(): Promise<void> {
        await super.disconnect()
        await this._universalProvider?.disconnect()
    }
    
    get canSwitchChain() { return false }

    // @ts-ignore
    switchChain(chainId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private async subscribeToProviderEvents(client: UniversalProvider) {
        if (typeof client === "undefined") {
        throw new Error("WalletConnect is not initialized");
        }

        client.on("display_uri", async (uri: string) => {
            debugger
            console.log("EVENT", "QR Code Modal open");
            web3Modal?.openModal({ uri });
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
        /*
        _client.on(
            "session_update",
            ({ topic, session }: { topic: string; session: SessionTypes.Struct }) => {
                console.log("EVENT", "session_updated");
                setSession(session);
            },
        );*/

        // Subscribe to session delete
        /*
        _client.on("session_delete", ({ id, topic }: { id: number; topic: string }) => {
            console.log("EVENT", "session_deleted");
            console.log(id, topic);
            resetApp();
        });
        */
    }

    private _universalProvider: UniversalProvider | undefined
    protected async getUniversalProvider(): Promise<UniversalProvider> {

        if(!this._universalProvider) {
            this._universalProvider = await UniversalProvider.init({
                projectId: DEFAULT_PROJECT_ID,
                logger: 'debug',
                relayUrl: 'wss://relay.walletconnect.com',
            });
            this.subscribeToProviderEvents(this._universalProvider)
        }
        return this._universalProvider
    }
    protected getRawProvider = () => this.getUniversalProvider()

    get isConnected(): Promise<boolean> {

        return Promise.resolve(false)
        // const lsItem = localStorage.getItem('walletconnect');
        // const result = (!!lsItem) && this._walletConnect.isWalletConnect
        // return Promise.resolve(result)
    }

    get isInstalled(): boolean {
        return true
    }

    get installUrl(): string {
        return ''
    }

    private _session: SessionTypes.Struct | undefined
    async enable(): Promise<any> {

        const ethereumProvider = await this.getUniversalProvider()
        const chainId = 1
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
    
        //   createWeb3Provider(ethereumProvider);
        //   const _accounts = await ethereumProvider.enable();
        //   console.log("_accounts", _accounts);
        //   setAccounts(_accounts);
        //   setSession(session);
        //   setChain(caipChainId);
    }
}