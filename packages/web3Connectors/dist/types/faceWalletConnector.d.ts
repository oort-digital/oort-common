import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { IConnector } from "./iConnector";
export interface IFaceWalletOptions {
    logger: ILogger;
    chains: IChainInfo[];
    testnetApiKey: string | null;
    mainnetApiKey: string | null;
}
export declare class FaceWalletConnector extends BaseConnector implements IConnector {
    disconnect(): Promise<void>;
    get canSwitchChain(): boolean;
    switchChain(chainId: number): Promise<boolean>;
    get isConnected(): Promise<boolean>;
    get isInstalled(): boolean;
    get installUrl(): string;
    connect(chainId: number): Promise<boolean>;
    constructor({ logger, chains, testnetApiKey, mainnetApiKey }: IFaceWalletOptions);
    protected getRawProvider(): Promise<any>;
    private _face;
    private get face();
    private _testnetApiKey;
    private _mainnetApiKey;
    private resolveApiKey;
}
//# sourceMappingURL=faceWalletConnector.d.ts.map