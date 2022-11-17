import { BaseCollectionFilterStore } from "./baseCollectionFilterStore";
import { ICollectionFilterItem, ICollectionFilterStore, ItemKeyType, SelectMode } from "./typesAndInterfaces";
export declare class StaticCollectionFilterStore extends BaseCollectionFilterStore implements ICollectionFilterStore {
    setApplied(appliedKeys: ItemKeyType[]): Promise<void>;
    constructor(selectMode: SelectMode, items: ICollectionFilterItem[]);
}
//# sourceMappingURL=staticCollectionFilterStore.d.ts.map