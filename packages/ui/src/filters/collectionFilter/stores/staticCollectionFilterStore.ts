import {  action, makeObservable } from "mobx"
import { BaseCollectionFilterStore } from "./baseCollectionFilterStore"
import { ICollectionFilterItem, ICollectionFilterStore, ItemKeyType, SelectMode } from "./typesAndInterfaces"

export class StaticCollectionFilterStore extends BaseCollectionFilterStore implements ICollectionFilterStore {
    
    setApplied(appliedKeys: ItemKeyType[]): Promise<void> {
        this._appliedSet = new Set(appliedKeys)
        this.selected = [...appliedKeys]
        this.appliedItems = this.all.filter(x => appliedKeys.some(a => a === x.key))
        return Promise.resolve()
    }

    constructor(selectMode: SelectMode, items: ICollectionFilterItem[]) {
        super(selectMode)
        this.all = items

        makeObservable(this, {
            setApplied: action
        })
    }
}
