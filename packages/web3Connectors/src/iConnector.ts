import { Signer } from "ethers";
import { ConnectorNames } from "./connectorNames";

export interface IConnector {
    readonly name: ConnectorNames
    getSigner(): Promise<Signer>
    connect(chainId: number): Promise<boolean>
    isConnected: Promise<boolean>
    // detect that metamask installed
    isInstalled: boolean
    installUrl: string
    onAccountsChanged(handler: (accounts: Array<string>) => void) : void
    onChainChanged(handler: (chainId: string) => void) : void
    onDisconnect(handler: (error: any) => void) : void
    canSwitchChain: boolean
    switchChain(chainId: number): Promise<boolean>
    disconnect(): Promise<void>
}