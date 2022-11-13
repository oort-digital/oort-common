/// <reference types="react" />
import { ICollectionFilterItem, ICollectionFilterStore } from "./stores";
import { FilterListenerActionType } from "./typesAndInterfaces";
export interface ICollectionFilterMobileProps {
    title: string;
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    addFilterEventListeners?: FilterListenerActionType;
    removeFilterEventListeners?: FilterListenerActionType;
    filterStore: ICollectionFilterStore;
}
export declare const CollectionFilterMobile: ({ filterStore, searchable, selectSingle, searchPlaceholder, addFilterEventListeners, removeFilterEventListeners, onChange }: ICollectionFilterMobileProps) => JSX.Element;
//# sourceMappingURL=collectionFilterMobile.d.ts.map