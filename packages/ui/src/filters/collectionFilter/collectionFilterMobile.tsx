import { observer } from "mobx-react"
import { useEffect } from "react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { IItemSource } from "./itemSource"
import { FilterListenerActionType, ICollectionFilterItem, IFilterListeners, ItemKeyType } from "./typesAndInterfaces"
import { useFilterStore } from "./useFilterStore"

export interface ICollectionFilterMobileProps {
	title: string
	applied: ItemKeyType[]
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
	cacheKeyPrefixFunc: () => string
    itemSource: IItemSource
	addFilterEventListeners?: FilterListenerActionType
	removeFilterEventListeners?: FilterListenerActionType
    recentMaxSize?: number
    favoriteMaxSize?: number
}

const Impl = ({ applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize, 
	addFilterEventListeners, removeFilterEventListeners, onChange }: ICollectionFilterMobileProps) => {

	const filterStore = useFilterStore({
		cacheKeyPrefixFunc: cacheKeyPrefixFunc,
		itemSource: itemSource,
		favoriteMaxSize: favoriteMaxSize,
		recentMaxSize: recentMaxSize
	}, applied)

	const onClose = () => {
		filterStore.clearNotApplied()
	}

	const onClear = () => {
		onChange([])
		filterStore.clearNotApplied()
	}

	const onSubmit = () => {
		filterStore.copyNotAppliedToRecent()
		const selectedItems = filterStore.items.filter(x => filterStore.selected.some(s => s === x.key))
		onChange(selectedItems)
		filterStore.clearNotApplied()
	}

	const listeners: IFilterListeners = {
		submit: onSubmit,
		clear: onClear,
		close: onClose
	}

	useEffect(() => {
		addFilterEventListeners && addFilterEventListeners(listeners)
		return () => {
			removeFilterEventListeners && removeFilterEventListeners(listeners)
		};
	  }, []);
	
    return <CollectionFilterContent
			searchPlaceholder={searchPlaceholder}
			selectSingle={selectSingle}
			searchable={searchable}
			filterStore={filterStore}
		/>
}

export const CollectionFilterMobile = observer(Impl)
