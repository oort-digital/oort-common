import styles from "./collectionFilter.module.less"
import { PopoverFilter } from "../popover"
import { CollectionFilterStore } from "./collectionFilterStore"
import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { SubTitle } from "../subTitle"
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces"

interface IProps {
	title: string
	popoverTitle: string
	applied: ItemKeyType[]
	collectionFilterStore: CollectionFilterStore
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
}

const Impl = ({ title, popoverTitle, collectionFilterStore, onChange, applied, searchable, selectSingle, searchPlaceholder }: IProps) => {
	
	const { selected, appliedItems } = collectionFilterStore

	const isClear = !applied.length

	const renderSubTitle = () => {
		if(isClear) {
			return null
		}

		return <SubTitle names={appliedItems.map(x => x.title)} />
	}

	const onSubmit = () => {
		collectionFilterStore.copyNotAppliedToRecent()
		const selectedItems = collectionFilterStore.items.filter(x => selected.some(s => s === x.key))
		onChange(selectedItems)
		collectionFilterStore.clearNotApplied()
	}

	const onVisibleChange = (isVisible: boolean) => {
		if(!isVisible) {
			collectionFilterStore.clearNotApplied()
		}
	}

	const onClear = () => {
		onChange([])
		collectionFilterStore.clearNotApplied()
		// if (onChangeClear){
        //     onChangeClear();
		// }
	}

    return <PopoverFilter
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
		onClear={onClear} >


        <CollectionFilterContent
			searchPlaceholder={searchPlaceholder}
			selectSingle={selectSingle}
			searchable={searchable}
			applied={applied}
			collectionFilterStore={collectionFilterStore}
		/>
  </PopoverFilter>
}

export const CollectionFilter = observer(Impl)