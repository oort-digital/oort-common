import { action, computed, makeObservable, observable } from "mobx"
import { LocalStorageCacheProvider } from "../../cache"
import { distinct } from "../../utils"
import { ItemQueue } from "./itemQueue"
import { ICollectionFilterItem, IItemSource } from "./itemSource"
import { StoreState } from "./storeState"

export interface ICollectionFilterStoreParams {
    cacheKeyPrefixFunc: () => string
    itemSource: IItemSource
    recentMaxSize?: number
    favoriteMaxSize?: number
}

const itemKeyFunc = (item: ICollectionFilterItem) => item.key

export class CollectionFilterStore {
    
    selected: string[] = []
    favorites: ICollectionFilterItem[] = []
    recent: ICollectionFilterItem[] = []

    private readonly _collectionStore: IItemSource
    private readonly _cache: LocalStorageCacheProvider
    private readonly _cacheKeyPrefixFunc: () => string
    private readonly _favoritesQueue: ItemQueue<ICollectionFilterItem>
    private readonly _recentQueue: ItemQueue<ICollectionFilterItem>

    constructor({cacheKeyPrefixFunc, itemSource: collectionStore, recentMaxSize = 20, favoriteMaxSize = 20}: ICollectionFilterStoreParams) {

        this._collectionStore = collectionStore
        this._cache = new LocalStorageCacheProvider()
        this._cacheKeyPrefixFunc = cacheKeyPrefixFunc
        this._favoritesQueue = new ItemQueue(itemKeyFunc, favoriteMaxSize, [])
        this._recentQueue = new ItemQueue(itemKeyFunc, recentMaxSize, [])
       
        makeObservable(this, {
            selected: observable,
            favorites: observable,
            recent: observable,
            isLoading: computed,
            items: computed,
            term: computed,
            select: action,
            setFavorites: action,
            clearNotApplied: action,
            loadFavoritesFromCache: action,
            loadRecentFromCache: action,
            copyNotAppliedToRecent: action,
            setApplied: action,
            selectSingle: action
        })
    }

    private getFavoritesKey = () => `${this._cacheKeyPrefixFunc()}_FAV`
    private getRecentKey = () => `${this._cacheKeyPrefixFunc()}_RECENT`

    private loadFromCache = (key: string, q: ItemQueue<ICollectionFilterItem>) => {
        const fromCache = this._cache.getItem<ICollectionFilterItem[]>(key)
        if(fromCache) { q.enqueue(fromCache) }
        return q.items
    }

    loadFavoritesFromCache = () => {
        this.favorites = this.loadFromCache(this.getFavoritesKey(), this._favoritesQueue)
    }

    loadRecentFromCache = () => {
        this.recent = this.loadFromCache(this.getRecentKey(), this._recentQueue)
    }

    // Use in ant.select. It shouldn't be an action
    loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean> {    
		return this._collectionStore.loadNextPage(reset, signal)
    }

    setTerm(term: string): void {
        return this._collectionStore.setTerm(term)
    }

    get allAppliedItems() {
        const { _appliedSet } = this
        if(_appliedSet) {
            const appliedItems = this.items.filter(x => _appliedSet.has(x.key))
            const appliedFavorites = this.favorites.filter(x => _appliedSet.has(x.key))
            const recent = this.recent.filter(x => _appliedSet.has(x.key))
            const arr = appliedItems.concat(appliedFavorites).concat(recent)
            return distinct(arr, itemKeyFunc)
        }
        return []
    }

    get hasLoadMore() {
        return this._collectionStore.hasLoadMore
    }

    get isLoading() {
        return this._collectionStore.state === StoreState.Pending
    }

    get term() {
        return this._collectionStore.term
    }

    get items() {
        return this._collectionStore.items
    }

    setItems(items: ICollectionFilterItem[]): void {
        this._collectionStore.setItems(items);
    }

    clearNotApplied() {
        if(this._appliedSet) {
            this.selected = [...this._appliedSet]
        }
        else {
            this.selected = []
        }
    }

    setFavorites(item: ICollectionFilterItem, checked: boolean): void {
        if(checked) {
            this._favoritesQueue.enqueue([item])
        }
        else {
            this._favoritesQueue.remove(item)
        }

        this.favorites = this._favoritesQueue.items

        const key = this.getFavoritesKey()
        this._cache.setItem(key, this._favoritesQueue.items)
    }

    private _appliedSet: Set<string> | undefined

    private get notApplied() {
        if(this._appliedSet) {
            return new Set(this.selected.filter(x => !this._appliedSet!.has(x)))
        }
        return new Set(this.selected)
    }

    setApplied(applied: string[]): void {
        this._appliedSet = new Set(applied)
        this.selected = [...applied]
    }

    select(tokenAddress: string, checked: boolean): void {
        if(checked) {
            this.selected = [...this.selected, tokenAddress]
        }
        else {
            this.selected = this.selected.filter(x => x !== tokenAddress)
        }
    }

    selectSingle(key: string, checked: boolean): void {
        if(checked) {
            this.selected = [key]
        }
        else {
            this.selected = []
        }
    }

    copyNotAppliedToRecent(): void {
        if(this.selected.length) {
            const notAppliedItems = this.items.filter(x => this.notApplied.has(x.key))
            const notAppliedfavorites = this.favorites.filter(x => this.notApplied.has(x.key))
            this._recentQueue.enqueue(notAppliedItems.concat(notAppliedfavorites), true)
            this.recent = this._recentQueue.items
        }

        const key = this.getRecentKey()
        this._cache.setItem(key, this._recentQueue.items)
    }

}
