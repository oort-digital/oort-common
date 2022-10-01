/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
import { ICollectionFilterItem } from "./typesAndInterfaces";
interface IProps {
    title: string;
    popoverTitle: string;
    applied: ICollectionFilterItem[];
    collectionFilterStore: CollectionFilterStore;
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
}
export declare const CollectionFilter: ({ title, popoverTitle, collectionFilterStore, onChange, applied, searchable, selectSingle, searchPlaceholder }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilter.d.ts.map