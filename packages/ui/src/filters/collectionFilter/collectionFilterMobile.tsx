import { observer } from "mobx-react"
import { useEffect } from "react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { FilterListenerActionType, ICommonProps, IFilterListeners } from "./typesAndInterfaces"


export interface ICollectionFilterMobileProps extends ICommonProps {
	addFilterEventListeners?: FilterListenerActionType
	removeFilterEventListeners?: FilterListenerActionType
}

const Impl = ({ filterStore, searchable, searchPlaceholder, circleIcons,
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
			circleIcons={circleIcons}
			searchPlaceholder={searchPlaceholder}
			searchable={searchable}
			filterStore={filterStore}
		/>
}

export const CollectionFilterMobile = observer(Impl)
