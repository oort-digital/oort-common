import { ReactNode } from "react";
import { IChain } from "../typesAndInterfaces";
import { ConnectorNames, IConnector } from "@oort/web3-connectors";
interface IProps {
    chain: IChain | undefined;
    account: string;
    children: ReactNode;
    isDarkMode: boolean;
    onThemeChange: (isDarkMode: boolean) => void;
    supportedChains: IChain[];
    canSwitchChain: boolean;
    connectorName: ConnectorNames;
    supportedConnectors: {
        [name: string]: IConnector;
    };
    switchChain: (newChainId: number) => Promise<void>;
    connectAsync: (connectorName: ConnectorNames) => Promise<void>;
}
export declare const Layout: (props: IProps) => JSX.Element;
export {};
//# sourceMappingURL=layout.d.ts.map