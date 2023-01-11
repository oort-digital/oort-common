import { IChain } from "../typesAndInterfaces";
interface IProps {
    account: string;
    chain: IChain;
    supportedChains: IChain[];
    expectedChainId: number | undefined;
}
export declare const Alert: ({ account, chain, supportedChains, expectedChainId }: IProps) => JSX.Element | null;
export {};
//# sourceMappingURL=alert.d.ts.map