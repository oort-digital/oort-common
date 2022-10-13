/// <reference types="react" />
import { ICollectionFilterItem } from "./typesAndInterfaces";
import { CollectionFilterStore } from "./collectionFilterStore";
interface IProps {
    title: string;
    popoverTitle: string;
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    filterStore: CollectionFilterStore;
}
export declare const CollectionFilter: ({ title, popoverTitle, onChange, searchable, selectSingle, searchPlaceholder, filterStore }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilter.d.ts.map