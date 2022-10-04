/// <reference types="react" />
import { IItemSource } from "./itemSource";
import { FilterListenerActionType, ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
export interface ICollectionFilterMobileProps {
    title: string;
    applied: ItemKeyType[];
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    cacheKeyPrefixFunc: () => string;
    itemSource: IItemSource;
    addFilterEventListeners?: FilterListenerActionType;
    removeFilterEventListeners?: FilterListenerActionType;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
}
export declare const CollectionFilterMobile: ({ applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize, addFilterEventListeners, removeFilterEventListeners, onChange }: ICollectionFilterMobileProps) => JSX.Element;
//# sourceMappingURL=collectionFilterMobile.d.ts.map