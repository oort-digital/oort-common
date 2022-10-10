/// <reference types="react" />
import { IWeb3 } from './connectModal';
export declare enum WALLETTYPE {
    WALLET_METAMASK = 0,
    WALLET_CONNECT = 1
}
interface IProps {
    web3: IWeb3;
    visible: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    afterConnect?: () => void;
    afterChainSwitch?: () => void;
}
declare const ConnectModalDesktop: ({ web3, onCancel, visible, onClose, afterChainSwitch, afterConnect }: IProps) => JSX.Element;
export default ConnectModalDesktop;
//# sourceMappingURL=connectModalDesktop.d.ts.map