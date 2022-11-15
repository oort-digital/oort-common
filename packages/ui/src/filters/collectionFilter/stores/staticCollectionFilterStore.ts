import {  runInAction } from "mobx"
import { BaseCollectionFilterStore } from "./baseCollectionFilterStore"
import { ICollectionFilterItem, ICollectionFilterStore, ItemKeyType, SelectMode } from "./typesAndInterfaces"

export class StaticCollectionFilterStore extends BaseCollectionFilterStore implements ICollectionFilterStore {
    
    async setApplied(appliedKeys: ItemKeyType[]): Promise<void> {
        this._appliedSet = new Set(appliedKeys)
        this.selected = [...appliedKeys]
        
        runInAction(() => {
            this.appliedItems = this.all.filter(x => appliedKeys.some(a => a === x.key))
        })
    }

    constructor(selectMode: SelectMode, items: ICollectionFilterItem[]) {
        super(selectMode)
        this.all = items
    }
}
