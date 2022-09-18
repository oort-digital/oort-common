/// <reference types="react" />
import { IChain } from '../typesAndInterfaces';
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
export interface IWeb3 {
    canSwitchChain: boolean;
    connectorName: ConnectorNames;
    supportedConnectors: {
        [name: string]: IConnector;
    };
    switchChain: (newChainId: number) => Promise<void>;
    connectAsync: (connectorName: ConnectorNames) => Promise<void>;
    supportedChains: IChain[];
    chain: IChain;
    account: string;
}
interface IProps {
    className?: string;
    web3?: IWeb3;
}
export declare const FooterMenu: ({ className, web3 }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=footerMenu.d.ts.map