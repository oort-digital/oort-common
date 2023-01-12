import { BaseCollectionFilterStore } from "./baseCollectionFilterStore";
import { ICollectionFilterItem, ICollectionFilterStore, ItemKeyType, SelectMode } from "./typesAndInterfaces";
export interface ICollectionFilterStoreParams {
    selectMode: SelectMode;
    pageSize?: number;
    recentMaxSize?: number;
    favoriteMaxSize?: number;
    cacheKeyPrefixFunc: () => string;
    useFavorites?: boolean;
    useRecent?: boolean;
}
export declare abstract class CollectionFilterStore extends BaseCollectionFilterStore implements ICollectionFilterStore {
    favorites: ICollectionFilterItem[] | null;
    recent: ICollectionFilterItem[] | null;
    loadFavoritesFromCache: () => void;
    loadRecentFromCache: () => void;
    abstract loadNextPage(signal: AbortSignal): Promise<void>;
    protected abstract getAppliedItems(appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]>;
    setFavorites(item: ICollectionFilterItem, checked: boolean): void;
    setApplied(appliedKeys: ItemKeyType[]): Promise<void>;
    copyNotAppliedToRecent(): void;
    protected get curPage(): number;
    protected get nextPageCursor(): string | undefined;
    protected readonly pageSize: number;
    protected addNewPage(page: ICollectionFilterItem[], nextPageCursor?: string): void;
    reset(): void;
    constructor({ cacheKeyPrefixFunc, selectMode, useFavorites, useRecent, recentMaxSize, favoriteMaxSize, pageSize }: ICollectionFilterStoreParams);
    private _nextPageCursor;
    private _curPage;
    private readonly _cache;
    private readonly _cacheKeyPrefixFunc;
    private readonly _favoritesQueue;
    private readonly _recentQueue;
    private getFavoritesKey;
    private getRecentKey;
    private loadFromCache;
    private get notApplied();
}
//# sourceMappingURL=collectionFilterStore.d.ts.map