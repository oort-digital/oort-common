import styles from "./collectionFilter.module.less"
import { PopoverFilter } from "../popover"
import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { SubTitle } from "../subTitle"
import { useState } from "react"
import { ICommonProps } from "./typesAndInterfaces"

interface IProps extends ICommonProps {
	popoverTitle: string
}

const Impl = ({ title, popoverTitle, onChange, searchable, searchPlaceholder, filterStore }: IProps) => {

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

	const onVisibleChange = (isVisible: boolean) => {
		if(!isVisible) {
			filterStore.clearNotApplied()
		}
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
		applyButtonClassName={styles.apply}
		onVisibleChange={onVisibleChange}
		onSubmit={onSubmit}
		title={title}
		subTitle={renderSubTitle()}
		popoverTitle={popoverTitle}
		// submitDisabled={!notSubmited.length}
		isClear={isClear}
		onClear={onClear}>

        <CollectionFilterContent
			bottomSpaceHeight={bottomSpaceHeight}
			searchPlaceholder={searchPlaceholder}
			searchable={searchable}
			filterStore={filterStore}
		/>
	</PopoverFilter>
}

export const CollectionFilter = observer(Impl)