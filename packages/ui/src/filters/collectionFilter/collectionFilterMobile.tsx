import { observer } from "mobx-react"
import { CollectionFilterContent, ICollection } from "./collectionFilterContent"
import { CollectionFilterStore } from "./collectionFilterStore"

interface IProps {
	title: string
	collectionFilterStore: CollectionFilterStore
	chainId: number
	applied: ICollection[]
	searchable: boolean
	selectSingle: boolean
}

const Impl = ({ collectionFilterStore, chainId, applied, searchable, selectSingle }: IProps) => {

    return <CollectionFilterContent
			selectSingle={selectSingle}
			searchable={searchable}
			applied={applied}
			chainId={chainId}
			collectionFilterStore={collectionFilterStore}
		/>
	
}

export const CollectionFilterMobile = observer(Impl)
