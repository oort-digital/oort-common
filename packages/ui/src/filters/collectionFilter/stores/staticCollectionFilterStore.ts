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
            setApplied: action,
            selectSingle: action,
        })
    }

    private _appliedSet: Set<ItemKeyType> | undefined
}
