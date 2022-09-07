var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { providers } from "ethers";
export class BaseConnector {
    constructor(logger, name, chains) {
        this._chains = {};
        this._externalAccountChangedHandlers = [];
        this._externalChainChangedHandlers = [];
        this._externalDisconnectHandlers = [];
        this._checkConnectionDelayMs = 500;
        this.name = name;
        this.logger = logger;
        chains.forEach(x => this._chains[x.chainId] = x);
    }
    CheckConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.isConnected)) {
                if (this._timerId) {
                    clearInterval(this._timerId);
                    this.logger.debug(`${this.name}Connector. CheckConnection stopped`);
                }
                this._externalDisconnectHandlers.forEach(h => h(undefined));
                this._externalDisconnectHandlers = [];
            }
        });
    }
    initListeners(rawProvider) {
        this.logger.debug('initListeners');
        const that = this;
        this.accountsChangedHandler = (accounts) => {
            this.logger.debug(`${this.name}.accountsChangedHandler`);
            that._externalAccountChangedHandlers.forEach(h => h(accounts));
        };
        this.chainChangedHandler = (chainId) => {
            this.logger.debug(`${this.name}.chainChangedHandler`);
            that._externalChainChangedHandlers.forEach(h => h(chainId));
        };
        this.disconnectHandler = (error) => {
            this.logger.debug(`${this.name}.disconnectHandler ${JSON.stringify(error)}`);
            that._externalDisconnectHandlers.forEach(h => h(error));
        };
        rawProvider.on('accountsChanged', this.accountsChangedHandler);
        rawProvider.on('chainChanged', this.chainChangedHandler);
        // use custom connection check by timer. See onDisconnect
        // rawProvider.on("disconnect", this.disconnectHandler);
    }
    removeListeners() {
        this.rawProvider.removeListener('accountsChanged', this.accountsChangedHandler);
        this.rawProvider.removeListener('chainChanged', this.chainChangedHandler);
        // this.rawProvider.removeListener("disconnect", this.disconnectHandler);
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
    get signer() {
        const provider = new providers.Web3Provider(this.rawProvider);
        return provider.getSigner();
    }
    disconnect() {
        this.removeListeners();
        return Promise.resolve();
    }
}
