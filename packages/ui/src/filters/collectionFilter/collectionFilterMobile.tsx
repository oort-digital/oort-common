import { observer } from "mobx-react"
import { useEffect } from "react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { IItemSource } from "./itemSource"
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces"
import { useFilterStore } from "./useFilterStore"

export type FilterListenerType = () => void
export type CollectionFilterEventTypes = 'submit' | 'clear' | 'close'

export interface ICollectionFilterMobileProps {
	title: string
	applied: ItemKeyType[]
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
	cacheKeyPrefixFunc: () => string
    itemSource: IItemSource
	addFilterEventListener: (eventType: CollectionFilterEventTypes, listener: FilterListenerType) => void
	removeFilterEventListener: (eventType: CollectionFilterEventTypes, listener: FilterListenerType) => void
    recentMaxSize?: number
    favoriteMaxSize?: number
}

const Impl = ({ applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize, 
	addFilterEventListener, removeFilterEventListener, onChange }: ICollectionFilterMobileProps) => {

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

	useEffect(() => {

		addFilterEventListener('submit', onSubmit);
		addFilterEventListener('clear', onClear);
		addFilterEventListener('close', onClose);
	
		return () => {
			removeFilterEventListener('submit', onSubmit);
			removeFilterEventListener('clear', onClear);
			removeFilterEventListener('close', onClose);
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
