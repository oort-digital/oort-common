import { Signer } from "ethers";
import { ConnectorNames } from "./connectorNames";

export interface IConnector {
    readonly name: ConnectorNames
    getSigner(): Promise<Signer>
    // detect that metamask installed
    isInstalled: boolean
    installUrl: string
    onAccountsChanged(handler: (accounts: Array<string>) => void) : void
    onChainChanged(handler: (chainId: string) => void) : void
    onDisconnect(handler: (error: any) => void) : void
}