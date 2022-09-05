/// <reference types="react" />
import { IChain } from "../../typesAndInterfaces";
interface IProps {
    loading: boolean;
    chain: IChain;
    isActive: boolean;
    canSwitchChain: boolean;
    onClick: () => void;
}
export declare const ChainButton: ({ chain, loading, isActive, canSwitchChain, onClick }: IProps) => JSX.Element;
export {};
