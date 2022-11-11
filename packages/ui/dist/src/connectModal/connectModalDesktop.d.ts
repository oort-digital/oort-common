/// <reference types="react" />
import { IWeb3 } from './connectModal';
interface IProps {
    web3: IWeb3;
    expectedChainId?: number;
    visible: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    afterConnect?: () => void;
    afterChainSwitch?: () => void;
}
declare const ConnectModalDesktop: ({ web3, onCancel, visible, onClose, afterChainSwitch, afterConnect, expectedChainId }: IProps) => JSX.Element;
export default ConnectModalDesktop;
//# sourceMappingURL=connectModalDesktop.d.ts.map