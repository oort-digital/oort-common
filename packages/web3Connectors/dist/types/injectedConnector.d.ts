import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
declare global {
    interface Window {
        ethereum: any;
    }
}
export declare class InjectedConnector extends BaseConnector implements IConnector {
    protected getRawProvider(): Promise<any>;
    private _ethRequestAccounts;
    constructor(logger: ILogger, chains: IChainInfo[]);
    get canSwitchChain(): boolean;
    switchChain(chainId: number): Promise<void>;
    private prvEnable;
    connect(chainId: number): Promise<boolean>;
    private isConnectedAsync;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
}
//# sourceMappingURL=injectedConnector.d.ts.map