import { StoreState } from "./storeState";
export interface ICollectionFilterItem {
    tokenAddress: string;
    tokenName: string;
    count?: number;
}
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