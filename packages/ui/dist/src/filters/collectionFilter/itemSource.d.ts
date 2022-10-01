import { StoreState } from "./storeState";
import { ICollectionFilterItem } from "./typesAndInterfaces";
export interface IItemSource {
    items: ICollectionFilterItem[];
    term: string;
    state: StoreState;
    loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean>;
    hasLoadMore: boolean;
    setTerm(term: string): void;
    setItems(items: ICollectionFilterItem[]): void;
}
//# sourceMappingURL=itemSource.d.ts.map