/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
import { ICollectionFilterItem } from "./typesAndInterfaces";
interface IProps {
    collectionFilterStore: CollectionFilterStore;
    applied: ICollectionFilterItem[];
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
}
export declare const CollectionFilterContent: ({ collectionFilterStore, applied, searchable, selectSingle, searchPlaceholder }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterContent.d.ts.map