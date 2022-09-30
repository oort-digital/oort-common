import { ICollectionFilterItem, IItemSource } from "./itemSource";
export interface ICollectionFilterStoreParams {
    cacheKeyPrefixFunc: () => string;
    itemSource: IItemSource;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
}
export declare class CollectionFilterStore {
    selected: string[];
    favorites: ICollectionFilterItem[];
    recent: ICollectionFilterItem[];
    private readonly _collectionStore;
    private readonly _cache;
    private readonly _cacheKeyPrefixFunc;
    private readonly _favoritesQueue;
    private readonly _recentQueue;
    constructor({ cacheKeyPrefixFunc, itemSource: collectionStore, recentMaxSize, favoriteMaxSize }: ICollectionFilterStoreParams);
    private getFavoritesKey;
    private getRecentKey;
    private loadFromCache;
    loadFavoritesFromCache: () => void;
    loadRecentFromCache: () => void;
    loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean>;
    setTerm(term: string): void;
    get allAppliedItems(): any;
    get hasLoadMore(): boolean;
    get isLoading(): boolean;
    get term(): string;
    get items(): ICollectionFilterItem[];
    setItems(items: ICollectionFilterItem[]): void;
    clearNotApplied(): void;
    setFavorites(item: ICollectionFilterItem, checked: boolean): void;
    private _appliedSet;
    private get notApplied();
    setApplied(applied: string[]): void;
    select(tokenAddress: string, checked: boolean): void;
    selectSingle(tokenAddress: string, checked: boolean): void;
    copyNotAppliedToRecent(): void;
}
//# sourceMappingURL=collectionFilterStore.d.ts.map