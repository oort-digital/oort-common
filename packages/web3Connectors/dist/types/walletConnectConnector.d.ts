import UniversalProvider from "@walletconnect/universal-provider";
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
<<<<<<< HEAD
    disconnect(): Promise<void>;
    get canSwitchChain(): boolean;
    switchChain(chainId: number): Promise<boolean>;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
    connect(chainId: number): Promise<boolean>;
    constructor({ logger, chains, projectId, modalZIndex }: IWalletConnectOptions);
    private readonly _projectId;
    private readonly _web3Modal;
    private readonly _rpc;
    private _waitInit;
    private waitModalClose;
    private init;
    private get universalProvider();
    private subscribeToProviderEvents;
    private _universalProvider;
    protected getRawProvider: () => Promise<UniversalProvider>;
    private _session;
=======
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
>>>>>>> master
}
//# sourceMappingURL=walletConnectConnector.d.ts.map