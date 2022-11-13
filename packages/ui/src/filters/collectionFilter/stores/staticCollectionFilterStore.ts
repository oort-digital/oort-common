import { action, makeObservable, observable, runInAction } from "mobx"
import { ICollectionFilterItem, ICollectionFilterStore, ItemKeyType } from "./typesAndInterfaces"

export class StaticCollectionFilterStore implements ICollectionFilterStore {
    
    //tabs items
    all: ICollectionFilterItem[] = []

    selected: ItemKeyType[] = []
   
    appliedItems: ICollectionFilterItem[] = []
    term: string = ''
    
    hasLoadMore: boolean = false
    isLoading: boolean = false

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

    async setApplied(appliedKeys: ItemKeyType[]): Promise<void> {
        this._appliedSet = new Set(appliedKeys)
        this.selected = [...appliedKeys]
        
        runInAction(() => {
            this.appliedItems = this.all.filter(x => appliedKeys.some(a => a === x.key))
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

    constructor(items: ICollectionFilterItem[]) {

        this.all = items
        makeObservable(this, {
            appliedItems: observable,
            selected: observable,
            all: observable,
            term: observable,
            setItems: action,
            setTerm: action,
            select: action,
            clearNotApplied: action,
            copyNotAppliedToRecent: action,
            setApplied: action,
            selectSingle: action,
        })
    }

    private _appliedSet: Set<ItemKeyType> | undefined

    private get notApplied() {
        if(this._appliedSet) {
            return new Set(this.selected.filter(x => !this._appliedSet!.has(x)))
        }
        return new Set(this.selected)
    }
}
