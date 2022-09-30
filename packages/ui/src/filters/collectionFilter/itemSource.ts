import { ReactNode } from "react";
import { StoreState } from "./storeState";

export interface ICollectionFilterItem {
	key: string
	icon: ReactNode,
	title: string
	count?: number
}

export interface IItemSource {
	items: ICollectionFilterItem[];
    term: string
	state: StoreState;
	loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean>
    hasLoadMore: boolean
    setTerm(term: string): void
    setItems(items: ICollectionFilterItem[]): void;
}
