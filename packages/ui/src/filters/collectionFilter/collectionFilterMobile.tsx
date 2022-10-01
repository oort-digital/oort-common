import { observer } from "mobx-react"
import { CollectionFilterContent } from "./collectionFilterContent"
import { CollectionFilterStore } from "./collectionFilterStore"
import { ICollectionFilterItem } from "./itemSource"

interface IProps {
	title: string
	collectionFilterStore: CollectionFilterStore
	applied: ICollectionFilterItem[]
	searchable: boolean
	selectSingle: boolean
	searchPlaceholder: string
}

const Impl = ({ collectionFilterStore, applied, searchable, selectSingle, searchPlaceholder }: IProps) => {

    return <CollectionFilterContent
			searchPlaceholder={searchPlaceholder}
			selectSingle={selectSingle}
			searchable={searchable}
			applied={applied}
			collectionFilterStore={collectionFilterStore}
		/>
}

export const CollectionFilterMobile = observer(Impl)
