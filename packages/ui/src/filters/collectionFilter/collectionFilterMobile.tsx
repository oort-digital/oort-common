import { observer } from "mobx-react"
import { useEffect } from "react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { ICollectionFilterItem, ICollectionFilterStore } from "./stores"
import { FilterListenerActionType, IFilterListeners } from "./typesAndInterfaces"

export interface ICollectionFilterMobileProps {
	title: string
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
	addFilterEventListeners?: FilterListenerActionType
	removeFilterEventListeners?: FilterListenerActionType
	filterStore: ICollectionFilterStore
}

const Impl = ({ filterStore, searchable, selectSingle, searchPlaceholder, 
	addFilterEventListeners, removeFilterEventListeners, onChange }: ICollectionFilterMobileProps) => {

	const onClose = () => {
		filterStore.clearNotApplied()
	}

	const onClear = () => {
		onChange([])
		filterStore.clearNotApplied()
	}

	const onSubmit = () => {
		filterStore.copyNotAppliedToRecent && filterStore.copyNotAppliedToRecent()
		const selectedItems = filterStore.all.filter(x => filterStore.selected.some(s => s === x.key))
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
