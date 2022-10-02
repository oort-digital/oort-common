/// <reference types="react" />
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
import { IItemSource } from "./itemSource";
interface IProps {
    title: string;
    popoverTitle: string;
    applied: ItemKeyType[];
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    cacheKeyPrefixFunc: () => string;
    itemSource: IItemSource;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
}
export declare const CollectionFilter: ({ title, popoverTitle, onChange, applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilter.d.ts.map