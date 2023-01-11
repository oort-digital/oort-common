import { providers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Network, Face } from '@haechi-labs/face-sdk';

class BaseConnector {
  constructor(logger, name, chains) {
    this._chains = {};
    this._externalAccountChangedHandlers = [];
    this._externalChainChangedHandlers = [];
    this._externalDisconnectHandlers = [];
    this._checkConnectionDelayMs = 500;
    this.name = name;
    this.logger = logger;
    chains.forEach((x) => this._chains[x.chainId] = x);
  }
  async CheckConnection() {
    if (!await this.isConnected) {
      if (this._timerId) {
        clearInterval(this._timerId);
        this.logger.debug(`${this.name}Connector. CheckConnection stopped`);
      }
      this._externalDisconnectHandlers.forEach((h) => h(void 0));
      this._externalDisconnectHandlers = [];
    }
  }
  initListeners(web3Provider) {
    this.logger.debug("initListeners");
    const that = this;
    this.accountsChangedHandler = (accounts) => {
      this.logger.debug(`${this.name}.accountsChangedHandler`);
      that._externalAccountChangedHandlers.forEach((h) => h(accounts));
    };
    this.chainChangedHandler = (chainId) => {
      this.logger.debug(`${this.name}.chainChangedHandler`);
      that._externalChainChangedHandlers.forEach((h) => h(chainId));
    };
    this.disconnectHandler = (error) => {
      this.logger.debug(`${this.name}.disconnectHandler ${JSON.stringify(error)}`);
      that._externalDisconnectHandlers.forEach((h) => h(error));
    };
    web3Provider.on("accountsChanged", this.accountsChangedHandler);
    web3Provider.on("chainChanged", this.chainChangedHandler);
  }
  removeListeners_(rawProvider) {
    rawProvider.removeListener("accountsChanged", this.accountsChangedHandler);
    rawProvider.removeListener("chainChanged", this.chainChangedHandler);
    this._externalAccountChangedHandlers = [];
    this._externalChainChangedHandlers = [];
    this._externalDisconnectHandlers = [];
  }
  onAccountsChanged(handler) {
    this._externalAccountChangedHandlers.push(handler);
  }
  onChainChanged(handler) {
    this._externalChainChangedHandlers.push(handler);
  }
  onDisconnect(handler) {
    if (!this._timerId) {
      const self = this;
      this._timerId = setInterval(() => self.CheckConnection(), this._checkConnectionDelayMs);
    }
    this._externalDisconnectHandlers.push(handler);
  }
  async getSigner() {
    const provider = new providers.Web3Provider(await this.getRawProvider());
    return provider.getSigner();
  }
}

const lsKey = "cur_connector";
const getCurConnectorName = () => {
  const jsonStr = localStorage.getItem(lsKey);
  return jsonStr ? JSON.parse(jsonStr) : void 0;
};
const setCurConnectorName = (curConnector) => localStorage.setItem(lsKey, JSON.stringify(curConnector));
const removeCurConnectorName = () => localStorage.removeItem(lsKey);
class ConnectorProvider {
  constructor(logger, connectors) {
    this.connectorsByName = {};
    this._logger = logger;
    this.WaitInitialisationAsync = this.InitAsync(connectors, getCurConnectorName());
  }
  async InitAsync(connectors, curConnectorData) {
    let curConnector = void 0;
    for (let i = 0; i < connectors.length; i++) {
      const c = connectors[i];
      this.connectorsByName[c.name] = c;
      if (c.name === (curConnectorData == null ? void 0 : curConnectorData.name)) {
        if (await c.isConnected) {
          curConnector = c;
        }
      }
    }
    if (curConnector) {
      if (await curConnector.connect(curConnectorData.chainId)) {
        this._curConnector = curConnector;
        this._logger.debug(`Current connector is ${this._curConnector.name}`);
      }
    }
  }
  get CurConnector() {
    return this._curConnector;
  }
  async connect(chainId, connectorName) {
    await this.WaitInitialisationAsync;
    const curConnector = this.connectorsByName[connectorName];
    if (await curConnector.connect(chainId)) {
      setCurConnectorName({ chainId, name: connectorName });
      this._curConnector = curConnector;
    }
  }
  async disconnect() {
    var _a;
    await ((_a = this._curConnector) == null ? void 0 : _a.disconnect());
    removeCurConnectorName();
    this._curConnector = void 0;
  }
}

