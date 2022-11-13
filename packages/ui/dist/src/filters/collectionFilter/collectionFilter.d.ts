/// <reference types="react" />
import { ICollectionFilterItem, ICollectionFilterStore } from "./stores";
interface IProps {
    title: string;
    popoverTitle: string;
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    filterStore: ICollectionFilterStore;
}
export declare const CollectionFilter: ({ title, popoverTitle, onChange, searchable, selectSingle, searchPlaceholder, filterStore }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilter.d.ts.map