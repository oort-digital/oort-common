import { logger } from "@oort/logger"
import { action, makeObservable, observable, runInAction } from "mobx"
import { LocalStorageCacheProvider } from "../../../cache"
import { ItemQueue } from "../itemQueue"
import { ICollectionFilterItem, ICollectionFilterStore, ICollectionFilterStoreParams, ItemKeyType } from "./typesAndInterfaces"

const itemKeyFunc = (item: ICollectionFilterItem): ItemKeyType => item.key

export abstract class CollectionFilterStore implements ICollectionFilterStore {
    
    //tabs items
    favorites: ICollectionFilterItem[] = []
    recent: ICollectionFilterItem[] = []
    all: ICollectionFilterItem[] = []

    selected: ItemKeyType[] = []
   
    appliedItems: ICollectionFilterItem[] = []
    term: string = ''
    
    hasLoadMore: boolean = false
    isLoading: boolean = false

    loadFavoritesFromCache = () => {
        this.favorites = this.loadFromCache(this.getFavoritesKey(), this._favoritesQueue)
    }

    loadRecentFromCache = () => {
        this.recent = this.loadFromCache(this.getRecentKey(), this._recentQueue)
    }

    abstract loadNextPage(signal: AbortSignal): Promise<void>
    protected abstract getAppliedItems(appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> 

    setTerm(term: string): void {
        this.term = term
    }

    setItems(items: ICollectionFilterItem[]): void {
        this.all = items
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
        if(this.all.length) {
            this.all.forEach(it => {
                if(this._appliedSet!.has(it.key)) {
                    appliedItems.push(it)
                    loadFromSource = loadFromSource.filter(x => x !== it.key)
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
            const notAppliedItems = this.all.filter(x => this.notApplied.has(x.key))
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

    protected get nextPageCursor(): string | undefined {
        return this._nextPageCursor
    }

    protected readonly pageSize: number

    protected addNewPage(page: ICollectionFilterItem[], nextPageCursor?: string) {
        runInAction(() => {
            this.all = this.all.concat(page)
            this.isLoading = false
            this.hasLoadMore = page.length === this.pageSize
        })
        this._nextPageCursor = nextPageCursor
        this._curPage++
    }

    public reset(): void {
        this._nextPageCursor = undefined
        this._curPage = 0
        this.all = []
    }

    constructor({cacheKeyPrefixFunc, recentMaxSize = 20, favoriteMaxSize = 20, pageSize = 20}: ICollectionFilterStoreParams) {

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
            all: observable,
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
            selectSingle: action,
            reset: action
        })
    }

    private _nextPageCursor: string | undefined
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
