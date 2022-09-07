var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const lsKey = 'cur_connector';
const getCurConnectorName = () => {
    const curCnnNameStr = localStorage.getItem(lsKey);
    return curCnnNameStr ? curCnnNameStr : undefined;
};
const setCurConnectorName = (connectorName) => localStorage.setItem(lsKey, connectorName);
const removeCurConnectorName = () => localStorage.removeItem(lsKey);
export class ConnectorProvider {
    constructor(logger, connectors) {
        this.connectorsByName = {};
        this._logger = logger;
        this.WaitInitialisationAsync = this.InitAsync(connectors, getCurConnectorName());
    }
    InitAsync(connectors, curConnectorName) {
        return __awaiter(this, void 0, void 0, function* () {
            let curConnector = undefined;
            for (let i = 0; i < connectors.length; i++) {
                const c = connectors[i];
                this.connectorsByName[c.name] = c;
                if (c.name === curConnectorName) {
                    if (yield c.isConnected) {
                        curConnector = c;
                    }
                }
            }
            if (curConnector) {
                if (yield curConnector.enable()) {
                    this._curConnector = curConnector;
                    this._logger.debug(`Current connector is ${this._curConnector.name}`);
                }
            }
        });
    }
    get CurConnector() {
        return this._curConnector;
    }
    EnableAsync(connectorName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.WaitInitialisationAsync;
            const curConnector = this.connectorsByName[connectorName];
            if (yield curConnector.enable()) {
                setCurConnectorName(connectorName);
                this._curConnector = curConnector;
            }
        });
    }
    disconnect() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this._curConnector) === null || _a === void 0 ? void 0 : _a.disconnect());
            removeCurConnectorName();
            this._curConnector = undefined;
        });
    }
}
