/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
import { ICollectionFilterItem } from "./itemSource";
interface IProps {
    title: string;
    collectionFilterStore: CollectionFilterStore;
    chainId: number;
    applied: ICollectionFilterItem[];
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
}
export declare const CollectionFilterMobile: ({ collectionFilterStore, chainId, applied, searchable, selectSingle, searchPlaceholder }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterMobile.d.ts.map