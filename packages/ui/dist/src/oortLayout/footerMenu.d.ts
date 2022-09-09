/// <reference types="react" />
import { IChain } from '../typesAndInterfaces';
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
export declare const TWITTER = "https://twitter.com/OortDigital";
export declare const DISCORD = "https://t.co/6eYdGdfUK7?amp=1";
export declare const TELEGRAM = "https://t.me/oortdigital";
interface IProps {
    className?: string;
    isDarkMode: boolean;
    onThemeChange: (isDarkMode: boolean) => void;
    chain: IChain;
    supportedChains: IChain[];
    account: string;
    canSwitchChain: boolean;
    connectorName: ConnectorNames;
    supportedConnectors: {
        [name: string]: IConnector;
    };
    switchChain: (newChainId: number) => Promise<void>;
    connectAsync: (connectorName: ConnectorNames) => Promise<void>;
}
export declare const FooterMenu: (props: IProps) => JSX.Element;
export {};
//# sourceMappingURL=footerMenu.d.ts.map