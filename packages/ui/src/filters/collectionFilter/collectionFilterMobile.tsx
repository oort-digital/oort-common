import { logger } from "@oort/logger"
import { observer } from "mobx-react"
import { useEffect } from "react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { FilterListenerActionType, ICommonProps, IFilterListeners } from "./typesAndInterfaces"


export interface ICollectionFilterMobileProps extends ICommonProps {
	addFilterEventListeners?: FilterListenerActionType
	removeFilterEventListeners?: FilterListenerActionType
}

const Impl = ({ filterStore, searchable = true, searchPlaceholder, circleIcons = true,
	addFilterEventListeners, removeFilterEventListeners, onChange, noClear = false }: ICollectionFilterMobileProps) => {

	const debug = (msg: string) => {
		logger.debug(`CollectionFilterMobile. ${msg}`)
	}

	const onClose = () => {
		debug('onClose')
		filterStore.clearNotApplied()
	}

	const onClear = () => {
		debug('onClear')
		onChange([])
		filterStore.clearNotApplied()
	}

	const onSubmit = () => {
		debug(`onSubmit1. selectedLen ${filterStore.selected.length}`)
		filterStore.copyNotAppliedToRecent && filterStore.copyNotAppliedToRecent()
		debug(`onSubmit2. selectedLen ${filterStore.selected.length}`)
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
	  }, []);
	
    return <CollectionFilterContent
			circleIcons={circleIcons}
			searchPlaceholder={searchPlaceholder}
			searchable={searchable}
			filterStore={filterStore}
		/>
}

export const CollectionFilterMobile = observer(Impl)
