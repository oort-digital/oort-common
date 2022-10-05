import styles from "./collectionFilter.module.less"
import { PopoverFilter } from "../popover"
import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { SubTitle } from "../subTitle"
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces"
import { IItemSource } from "./itemSource"
import { useFilterStore } from "./useFilterStore"

interface IProps {
	title: string
	popoverTitle: string
	applied: ItemKeyType[]
	onChange: (collections: ICollectionFilterItem[]) => void
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
	cacheKeyPrefixFunc: () => string
    itemSource: IItemSource
    recentMaxSize?: number
    favoriteMaxSize?: number
}

const Impl = ({ title, popoverTitle, onChange, applied, searchable, selectSingle, searchPlaceholder,
	cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize }: IProps) => {

	const filterStore = useFilterStore({
		cacheKeyPrefixFunc: cacheKeyPrefixFunc,
		itemSource: itemSource,
		favoriteMaxSize: favoriteMaxSize,
		recentMaxSize: recentMaxSize
	}, applied)

	const isClear = !applied.length

	const renderSubTitle = () => {
		if(isClear) {
			return null
		}

		return <SubTitle names={filterStore.appliedItems.map(x => x.title)} />
	}

	const onSubmit = () => {
		filterStore.copyNotAppliedToRecent()
		const selectedItems = filterStore.items.filter(x => filterStore.selected.some(s => s === x.key))
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
		onClear={onClear}>


        <CollectionFilterContent
			searchPlaceholder={searchPlaceholder}
			selectSingle={selectSingle}
			searchable={searchable}
			filterStore={filterStore}
		/>
	</PopoverFilter>
}

export const CollectionFilter = observer(Impl)