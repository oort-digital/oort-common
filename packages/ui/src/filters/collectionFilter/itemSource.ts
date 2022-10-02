import { StoreState } from "./storeState";
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";

export interface IItemSource {
	items: ICollectionFilterItem[];
    term: string
	state: StoreState;
	loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean>
    hasLoadMore: boolean
    setTerm(term: string): void
    setItems(items: ICollectionFilterItem[]): void;

    getAppliedItems(appliedIds: ItemKeyType[]): Promise<ICollectionFilterItem[]>
}
