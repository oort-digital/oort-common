/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
export interface ICollection {
    tokenAddress: string;
    tokenName: string;
}
interface IProps {
    chainId: number;
    collectionFilterStore: CollectionFilterStore;
    applied: ICollection[];
    searchable: boolean;
    selectSingle: boolean;
}
export declare const CollectionFilterContent: ({ collectionFilterStore, chainId, applied, searchable, selectSingle }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterContent.d.ts.map