var ConnectorNames = /* @__PURE__ */ ((ConnectorNames2) => {
  ConnectorNames2["Undefined"] = "";
  ConnectorNames2["Injected"] = "Injected";
  ConnectorNames2["WalletConnect"] = "WalletConnect";
  ConnectorNames2["FaceWallet"] = "FaceWallet";
  return ConnectorNames2;
})(ConnectorNames || {});

const ErrorCodes = {
  // User rejected the request (close metamask window or press reject button)
  UserReject: 4001,
  // This error code indicates that the chain has not been added to MetaMask.
  UnknownChain: 4902
};
class InjectedConnector extends BaseConnector {
  constructor(logger, chains) {
    super(logger, ConnectorNames.Injected, chains);
    this.addEthereumChain = async (chainId, chainIdHex) => {
      try {
        const chain = this._chains[chainId];
        const blockExplorerUrls = chain.blockExplorer ? [chain.blockExplorer] : void 0;
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: chainIdHex,
            chainName: chain.name,
            rpcUrls: [chain.rpcUrl],
            nativeCurrency: chain.nativeCurrency,
            blockExplorerUrls
          }]
        });
      } catch (addError) {
        if (addError.code === ErrorCodes.UserReject) {
          return false;
        }
        throw addError;
      }
      return true;
    };
    this._ethRequestAccounts = void 0;
    if (this.isInstalled) {
      this.initListeners(window.ethereum);
    }
  }
  get canSwitchChain() {
    return !!window.ethereum.isMetaMask;
  }
  disconnect() {
    super.removeListeners_(window.ethereum);
    return Promise.resolve();
  }
  async connect(chainId) {
    if (this._ethRequestAccounts) {
      this.logger.debug("InjectedConnector.enable already called");
      return await this._ethRequestAccounts;
    }
    this.logger.debug("InjectedConnector.enable");
    this._ethRequestAccounts = this.prvEnable();
    const result = await this._ethRequestAccounts;
    this._ethRequestAccounts = void 0;
    const signer = await this.getSigner();
    const curChainId = await signer.getChainId();
    if (curChainId !== chainId) {
      await this.switchChain(chainId);
    }
    return result;
  }
  async switchChain(chainId) {
    const chainIdHex = `0x${chainId.toString(16)}`;
    try {
      if (!this._chains[chainId]) {
        throw new Error(`Chain ${chainId} not supported`);
      }
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainIdHex }]
      });
    } catch (switchError) {
      if (switchError.code === ErrorCodes.UnknownChain) {
        return await this.addEthereumChain(chainId, chainIdHex);
      } else if (switchError.code === ErrorCodes.UserReject) {
        return false;
      }
      throw switchError;
    }
    return true;
  }
  get isConnected() {
    return this.isConnectedAsync();
  }
  get isInstalled() {
    return !!window.ethereum;
  }
  get installUrl() {
    return "https://metamask.io/download";
  }
  getRawProvider() {
    return Promise.resolve(window.ethereum);
  }
  async prvEnable() {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      if (error.code === ErrorCodes.UserReject) {
        this.logger.warn("Please connect to MetaMask.");
      } else {
        this.logger.error(error);
      }
      return false;
    }
    return true;
  }
  async isConnectedAsync() {
    const response = await window.ethereum.request({ method: "eth_accounts" });
    return response.length > 0;
  }
}

