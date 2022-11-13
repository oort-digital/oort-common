import styles from "./collectionFilter.module.less"
import { PopoverFilter } from "../popover"
import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { SubTitle } from "../subTitle"
import { useState } from "react"
import { ICollectionFilterItem, ICollectionFilterStore } from "./stores"

interface IProps {
	title: string
	popoverTitle: string
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
    filterStore: ICollectionFilterStore
	singleTab?: boolean
}

const Impl = ({ title, popoverTitle, onChange, searchable, selectSingle, searchPlaceholder, filterStore, singleTab }: IProps) => {

	const [bottomSpaceHeight, setBottomSpaceHeight] = useState<number>()

	const isClear = !filterStore.appliedItems.length
	const renderSubTitle = () => {
		if(isClear) {
			return null
		}
		return <SubTitle names={filterStore.appliedItems.map(x => x.title)} />
	}

	const onSubmit = () => {
		filterStore.copyNotAppliedToRecent()
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
			selectSingle={selectSingle}
			searchable={searchable}
			filterStore={filterStore}
			singleTab={singleTab}
		/>
	</PopoverFilter>
}

export const CollectionFilter = observer(Impl)