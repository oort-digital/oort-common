import { logger } from "@oort/logger"
import { action, makeObservable, observable, runInAction } from "mobx"
import { LocalStorageCacheProvider } from "../../cache"
import { distinct } from "../../utils"
import { ItemQueue } from "./itemQueue"
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces"

export interface ICollectionFilterStore {
    term: string
    favorites: ICollectionFilterItem[]
    appliedItems: ICollectionFilterItem[]
    // allAppliedItems: ICollectionFilterItem[]
    items: ICollectionFilterItem[]
    recent: ICollectionFilterItem[]
    selected: ItemKeyType[]
    hasLoadMore: boolean
    isLoading: boolean
    clearNotApplied: () => void
    copyNotAppliedToRecent: () => void
    setTerm: (term: string) => void
    setFavorites: (item: ICollectionFilterItem, checked: boolean) => void
    loadNextPage: (reset: boolean, signal: AbortSignal) => Promise<void>
    loadFavoritesFromCache: () => void
    loadRecentFromCache: () => void
    select: (key: ItemKeyType, checked: boolean) => void
    selectSingle: (key: ItemKeyType, checked: boolean) => void

    // getAppliedItems: (appliedKeys: ItemKeyType[]) => Promise<ICollectionFilterItem[]>
}

export interface ICollectionFilterStoreParams {
    pageSize?: number
    recentMaxSize?: number
    favoriteMaxSize?: number
    cacheKeyPrefixFunc: () => string
}

const itemKeyFunc = (item: ICollectionFilterItem): ItemKeyType => item.key

export abstract class CollectionFilterStore implements ICollectionFilterStore {
    
    selected: ItemKeyType[] = []
    favorites: ICollectionFilterItem[] = []
    recent: ICollectionFilterItem[] = []
    appliedItems: ICollectionFilterItem[] = []
    term: string = ''
    items: ICollectionFilterItem[] = []
    hasLoadMore: boolean = false
    isLoading: boolean = false

    loadFavoritesFromCache = () => {
        this.favorites = this.loadFromCache(this.getFavoritesKey(), this._favoritesQueue)
    }

    loadRecentFromCache = () => {
        this.recent = this.loadFromCache(this.getRecentKey(), this._recentQueue)
    }

    abstract loadNextPage(reset: boolean, signal: AbortSignal): Promise<void>
    protected abstract getAppliedItems(appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> 

    setTerm(term: string): void {
        this.term = term
    }

    get allAppliedItems() {
        const appliedSet = this._appliedSet
        if(appliedSet) {
            const appliedItems = this.items.filter(x => appliedSet.has(x.key))
            const appliedFavorites = this.favorites.filter(x => appliedSet.has(x.key))
            const recent = this.recent.filter(x => appliedSet.has(x.key))
            const arr = appliedItems.concat(appliedFavorites).concat(recent)
            return distinct(arr, itemKeyFunc)
        }
        return []
    }

    setItems(items: ICollectionFilterItem[]): void {
        this.items = items
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

        const loadedFromSourceItems = await this.getAppliedItems(appliedKeys)

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

    protected get curPage(): number {
        return this._curPage
    }

    protected readonly pageSize: number

    protected addNewPage(page: ICollectionFilterItem[]) {
        runInAction(() => {
            if(this._curPage === 1) {
                this.items = page
            }
            else {
                this.items = this.items.concat(page)
            }
            this.isLoading = false
            this.hasLoadMore = page.length === this.pageSize
        })
        this._curPage++
    }

    protected reset(): void {
        this._curPage = 0
        this.items = []
    }

    constructor({cacheKeyPrefixFunc, recentMaxSize = 20, favoriteMaxSize = 20, pageSize = 20}: ICollectionFilterStoreParams) {

        logger.debug('CollectionFilterStore.constructor')
        this.pageSize = pageSize
        this._cache = new LocalStorageCacheProvider()
        this._cacheKeyPrefixFunc = cacheKeyPrefixFunc
        this._favoritesQueue = new ItemQueue(itemKeyFunc, favoriteMaxSize, [])
        this._recentQueue = new ItemQueue(itemKeyFunc, recentMaxSize, [])
       
        makeObservable(this, {
            appliedItems: observable,
            selected: observable,
            favorites: observable,
            recent: observable,
            isLoading: observable,
            hasLoadMore: observable,
            items: observable,
            term: observable,
            setItems: action,
            setTerm: action,
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

    private _curPage: number = 0
    private readonly _cache: LocalStorageCacheProvider
    private readonly _cacheKeyPrefixFunc: () => string
    private readonly _favoritesQueue: ItemQueue<ICollectionFilterItem>
    private readonly _recentQueue: ItemQueue<ICollectionFilterItem>
    private getFavoritesKey = () => `${this._cacheKeyPrefixFunc()}_FAV`
    private getRecentKey = () => `${this._cacheKeyPrefixFunc()}_RECENT`

    private loadFromCache = (key: string, q: ItemQueue<ICollectionFilterItem>) => {
        const fromCache = this._cache.getItem<ICollectionFilterItem[]>(key)
        if(fromCache) { q.enqueue(fromCache) }
        return q.items
    }

    private _appliedSet: Set<ItemKeyType> | undefined

    private get notApplied() {
        if(this._appliedSet) {
            return new Set(this.selected.filter(x => !this._appliedSet!.has(x)))
        }
        return new Set(this.selected)
    }
}
