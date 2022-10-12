import { CollectionFilter, ICollectionFilterItem } from "@oort/ui"
import { NftsCollectionSource } from "./collectionSource/nftsCollectionSource"


export const CollectionFilterPage = () => {

    const onChange = (collections: ICollectionFilterItem[]) => {

    }

    return <CollectionFilter
        title={'Title'}
        popoverTitle={'PopoverTitle'}
        searchPlaceholder={'Enter text'}
        applied={[1, 2]}
        cacheKeyPrefixFunc={() => 'storybook_collection_filter'}
        itemSource={new NftsCollectionSource()}
        onChange={onChange}
        searchable={true}
        selectSingle={false}


    />

}