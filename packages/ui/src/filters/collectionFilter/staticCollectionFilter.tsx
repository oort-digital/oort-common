import { observer } from "mobx-react"
import { CSSProperties, useEffect, useState } from "react"
import { TooltipPlacement } from "antd/es/tooltip"
import { ICollectionFilterItem, ItemKeyType, SelectMode, StaticCollectionFilterStore } from "./stores"
import { CollectionFilter } from "./collectionFilter"

interface IProps {
	triggerBtnClassName?: string
	popoverClassName?: string
	popoverStyle?: CSSProperties | undefined
	items: ICollectionFilterItem[]
	title: string
	applied: ItemKeyType[]
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable?: boolean
	searchPlaceholder?: string
    circleIcons?: boolean
    noClear?: boolean
	popoverTitle: string
	visible?: boolean
    showTriggerButton?: boolean
    showClose?: boolean
    showCancel?: boolean
    showClear?: boolean
	onVisibleChange?: (isVisible: boolean) => void
	placement?: TooltipPlacement
	selectMode?: SelectMode
}

const Impl = (props: IProps) => {

	const selectMode = props.selectMode ?? SelectMode.Multy
	const [ filterStore, setStore ] = useState<StaticCollectionFilterStore>()
	useEffect(() => {
		setStore(new StaticCollectionFilterStore(selectMode, props.items))
	}, [props.items, selectMode])

	useEffect(() => {
		if(filterStore) {
			filterStore.setApplied(props.applied)
		}
	}, [props.applied, filterStore])

	if(!filterStore) {
		return null
	}

	const mergedProps = { ...props, ...{ filterStore } }

    return <CollectionFilter {...mergedProps} >
	</CollectionFilter>
}

export const StaticCollectionFilter = observer(Impl)