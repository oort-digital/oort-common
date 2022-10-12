import { CollectionFilter, ICollectionFilterItem } from "@oort/ui"
import { observer } from "mobx-react"
import { useState } from "react"
import { NftsCollectionSource } from "./collectionSource/nftsCollectionSource"


const Impl = () => {

    const [applied, setApplied] = useState([1, 2])

    const onChange = (collections: ICollectionFilterItem[]) => {
        setApplied(collections.map(x => x.key as number))
    }

    return <CollectionFilter
        title={'Title'}
        popoverTitle={'PopoverTitle'}
        searchPlaceholder={'Enter text'}
        applied={applied}
        cacheKeyPrefixFunc={() => 'storybook_collection_filter'}
        itemSource={new NftsCollectionSource()}
        onChange={onChange}
        searchable={true}
        selectSingle={false}


    />

}

export const CollectionFilterPage = observer(Impl)