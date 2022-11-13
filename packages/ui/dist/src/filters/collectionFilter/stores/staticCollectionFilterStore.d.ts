import { ICollectionFilterItem, ICollectionFilterStore, ItemKeyType } from "./typesAndInterfaces";
export declare class StaticCollectionFilterStore implements ICollectionFilterStore {
    all: ICollectionFilterItem[];
    selected: ItemKeyType[];
    appliedItems: ICollectionFilterItem[];
    term: string;
    hasLoadMore: boolean;
    isLoading: boolean;
    setTerm(term: string): void;
    setItems(items: ICollectionFilterItem[]): void;
    clearNotApplied(): void;
    setApplied(appliedKeys: ItemKeyType[]): Promise<void>;
    select(key: ItemKeyType, checked: boolean): void;
    selectSingle(key: ItemKeyType, checked: boolean): void;
    constructor(items: ICollectionFilterItem[]);
    private _appliedSet;
}
//# sourceMappingURL=staticCollectionFilterStore.d.ts.map