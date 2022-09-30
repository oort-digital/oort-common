/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
import { ICollectionFilterItem } from "./itemSource";
interface IProps {
    chainId: number;
    collectionFilterStore: CollectionFilterStore;
    applied: ICollectionFilterItem[];
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
}
export declare const CollectionFilterContent: ({ collectionFilterStore, chainId, applied, searchable, selectSingle, searchPlaceholder }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterContent.d.ts.map