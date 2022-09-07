var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import WalletConnectProvider from "@walletconnect/web3-provider";
import { BaseConnector } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
export class WalletConnectConnector extends BaseConnector {
    constructor(logger, chains) {
        super(logger, ConnectorNames.WalletConnect, chains);
        this._rpc = {};
        chains.forEach(x => this._rpc[x.chainId] = x.rpcUrl);
        this._walletConnect = new WalletConnectProvider({ rpc: this._rpc });
        this.initListeners(this._walletConnect);
    }
    disconnect() {
        const _super = Object.create(null, {
            disconnect: { get: () => super.disconnect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.disconnect.call(this);
            yield this._walletConnect.disconnect();
        });
    }
    get canSwitchChain() { return false; }
    switchChain(chainId) {
        throw new Error("Method not implemented.");
    }
    get rawProvider() {
        return this._walletConnect;
    }
    get isConnected() {
        const lsItem = localStorage.getItem('walletconnect');
        const result = (!!lsItem) && this._walletConnect.isWalletConnect;
        return Promise.resolve(result);
        //return this._walletConnect.connected
    }
    get isInstalled() {
        return true;
    }
    get installUrl() {
        return '';
    }
    enable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._walletConnect.enable();
            }
            catch (error) {
                this._walletConnect = new WalletConnectProvider({ rpc: this._rpc });
                return Promise.reject(error);
            }
        });
    }
}
