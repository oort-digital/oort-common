import { IItemSource } from "./itemSource";
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
export interface ICollectionFilterStoreParams {
    cacheKeyPrefixFunc: () => string;
    itemSourceFunc: () => IItemSource;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
}
export declare class CollectionFilterStore {
    selected: ItemKeyType[];
    favorites: ICollectionFilterItem[];
    recent: ICollectionFilterItem[];
    private readonly _itemSource;
    private readonly _cache;
    private readonly _cacheKeyPrefixFunc;
    private readonly _favoritesQueue;
    private readonly _recentQueue;
    constructor({ cacheKeyPrefixFunc, itemSourceFunc, recentMaxSize, favoriteMaxSize }: ICollectionFilterStoreParams);
    private getFavoritesKey;
    private getRecentKey;
    private loadFromCache;
    loadFavoritesFromCache: () => void;
    loadRecentFromCache: () => void;
    loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean>;
    setTerm(term: string): void;
    get allAppliedItems(): any[];
    get hasLoadMore(): boolean;
    get isLoading(): boolean;
    get term(): string;
    get items(): ICollectionFilterItem[];
    setItems(items: ICollectionFilterItem[]): void;
    clearNotApplied(): void;
    setFavorites(item: ICollectionFilterItem, checked: boolean): void;
    private _appliedSet;
    private get notApplied();
    setApplied(applied: ItemKeyType[]): void;
    select(key: ItemKeyType, checked: boolean): void;
    selectSingle(key: ItemKeyType, checked: boolean): void;
    copyNotAppliedToRecent(): void;
}
//# sourceMappingURL=collectionFilterStore.d.ts.map