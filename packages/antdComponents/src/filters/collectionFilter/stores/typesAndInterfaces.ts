import { ReactElement } from "react"

export enum SelectMode {
    Multy,
    Single,
    // have no unselected items
    SingleRequired
}

export type ItemKeyType = string | number

export interface ICollectionFilterItem {
	key: ItemKeyType
	icon?: ReactElement | string | null,
	title: string
	count?: number
}

export interface ICollectionFilterStore {
    selectMode: SelectMode
    //tabs items
    all: ICollectionFilterItem[]
    recent?: ICollectionFilterItem[] | null
    favorites?: ICollectionFilterItem[] | null
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
}