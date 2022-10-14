import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
export interface ICollectionFilterStore {
    all: ICollectionFilterItem[];
    recent: ICollectionFilterItem[];
    favorites: ICollectionFilterItem[];
    term: string;
    appliedItems: ICollectionFilterItem[];
    selected: ItemKeyType[];
    hasLoadMore: boolean;
    isLoading: boolean;
    clearNotApplied: () => void;
    copyNotAppliedToRecent: () => void;
    setTerm: (term: string) => void;
    setFavorites: (item: ICollectionFilterItem, checked: boolean) => void;
    loadNextPage: (reset: boolean, signal: AbortSignal) => Promise<void>;
    loadFavoritesFromCache: () => void;
    loadRecentFromCache: () => void;
    select: (key: ItemKeyType, checked: boolean) => void;
    selectSingle: (key: ItemKeyType, checked: boolean) => void;
}
export interface ICollectionFilterStoreParams {
    pageSize?: number;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
    cacheKeyPrefixFunc: () => string;
}
export declare abstract class CollectionFilterStore implements ICollectionFilterStore {
    favorites: ICollectionFilterItem[];
    recent: ICollectionFilterItem[];
    all: ICollectionFilterItem[];
    selected: ItemKeyType[];
    appliedItems: ICollectionFilterItem[];
    term: string;
    hasLoadMore: boolean;
    isLoading: boolean;
    loadFavoritesFromCache: () => void;
    loadRecentFromCache: () => void;
    abstract loadNextPage(reset: boolean, signal: AbortSignal): Promise<void>;
    protected abstract getAppliedItems(appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]>;
    setTerm(term: string): void;
    setItems(items: ICollectionFilterItem[]): void;
    clearNotApplied(): void;
    setFavorites(item: ICollectionFilterItem, checked: boolean): void;
    setApplied(appliedKeys: ItemKeyType[]): Promise<void>;
    select(key: ItemKeyType, checked: boolean): void;
    selectSingle(key: ItemKeyType, checked: boolean): void;
    copyNotAppliedToRecent(): void;
    protected get curPage(): number;
    protected readonly pageSize: number;
    protected addNewPage(page: ICollectionFilterItem[]): void;
    protected reset(): void;
    constructor({ cacheKeyPrefixFunc, recentMaxSize, favoriteMaxSize, pageSize }: ICollectionFilterStoreParams);
    private _curPage;
    private readonly _cache;
    private readonly _cacheKeyPrefixFunc;
    private readonly _favoritesQueue;
    private readonly _recentQueue;
    private getFavoritesKey;
    private getRecentKey;
    private loadFromCache;
    private _appliedSet;
    private get notApplied();
}
//# sourceMappingURL=collectionFilterStore.d.ts.map