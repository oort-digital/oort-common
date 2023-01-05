import UniversalProvider from "@walletconnect/universal-provider";
import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
export declare class WalletConnectConnector extends BaseConnector implements IConnector {
    disconnect(): Promise<void>;
    get canSwitchChain(): boolean;
    switchChain(chainId: number): Promise<void>;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
    connect(chainId: number): Promise<any>;
    constructor(projectId: string, logger: ILogger, chains: IChainInfo[]);
    private readonly _projectId;
    private readonly _web3Modal;
    private readonly _rpc;
    private _waitInit;
    private init;
    private get universalProvider();
    private subscribeToProviderEvents;
    private _universalProvider;
    protected getRawProvider: () => Promise<UniversalProvider>;
    private _session;
}
//# sourceMappingURL=walletConnectConnector.d.ts.map