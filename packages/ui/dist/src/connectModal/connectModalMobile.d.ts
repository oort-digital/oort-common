/// <reference types="react" />
import { IWeb3 } from './connectModal';
export declare enum WALLETTYPE {
    WALLET_METAMASK = 0,
    WALLET_CONNECT = 1
}
interface IProps {
    web3: IWeb3;
    expectedChainId?: number;
    visible: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    afterConnect?: () => void;
    afterChainSwitch?: () => void;
}
declare const ConnectModalMobile: ({ web3, visible, onCancel, onClose, afterConnect, afterChainSwitch, expectedChainId }: IProps) => JSX.Element;
export default ConnectModalMobile;
//# sourceMappingURL=connectModalMobile.d.ts.map