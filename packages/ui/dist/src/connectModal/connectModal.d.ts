/// <reference types="react" />
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
import { IChain } from '../typesAndInterfaces';
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
    web3: IWeb3;
    visible: boolean;
    onCancel: () => void;
}
export declare const ConnectModal: ({ web3, visible, onCancel }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=connectModal.d.ts.map