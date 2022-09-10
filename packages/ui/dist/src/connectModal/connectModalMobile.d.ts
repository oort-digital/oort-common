/// <reference types="react" />
import { ConnectorNames, IConnector } from "@oort/web3-connectors";
import { IChain } from '../typesAndInterfaces';
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
declare const ConnectModalMobile: (props: IProps) => JSX.Element;
export default ConnectModalMobile;
//# sourceMappingURL=connectModalMobile.d.ts.map