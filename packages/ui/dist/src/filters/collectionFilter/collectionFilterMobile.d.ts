/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
import { FilterListenerActionType, ICollectionFilterItem } from "./typesAndInterfaces";
export interface ICollectionFilterMobileProps {
    title: string;
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    addFilterEventListeners?: FilterListenerActionType;
    removeFilterEventListeners?: FilterListenerActionType;
    filterStore: CollectionFilterStore;
}
export declare const CollectionFilterMobile: ({ filterStore, searchable, selectSingle, searchPlaceholder, addFilterEventListeners, removeFilterEventListeners, onChange }: ICollectionFilterMobileProps) => JSX.Element;
//# sourceMappingURL=collectionFilterMobile.d.ts.map