import { ICollectionFilterItem, ICollectionFilterStore } from "./stores"


export interface IFilterListeners {
    submit: () => void
    close: () => void
    clear: () => void
}

export type FilterListenerActionType = (listeners: IFilterListeners) => void

export interface ICommonProps {
    itemTitleMaxLen?: number
	title: string
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable?: boolean
	searchPlaceholder?: string
    filterStore: ICollectionFilterStore
    circleIcons?: boolean
    noClear?: boolean
}