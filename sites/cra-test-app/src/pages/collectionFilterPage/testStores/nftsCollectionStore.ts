import {runInAction} from "mobx"
import { CollectionFilterStore, EMPTY_ABORT_SIGNAL, ICollectionFilterItem, ItemKeyType } from "@oort/ui"
import { OortClient } from "./oortClient";
import { SearchGameHubType } from "./typesAndInterfaces";
import { CollectionFilterStoreForDebug } from "./collectionFilterStoreForDebug";

export class NftsCollectionStore extends CollectionFilterStore {

    loadNextPage = async (reset: boolean, signal: AbortSignal): Promise<void> => {
        //const traceId = this.term
        runInAction(() => {
            this.isLoading = true
        })
        if (reset) {
            runInAction(() => this.reset())
        }

        const nextPageNum = this.curPage + 1

        let page: ICollectionFilterItem[] = []
        // try {
            const response = await this._oortClient.getSearch({
                url: SearchGameHubType.searchNFTCollections,
                keywords: this.term,
                pageNum: nextPageNum,
                pageSize: this.pageSize
            }, signal);
    
            page = response.dataList.map<ICollectionFilterItem>(x => ({
                key: x.id,
                title: x.name,
                iconUrl: x.logo,
            }))
        // }
        // catch(e: any) {
        //     if(e.constructor.name === 'CanceledError') {
        //         debugger
        //     } 
        //     debugger
        // }
        

        this.addNewPage(page)
    }

    async getAppliedItems(appliedIds: ItemKeyType[]): Promise<ICollectionFilterItem[]> {
        const promises = appliedIds.map(id => {
            const idNum = id as number
            return this._oortClient.nftDetail({
                nftCollectionId: idNum
            }, EMPTY_ABORT_SIGNAL).then(x => x.nftCollection)
        })

        const collections = await Promise.all(promises)

        return collections.map(x => ({
            key: x.id,
            iconUrl: x.logo,
            title: x.name
        }))
    }

    constructor() {
        super({
            cacheKeyPrefixFunc: () => 'storybook_collection_filter'
        })
        this._oortClient = new OortClient({apiUrl: "https://api-test.oort.digital/platform"})
    }

    private readonly _oortClient: OortClient

}
