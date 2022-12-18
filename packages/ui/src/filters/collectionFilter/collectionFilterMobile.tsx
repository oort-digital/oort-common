import { observer } from "mobx-react"
import { useEffect } from "react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { FilterListenerActionType, ICommonProps, IFilterListeners } from "./typesAndInterfaces"


export interface ICollectionFilterMobileProps extends ICommonProps {
	addFilterEventListeners?: FilterListenerActionType
	removeFilterEventListeners?: FilterListenerActionType
}

const Impl = ({ filterStore, searchable = true, searchPlaceholder, circleIcons = true,
	itemTitleMaxLen = 16,
	addFilterEventListeners, removeFilterEventListeners, onChange, noClear = false }: ICollectionFilterMobileProps) => {

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
		clear: noClear ? () => {} : onClear,
		close: onClose
	}

	useEffect(() => {
		addFilterEventListeners && addFilterEventListeners(listeners)
		return () => {
			removeFilterEventListeners && removeFilterEventListeners(listeners)
		};
	  }, [filterStore]);
	
    return <CollectionFilterContent
	  		itemTitleMaxLen={itemTitleMaxLen}
			circleIcons={circleIcons}
			searchPlaceholder={searchPlaceholder}
			searchable={searchable}
			filterStore={filterStore}
		/>
}

export const CollectionFilterMobile = observer(Impl)
