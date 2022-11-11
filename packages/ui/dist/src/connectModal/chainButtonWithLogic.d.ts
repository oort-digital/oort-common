/// <reference types="react" />
import { IChain } from "../typesAndInterfaces";
interface IProps {
    loading: boolean;
    connectedChainId: number;
    expectedChainId?: number;
    chain: IChain;
    canSwitchChain: boolean;
    onClick: () => void;
}
export declare const ChainButtonWithLogic: ({ chain, loading, connectedChainId, expectedChainId, canSwitchChain, onClick }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=chainButtonWithLogic.d.ts.map