class WalletConnectConnector extends BaseConnector {
  constructor({ logger, chains }) {
    super(logger, ConnectorNames.WalletConnect, chains);
    this._rpc = {};
    chains.forEach((x) => this._rpc[x.chainId] = x.rpcUrl);
    this._walletConnect = new WalletConnectProvider({ rpc: this._rpc });
    this.initListeners(this._walletConnect);
  }
  async disconnect() {
    super.removeListeners_(this._walletConnect);
    await this._walletConnect.disconnect();
  }
  get canSwitchChain() {
    return false;
  }
  // @ts-ignore
  switchChain(chainId) {
    throw new Error("Method not implemented.");
  }
  getRawProvider() {
    return Promise.resolve(this._walletConnect);
  }
  get isConnected() {
    const lsItem = localStorage.getItem("walletconnect");
    const result = !!lsItem && this._walletConnect.isWalletConnect;
    return Promise.resolve(result);
  }
  get isInstalled() {
    return true;
  }
  get installUrl() {
    return "";
  }
  async connect(_chainId) {
    try {
      await this._walletConnect.enable();
    } catch (error) {
      this._walletConnect = new WalletConnectProvider({ rpc: this._rpc });
      return false;
    }
    return true;
  }
}

const getNetworkById = (id) => {
  if (id === 1) {
    return Network.ETHEREUM;
  }
  if (id === 80001) {
    return Network.MUMBAI;
  }
  if (id === 5) {
    return Network.GOERLI;
  }
  throw new Error(`Unknow chain id: ${id}`);
};
class FaceWalletConnector extends BaseConnector {
  constructor({ logger, chains, testnetApiKey, mainnetApiKey }) {
    super(logger, ConnectorNames.FaceWallet, chains);
    this.resolveApiKey = (network) => {
      switch (network) {
        case Network.ETHEREUM:
        case Network.POLYGON:
        case Network.BNB_SMART_CHAIN:
        case Network.KLAYTN:
        case Network.BORA: {
          if (!this._mainnetApiKey) {
            throw new Error("No API key for mainnet");
          }
          return this._mainnetApiKey;
        }
        case Network.GOERLI:
        case Network.MUMBAI:
        case Network.BNB_SMART_CHAIN_TESTNET:
        case Network.BAOBAB:
        case Network.BORA_TESTNET: {
          if (!this._testnetApiKey) {
            throw new Error("No API key for testnet");
          }
          return this._testnetApiKey;
        }
        default:
          throw new Error("unsupported network error");
      }
    };
    if (!testnetApiKey && !mainnetApiKey) {
      throw new Error(`Set value for testnetApiKey or mainnetApiKey or both`);
    }
    this._mainnetApiKey = mainnetApiKey;
    this._testnetApiKey = testnetApiKey;
  }
  async disconnect() {
    await this.face.auth.logout();
  }
  get canSwitchChain() {
    return true;
  }
  // @ts-ignore
  async switchChain(chainId) {
    const network = getNetworkById(chainId);
    await this.face.switchNetwork(network);
    return true;
  }
  get isConnected() {
    if (!this._face) {
      return Promise.resolve(false);
    }
    return this._face.auth.isLoggedIn();
  }
  get isInstalled() {
    return true;
  }
  get installUrl() {
    return "";
  }
  async connect(chainId) {
    if (!this._face) {
      const network = getNetworkById(chainId);
      this._face = new Face({
        network,
        apiKey: this.resolveApiKey(network)
      });
    }
    if (await this.face.auth.isLoggedIn()) {
      return true;
    }
    await this.face.auth.login();
    return true;
  }
  getRawProvider() {
    return Promise.resolve(this.face.getEthLikeProvider());
  }
  get face() {
    if (!this._face) {
      throw new Error("Provider not connected. Call FaceWalletConnector.connect first");
    }
    return this._face;
  }
}

export { BaseConnector, ConnectorNames, ConnectorProvider, FaceWalletConnector, InjectedConnector, WalletConnectConnector };
//# sourceMappingURL=index.es.js.map
