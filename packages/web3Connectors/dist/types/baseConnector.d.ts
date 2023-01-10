import { Signer } from "ethers";
import { ILogger } from "@oort/logger";
import { ConnectorNames } from "./connectorNames";
declare type AccountChangedHandlerType = (accounts: Array<string>) => void;
declare type ChainChangedHandlerType = (chainId: string) => void;
declare type DisconnectHandlerType = (error: any) => void;
export interface IChainInfo {
    name: string;
    chainId: number;
    rpcUrl: string;
    blockExplorer?: string;
    nativeCurrency?: {
        name: string;
        symbol: string;
        decimals: number;
    };
}
export interface IChainMap {
    [chainId: number]: IChainInfo;
}
export declare abstract class BaseConnector {
    name: ConnectorNames;
    protected readonly _chains: IChainMap;
    private _externalAccountChangedHandlers;
    private accountsChangedHandler?;
    private _externalChainChangedHandlers;
    private chainChangedHandler?;
    private _externalDisconnectHandlers;
    protected disconnectHandler?: DisconnectHandlerType;
    protected readonly logger: ILogger;
    private readonly _checkConnectionDelayMs;
    private _timerId?;
    private CheckConnection;
    constructor(logger: ILogger, name: ConnectorNames, chains: IChainInfo[]);
    protected initListeners(web3Provider: any): void;
    protected removeListeners_(rawProvider: any): void;
    protected abstract getRawProvider(): Promise<any>;
    onAccountsChanged(handler: AccountChangedHandlerType): void;
    onChainChanged(handler: ChainChangedHandlerType): void;
    onDisconnect(handler: (error: any) => void): void;
    abstract get isConnected(): Promise<boolean>;
    getSigner(): Promise<Signer>;
}
export {};
//# sourceMappingURL=baseConnector.d.ts.map