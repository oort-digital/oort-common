/// <reference types="react" />
import { IItemSource } from "./itemSource";
import { ItemKeyType } from "./typesAndInterfaces";
interface IProps {
    title: string;
    applied: ItemKeyType[];
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
    cacheKeyPrefixFunc: () => string;
    itemSource: IItemSource;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
}
export declare const CollectionFilterMobile: ({ applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterMobile.d.ts.map