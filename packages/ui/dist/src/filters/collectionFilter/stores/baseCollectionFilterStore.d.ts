import { SelectMode } from "..";
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
export declare abstract class BaseCollectionFilterStore {
    readonly selectMode: SelectMode;
    all: ICollectionFilterItem[];
    selected: ItemKeyType[];
    appliedItems: ICollectionFilterItem[];
    term: string;
    hasLoadMore: boolean;
    isLoading: boolean;
    setTerm(term: string): void;
    setItems(items: ICollectionFilterItem[]): void;
    clearNotApplied(): void;
    select(key: ItemKeyType, checked: boolean): void;
    constructor(selectMode: SelectMode);
    private selectMulty;
    private selectSingle;
    private selectSingleRequired;
    protected _appliedSet: Set<ItemKeyType> | undefined;
}
//# sourceMappingURL=baseCollectionFilterStore.d.ts.map