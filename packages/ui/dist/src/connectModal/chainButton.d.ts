import { IChain } from "../typesAndInterfaces";
interface IProps {
    loading: boolean;
    disabled?: boolean;
    chain: IChain;
    isActive: boolean;
    canSwitchChain: boolean;
    onClick: () => void;
}
export declare const ChainButton: ({ chain, loading, disabled, isActive, canSwitchChain, onClick }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=chainButton.d.ts.map