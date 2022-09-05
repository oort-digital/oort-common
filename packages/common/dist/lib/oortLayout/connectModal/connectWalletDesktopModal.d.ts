/// <reference types="react" />
import { IChain } from "../../typesAndInterfaces";
import { ConnectorNames, IConnector } from '../../web3Connectors';
export declare enum WALLETTYPE {
    WALLET_METAMASK = 0,
    WALLET_CONNECT = 1
}
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
declare const ConnectWalletDesktopModal: (props: IProps) => JSX.Element;
export default ConnectWalletDesktopModal;
