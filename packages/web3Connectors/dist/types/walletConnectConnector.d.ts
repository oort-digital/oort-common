import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
export interface IWalletConnectOptions {
    modalZIndex?: number;
    projectId: string;
    logger: ILogger;
    chains: IChainInfo[];
}
export declare class WalletConnectConnector extends BaseConnector implements IConnector {
    private _walletConnect;
    private readonly _rpc;
    constructor({ logger, chains }: IWalletConnectOptions);
    disconnect(): Promise<void>;
    get canSwitchChain(): boolean;
    switchChain(chainId: number): Promise<boolean>;
    protected getRawProvider(): Promise<any>;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
    connect(_chainId: number): Promise<boolean>;
}
//# sourceMappingURL=walletConnectConnector.d.ts.map