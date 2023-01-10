import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
declare global {
    interface Window {
        ethereum: any;
    }
}
export declare class InjectedConnector extends BaseConnector implements IConnector {
    get canSwitchChain(): boolean;
    disconnect(): Promise<void>;
    connect(chainId: number): Promise<boolean>;
    switchChain(chainId: number): Promise<boolean>;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
    constructor(logger: ILogger, chains: IChainInfo[]);
    private addEthereumChain;
    protected getRawProvider(): Promise<any>;
    private _ethRequestAccounts;
    private prvEnable;
    private isConnectedAsync;
}
//# sourceMappingURL=injectedConnector.d.ts.map