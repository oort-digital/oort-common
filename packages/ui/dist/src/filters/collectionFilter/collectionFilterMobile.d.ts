/// <reference types="react" />
import { ICollection } from "./collectionFilterContent";
import { CollectionFilterStore } from "./collectionFilterStore";
interface IProps {
    title: string;
    collectionFilterStore: CollectionFilterStore;
    chainId: number;
    applied: ICollection[];
    searchable: boolean;
    selectSingle: boolean;
}
export declare const CollectionFilterMobile: ({ collectionFilterStore, chainId, applied, searchable, selectSingle }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterMobile.d.ts.map