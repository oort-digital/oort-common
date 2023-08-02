import Provider, { EthereumProvider } from "@walletconnect/ethereum-provider";
import { ILogger } from "@oort-digital/logger";
import { BaseConnector } from "./baseConnector";
import { SessionTypes } from "@walletconnect/types";
import { IConnector } from "./iConnector";
import { ConnectorNames } from "./connectorNames";
import { IChainInfo } from "../publicTypesAndInterfaces";
import { WalletConnectModal } from "@walletconnect/modal";
import { ProviderRpcError } from "@walletconnect/ethereum-provider/dist/types/types";
import { EthereumRpcMap } from "@walletconnect/ethereum-provider/dist/types/EthereumProvider";

export interface IWalletConnectOptions {
  modalZIndex?: number;
  projectId: string;
  logger: ILogger;
  chains: IChainInfo[];
}

export class WalletConnectConnector
  extends BaseConnector
  implements IConnector
{
  async disconnect(): Promise<void> {
    await this._waitInit;
    if (await this.isConnected) {
      await this._universalProvider!.disconnect();
    }
    this._session = undefined;
    await super.disconnect();
  }

  get canSwitchChain() {
    return true;
  }

  async switchChain(chainId: number): Promise<boolean> {
    this.debug(`switchChain to ${chainId}`);

    this.stopCheckConnection();
    // save handlers to temp var
    const handlersTmp = this.getExternalHandlers();
    // clear handlers to not triggered onDisconnect
    this.clearExternalHandlers();

    await this.disconnect();

    if (await this.connect(chainId)) {
      this.runCheckConnection();
      // restore handlers
      this.setExternalHandlers(handlersTmp);
      // trigger onChainChange event
      this.chainChangedHandler(chainId.toString());
      return true;
    }
    return false;
  }

  get isConnected(): Promise<boolean> {
    return this._waitInit.then(() => !!this._session);
  }

  get isInstalled(): boolean {
    return true;
  }

  get installUrl(): string {
    return "";
  }

  async connect(chainId: number): Promise<boolean> {
    const ethereumProvider = await this.universalProvider;

    //prevent open modal on page reloading
    if (this._session) {
      return true;
    }

    const sessionPromise = ethereumProvider.connect({
      chains: [chainId],
    });

    const closePromise = this.waitModalClose(ethereumProvider.modal!);

    await Promise.race([closePromise, sessionPromise]);

    if (ethereumProvider.session && ethereumProvider.session.expiry) {
      this._session = ethereumProvider.session;
      return true;
    }

    //user close walletconnectModal
    return false;
  }

  constructor({
    logger,
    chains,
    projectId,
    modalZIndex = 2000,
  }: IWalletConnectOptions) {
    super(logger, ConnectorNames.WalletConnect, chains);
    this._rpc = {};
    chains.forEach((x) => {
      if (x.rpcUrl) {
        this._rpc[`${x.chainId}`] = x.rpcUrl;
      }
    });

    this._projectId = projectId;

    this._waitInit = this.init(modalZIndex);
  }
  private readonly _projectId: string;
  private readonly _rpc: EthereumRpcMap;
  private _waitInit: Promise<void>;

  private waitModalClose = (modal: WalletConnectModal): Promise<void> => {
    let unSubscribe: (() => void) | undefined;
    const promise = new Promise<void>((resolve, _reject) => {
      unSubscribe = modal.subscribeModal((state) => {
        this.debug(`modal.open: ${state.open.toString()}`);
        if (state.open === false) {
          resolve();
        }
      });
    });

    promise.then(() => {
      if (unSubscribe) {
        unSubscribe();
      }
    });
    return promise;
  };

  private debug = (msg: string) => {
    this.logger.debug(`WalletConnectConnector ${msg}`);
  };

  private async init(modalZIndex: number | undefined): Promise<void> {
    this._universalProvider = await EthereumProvider.init({
      projectId: this._projectId,
      showQrModal: true,
      qrModalOptions: {
        themeMode: "dark",
        themeVariables: {
          "--wcm-z-index": modalZIndex?.toString(),
        },
      },
      events: ["chainChanged", "accountsChanged"],
      // methods: ["eth_sendTransaction", "personal_sign"],
      chains: [1],
    });

    this.subscribeToProviderEvents(this._universalProvider);
    this._session = this._universalProvider.session;
  }

  private get universalProvider(): Promise<Provider> {
    return this._waitInit.then(() => this._universalProvider!);
  }

  /*
  private sessionUpdateHandler = ({
    session,
  }: {
    session: SessionTypes.Struct;
  }) => {
    this.debug("EVENT session_updated");
    this._session = session;
  };*/

  private sessionDeleteHandler = (args: ProviderRpcError) => {
    this.debug("EVENT disconnect");
    this.debug(JSON.stringify(args));
    this._session = undefined;
  };

  private subscribeToProviderEvents(client: Provider) {
    // client.on("display_uri", this.displayUriHandler);
    // client.on("session_update", this.sessionUpdateHandler);
    // client.on("session_delete", this.sessionDeleteHandler);
    client.on("disconnect", this.sessionDeleteHandler);
  }

  private _universalProvider: Provider | undefined;

  protected getRawProvider = () => this.universalProvider;

  private _session: SessionTypes.Struct | undefined;
}
