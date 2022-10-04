export type ItemKeyType = string | number

export interface ICollectionFilterItem {
	key: ItemKeyType
	iconUrl: string,
	title: string
	count?: number
}

export interface IFilterListeners {
    submit: () => void
    close: () => void
    clear: () => void
}

export type FilterListenerActionType = (listeners: IFilterListeners) => void