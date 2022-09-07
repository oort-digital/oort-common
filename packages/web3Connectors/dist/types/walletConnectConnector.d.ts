import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
export declare class WalletConnectConnector extends BaseConnector implements IConnector {
    private _walletConnect;
    private readonly _rpc;
    constructor(logger: ILogger, chains: IChainInfo[]);
    disconnect(): Promise<void>;
    get canSwitchChain(): boolean;
    switchChain(chainId: number): Promise<void>;
    protected get rawProvider(): any;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
    enable(): Promise<any>;
}
//# sourceMappingURL=walletConnectConnector.d.ts.map