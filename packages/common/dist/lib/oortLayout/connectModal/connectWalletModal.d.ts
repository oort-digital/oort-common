/// <reference types="react" />
import { ConnectorNames, IConnector } from '../../web3Connectors';
import { IChain } from '../../typesAndInterfaces';
interface IProps {
    chain: IChain;
    supportedChains: IChain[];
    account: string;
    canSwitchChain: boolean;
    connectorName: ConnectorNames;
    supportedConnectors: {
        [name: string]: IConnector;
    };
    visible: boolean;
    onCancel: () => void;
    switchChain: (newChainId: number) => Promise<void>;
    connectAsync: (connectorName: ConnectorNames) => Promise<void>;
}
export declare const ConnectWalletModal: (props: IProps) => JSX.Element;
export {};
