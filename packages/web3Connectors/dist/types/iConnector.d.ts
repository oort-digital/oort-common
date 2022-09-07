import { Signer } from "ethers";
import { ConnectorNames } from "./connectorNames";
export interface IConnector {
    readonly name: ConnectorNames;
    signer: Signer;
    enable(): Promise<boolean>;
    isConnected: Promise<boolean>;
    isInstalled: boolean;
    installUrl: string;
    onAccountsChanged(handler: (accounts: Array<string>) => void): void;
    onChainChanged(handler: (chainId: string) => void): void;
    onDisconnect(handler: (error: any) => void): void;
    canSwitchChain: boolean;
    switchChain(chainId: number): Promise<void>;
    disconnect(): Promise<void>;
}
//# sourceMappingURL=iConnector.d.ts.map