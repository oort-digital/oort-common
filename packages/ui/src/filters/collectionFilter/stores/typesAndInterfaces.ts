export type ItemKeyType = string | number

export interface ICollectionFilterItem {
	key: ItemKeyType
	iconUrl: string,
	title: string
	count?: number
}

export interface ICollectionFilterStoreParams {
    pageSize?: number
    recentMaxSize?: number
    favoriteMaxSize?: number
    cacheKeyPrefixFunc: () => string
}

export interface ICollectionFilterStore {

    //tabs items
    all: ICollectionFilterItem[]
    recent?: ICollectionFilterItem[]
    favorites?: ICollectionFilterItem[]
    term: string
    appliedItems: ICollectionFilterItem[]
    selected: ItemKeyType[]
    hasLoadMore: boolean
    isLoading: boolean
    clearNotApplied: () => void
    copyNotAppliedToRecent?: () => void
    setTerm: (term: string) => void
    reset?: () => void
    setFavorites?: (item: ICollectionFilterItem, checked: boolean) => void
    loadNextPage?: (signal: AbortSignal) => Promise<void>
    loadFavoritesFromCache?: () => void
    loadRecentFromCache?: () => void
    select: (key: ItemKeyType, checked: boolean) => void
    selectSingle: (key: ItemKeyType, checked: boolean) => void
}