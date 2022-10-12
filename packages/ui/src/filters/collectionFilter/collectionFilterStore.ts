import { logger } from "@oort/logger"
import { action, computed, makeObservable, observable, runInAction } from "mobx"
import { LocalStorageCacheProvider } from "../../cache"
import { distinct } from "../../utils"
import { ItemQueue } from "./itemQueue"
import { IItemSource } from "./itemSource"
import { StoreState } from "./storeState"
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces"

export interface ICollectionFilterStoreParams {
    cacheKeyPrefixFunc: () => string
    itemSource: IItemSource
    recentMaxSize?: number
    favoriteMaxSize?: number
}

const itemKeyFunc = (item: ICollectionFilterItem): ItemKeyType => item.key

export class CollectionFilterStore {
    
    selected: ItemKeyType[] = []
    favorites: ICollectionFilterItem[] = []
    recent: ICollectionFilterItem[] = []
    appliedItems: ICollectionFilterItem[] = []

    private readonly _itemSource: IItemSource
    private readonly _cache: LocalStorageCacheProvider
    private readonly _cacheKeyPrefixFunc: () => string
    private readonly _favoritesQueue: ItemQueue<ICollectionFilterItem>
    private readonly _recentQueue: ItemQueue<ICollectionFilterItem>

    constructor({cacheKeyPrefixFunc, itemSource, recentMaxSize = 20, favoriteMaxSize = 20}: ICollectionFilterStoreParams) {

        logger.debug('CollectionFilterStore.constructor')
        this._itemSource = itemSource
        this._cache = new LocalStorageCacheProvider()
        this._cacheKeyPrefixFunc = cacheKeyPrefixFunc
        this._favoritesQueue = new ItemQueue(itemKeyFunc, favoriteMaxSize, [])
        this._recentQueue = new ItemQueue(itemKeyFunc, recentMaxSize, [])
       
        makeObservable(this, {
            appliedItems: observable,
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
		return this._itemSource.loadNextPage(reset, signal)
    }

    setTerm(term: string): void {
        return this._itemSource.setTerm(term)
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
        return this._itemSource.hasLoadMore
    }

    get isLoading() {
        return this._itemSource.state === StoreState.Pending
    }

    get term() {
        return this._itemSource.term
    }

    get items() {
        return this._itemSource.items
    }

    setItems(items: ICollectionFilterItem[]): void {
        this._itemSource.setItems(items);
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

    private _appliedSet: Set<ItemKeyType> | undefined

    private get notApplied() {
        if(this._appliedSet) {
            return new Set(this.selected.filter(x => !this._appliedSet!.has(x)))
        }
        return new Set(this.selected)
    }

    async setApplied(appliedKeys: ItemKeyType[]): Promise<void> {
        this._appliedSet = new Set(appliedKeys)
        this.selected = [...appliedKeys]

        let loadFromSource: ItemKeyType[] = appliedKeys
        const appliedItems: ICollectionFilterItem[] = []

        //try to find in already loaded items
        if(this.items.length) {
            loadFromSource = []
            this.items.forEach(it => {
                if(this._appliedSet!.has(it.key)) {
                    appliedItems.push(it)
                }
                else {
                    loadFromSource.push(it.key)
                }
            })
        }

        if(!loadFromSource.length) {
            this.appliedItems = appliedItems
            return;
        }

        const loadedFromSourceItems = await this._itemSource.getAppliedItems(appliedKeys)

        runInAction(() => {
            this.appliedItems = [ ...appliedItems, ...loadedFromSourceItems ]
        })
    }

    select(key: ItemKeyType, checked: boolean): void {
        if(checked) {
            this.selected = [...this.selected, key]
        }
        else {
            this.selected = this.selected.filter(x => x !== key)
        }
    }

    selectSingle(key: ItemKeyType, checked: boolean): void {
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
