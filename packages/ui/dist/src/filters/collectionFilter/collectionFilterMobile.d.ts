/// <reference types="react" />
import { IItemSource } from "./itemSource";
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
export declare type FilterListenerType = () => void;
export declare type CollectionFilterEventTypes = 'submit' | 'clear' | 'close';
export interface ICollectionFilterMobileProps {
    title: string;
    applied: ItemKeyType[];
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    cacheKeyPrefixFunc: () => string;
    itemSource: IItemSource;
    addFilterEventListener: (eventType: CollectionFilterEventTypes, listener: FilterListenerType) => void;
    removeFilterEventListener: (eventType: CollectionFilterEventTypes, listener: FilterListenerType) => void;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
}
export declare const CollectionFilterMobile: ({ applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize, addFilterEventListener, removeFilterEventListener, onChange }: ICollectionFilterMobileProps) => JSX.Element;
//# sourceMappingURL=collectionFilterMobile.d.ts.map