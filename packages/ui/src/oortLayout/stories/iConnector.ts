import { ConnectorNames } from "@oort/web3-connectors";
import { Signer } from "ethers";

export interface IConnector {
    readonly name: ConnectorNames
    signer: Promise<Signer>
    enable(): Promise<boolean>
    isConnected: Promise<boolean>
    // detect that metamask installed
    isInstalled: boolean
    installUrl: string
    onAccountsChanged(handler: (accounts: Array<string>) => void) : void
    onChainChanged(handler: (chainId: string) => void) : void
    onDisconnect(handler: (error: any) => void) : void
    canSwitchChain: boolean
    switchChain(chainId: number): Promise<void>
    disconnect(): Promise<void>
}