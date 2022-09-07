var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseConnector } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
export class InjectedConnector extends BaseConnector {
    constructor(logger, chains) {
        super(logger, ConnectorNames.Injected, chains);
        this._ethRequestAccounts = undefined;
        if (this.isInstalled) {
            this.initListeners(window.ethereum);
        }
    }
    get canSwitchChain() { return !!window.ethereum.isMetaMask; }
    switchChain(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const chainIdHex = `0x${chainId.toString(16)}`;
            try {
                if (!this._chains[chainId]) {
                    throw new Error(`Chain ${chainId} not supported`);
                }
                yield window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: chainIdHex }],
                });
            }
            catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        const chain = this._chains[chainId];
                        yield window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                    chainId: chainIdHex,
                                    chainName: chain.name,
                                    rpcUrls: [chain.rpcUrl],
                                    nativeCurrency: chain.nativeCurrency,
                                    blockExplorerUrls: [chain.blockExplorer]
                                }],
                        });
                    }
                    catch (addError) {
                        throw addError;
                    }
                }
                // handle other "switch" errors
            }
        });
    }
    prvEnable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.rawProvider.request({ method: 'eth_requestAccounts' });
            }
            catch (error) {
                if (error.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    this.logger.warn('Please connect to MetaMask.');
                }
                else {
                    this.logger.error(error);
                }
                return false;
            }
            return true;
        });
    }
    enable() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._ethRequestAccounts) {
                this.logger.debug('InjectedConnector.enable already called');
                return yield this._ethRequestAccounts;
            }
            this.logger.debug('InjectedConnector.enable');
            this._ethRequestAccounts = this.prvEnable();
            const result = yield this._ethRequestAccounts;
            this._ethRequestAccounts = undefined;
            return result;
        });
    }
    isConnectedAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield window.ethereum.request({ method: 'eth_accounts' });
            return response.length > 0;
        });
    }
    get isConnected() {
        return this.isConnectedAsync();
    }
    get isInstalled() {
        return !!window.ethereum;
    }
    get installUrl() {
        return 'https://metamask.io/download';
    }
    get rawProvider() {
        return window.ethereum;
    }
}
