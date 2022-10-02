import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { IItemSource } from "./itemSource"
import { ItemKeyType } from "./typesAndInterfaces"
import { useFilterStore } from "./useFilterStore"

interface IProps {
	title: string
	applied: ItemKeyType[]
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
	cacheKeyPrefixFunc: () => string
    itemSource: IItemSource
    recentMaxSize?: number
    favoriteMaxSize?: number
}

const Impl = ({ applied, searchable, selectSingle, searchPlaceholder, cacheKeyPrefixFunc, itemSource, favoriteMaxSize, recentMaxSize }: IProps) => {

	const filterStore = useFilterStore({
		cacheKeyPrefixFunc: cacheKeyPrefixFunc,
		itemSource: itemSource,
		favoriteMaxSize: favoriteMaxSize,
		recentMaxSize: recentMaxSize
	}, applied)
	
    return <CollectionFilterContent
			searchPlaceholder={searchPlaceholder}
			selectSingle={selectSingle}
			searchable={searchable}
			filterStore={filterStore}
		/>
}

export const CollectionFilterMobile = observer(Impl)
