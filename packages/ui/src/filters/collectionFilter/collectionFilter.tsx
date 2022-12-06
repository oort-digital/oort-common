import styles from "./collectionFilter.module.less"
import { PopoverFilter } from "../popover"
import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { SubTitle } from "../subTitle"
import { useState } from "react"
import { ICommonProps } from "./typesAndInterfaces"
import { TooltipPlacement } from "antd/es/tooltip"

export interface ICollectionFilterProps extends ICommonProps {
	popoverTitle: string
	visible?: boolean
    showTriggerButton?: boolean
    showClose?: boolean
    showCancel?: boolean
    showClear?: boolean
	onVisibleChange?: (isVisible: boolean) => void
	placement?: TooltipPlacement
}

const Impl = ({ title, popoverTitle, onChange,
	searchable = true, searchPlaceholder, filterStore,
	circleIcons = true, noClear = false, visible,
	showTriggerButton, showClose, onVisibleChange,
	showCancel, showClear, placement }: ICollectionFilterProps) => {

	const [bottomSpaceHeight, setBottomSpaceHeight] = useState<number>()

	const isClear = !filterStore.appliedItems.length
	const renderSubTitle = () => {
		if(isClear) {
			return null
		}
		return <SubTitle names={filterStore.appliedItems.map(x => x.title)} />
	}

	const onSubmit = () => {
		filterStore.copyNotAppliedToRecent && filterStore.copyNotAppliedToRecent()
		const selectedItems = filterStore.all.filter(x => filterStore.selected.some(s => s === x.key))
		onChange(selectedItems)
		filterStore.clearNotApplied()
	}

	const _onVisibleChange = (isVisible: boolean) => {
		if(!isVisible) {
			filterStore.clearNotApplied()
		}
		onVisibleChange && onVisibleChange(isVisible)
	}

	const onClear = () => {
		onChange([])
		filterStore.clearNotApplied()
	}

	const onBottomSpaceHeightChange = (h: number) => {
		setBottomSpaceHeight(h)
	}

    return <PopoverFilter
		onBottomSpaceHeightChange={onBottomSpaceHeightChange}
		triggerBtnClassName={styles.collection_trigger_btn}
		popoverClassName={styles.collection_popover_content}
		popoverTitleClassName={styles.title}
		// applyButtonClassName={styles.apply}
		onVisibleChange={_onVisibleChange}
		onSubmit={onSubmit}
		title={title}
		subTitle={renderSubTitle()}
		popoverTitle={popoverTitle}
		visible={visible}
		showTriggerButton={showTriggerButton}
        showClose={showClose}
        showCancel={showCancel}
        showClear={showClear}
		// submitDisabled={!notSubmited.length}
		isClear={isClear}
		onClear={noClear ? undefined : onClear}
		placement={placement}>

        <CollectionFilterContent
			circleIcons={circleIcons}
			bottomSpaceHeight={bottomSpaceHeight}
			searchPlaceholder={searchPlaceholder}
			searchable={searchable}
			filterStore={filterStore}
		/>
	</PopoverFilter>
}

export const CollectionFilter = observer(Impl)