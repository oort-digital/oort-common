import { ConnectorNames, IConnector } from '@oort/web3-connectors';
import { IChain } from '../typesAndInterfaces';
export interface IWeb3 {
    canSwitchChain: boolean;
    connectorName: ConnectorNames;
    supportedConnectors: {
        [name: string]: IConnector;
    };
    switchChain: (newChainId: number) => Promise<boolean>;
    connect: (chainId: number, connectorName: ConnectorNames) => Promise<boolean>;
    supportedChains: IChain[];
    chain: IChain;
    account: string;
}
export interface IConnectModalProps {
    web3: IWeb3;
    expectedChainId?: number;
    visible: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    afterConnect?: () => void;
    afterChainSwitch?: () => void;
}
export declare const ConnectModal: (props: IConnectModalProps) => JSX.Element;
//# sourceMappingURL=connectModal.d.ts.map