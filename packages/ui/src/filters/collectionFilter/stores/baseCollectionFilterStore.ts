import { action, makeObservable, observable } from "mobx";
import { SelectMode } from "..";
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";


export abstract class BaseCollectionFilterStore {

    all: ICollectionFilterItem[] = [];
    selected: ItemKeyType[] = [];
    appliedItems: ICollectionFilterItem[] = [];
    term: string = '';

    hasLoadMore: boolean = false;
    isLoading: boolean = false;

    setTerm(term: string): void {
        this.term = term;
    }

    // not sure that we use it
    setItems(items: ICollectionFilterItem[]): void {
        this.all = items;
    }

    clearNotApplied() {
        if (this._appliedSet) {
            this.selected = [...this._appliedSet];
        }
        else {
            this.selected = [];
        }
    }

    select(key: ItemKeyType, checked: boolean): void {
        if(this.selectMode === SelectMode.Multy) {
            this.selectMulty(key, checked)
        }
        else if(this.selectMode === SelectMode.Single) {
            this.selectSingle(key, checked)
        }
        else if(this.selectMode === SelectMode.SingleRequired) {
            this.selectSingleRequired(key, checked)
        }
        else {
            throw new Error(`Unknown select mode ${this.selectMode}`)
        }
    }

    constructor(selectMode: SelectMode) {
        this.selectMode = selectMode;

        makeObservable(this, {
            appliedItems: observable,
            selected: observable,
            all: observable,
            term: observable,
            isLoading: observable,
            hasLoadMore: observable,
            setItems: action,
            setTerm: action,
            select: action,
            clearNotApplied: action,
        })
    }

    private selectMulty(key: ItemKeyType, checked: boolean): void {
        if (checked) {
            this.selected = [...this.selected, key];
        }
        else {
            this.selected = this.selected.filter(x => x !== key);
        }
    }

    private selectSingle(key: ItemKeyType, checked: boolean): void {
        if (checked) {
            this.selected = [key];
        }
        else {
            this.selected = [];
        }
    }

    private selectSingleRequired(key: ItemKeyType, checked: boolean): void {
        if (checked) {
            this.selected = [key];
        }
        else {
            this.selected = [];
        }
    }

    protected _appliedSet: Set<ItemKeyType> | undefined;
    private readonly selectMode: SelectMode
}
