/// <reference types="react" />
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
import { IChain } from '../typesAndInterfaces';
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
export declare const ConnectModal: (props: IProps) => JSX.Element;
export {};
//# sourceMappingURL=connectModal.d.ts.map