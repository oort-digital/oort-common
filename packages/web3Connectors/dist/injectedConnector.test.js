var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InjectedConnector } from ".";
import { logger } from "./logger";
import { delayAsync } from "./utils";
class TestRawProvider {
    constructor(requestCallback) {
        this._requestCallback = requestCallback;
    }
    request(params) {
        return this._requestCallback();
    }
}
class InjectedConnectorForTest extends InjectedConnector {
    constructor(rawProvider, logger, chains) {
        super(logger, chains);
        this._rawProvider = rawProvider;
    }
    get rawProvider() {
        return this._rawProvider;
    }
}
const chainInfo = {
    name: 'mumbai',
    chainId: 80001,
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    blockExplorer: 'https://mumbai.polygonscan.com'
};
test('injectedConnector call enable twice', () => __awaiter(void 0, void 0, void 0, function* () {
    let callCounter = 0;
    const requestCallback = () => {
        callCounter++;
        return delayAsync(1000);
    };
    const rawProvider = new TestRawProvider(requestCallback);
    const connector = new InjectedConnectorForTest(rawProvider, logger, [chainInfo]);
    const results = yield Promise.all([connector.enable(), connector.enable()]);
    expect(results[0]).toBeTruthy();
    expect(results[1]).toBeTruthy();
    expect(callCounter).toEqual(1);
}));
test('injectedConnector user reject enable return false', () => __awaiter(void 0, void 0, void 0, function* () {
    const requestCallback = () => {
        throw new Error('user reject connection');
    };
    const rawProvider = new TestRawProvider(requestCallback);
    const connector = new InjectedConnectorForTest(rawProvider, logger, [chainInfo]);
    const result = yield connector.enable();
    expect(result).toBeFalsy();
}));
