import {action, makeObservable, observable, runInAction} from "mobx"
import {logger} from "@oort/logger";
import {EMPTY_ABORT_SIGNAL, ICollectionFilterItem, IItemSource, ItemKeyType} from "@oort/ui"

import { BasePagingListStore } from "./basePagingListStore";
import { StoreState } from "./storeState";
import { OortClient } from "./oortClient";
import { SearchGameHubType } from "./typesAndInterfaces";

export class NftsCollectionSource
    extends BasePagingListStore<ICollectionFilterItem>
    implements IItemSource {

    term: string = '';

    clear(): void {
        this.term = ''
        this.reset()
    }

    setItems(items: ICollectionFilterItem[]) {
        this.items = items;
    }

    setTerm(term: string): void {
        this.term = term;
        this.reset()
    }

    // Use in ant.select. It shouldn't be an action
    loadNextPage = async (reset: boolean, signal: AbortSignal): Promise<boolean> => {
        const traceId = this.term
        runInAction(() => {
            this.state = StoreState.Pending
        })
        if (reset) {
            runInAction(() => this.reset())
        }

        const nextPageNum = this.curPage + 1

        let page: ICollectionFilterItem[] = []
        try {
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
        }
        catch(e: any) {
            if(e.constructor.name === 'CanceledError') {
                debugger
            } 
            debugger
        }
        

        if (!signal.aborted) {
            this.addNewPage(page, nextPageNum)
            logger.debug(`ItemSourceAdaptor.loadNextPage finished. TraceId: ${traceId}`)
            return true
        }
        else {
            logger.debug(`ItemSourceAdaptor.loadNextPage aborted. TraceId: ${traceId}`)
        }

        return false
    }

    constructor() {
        super()

        this._oortClient = new OortClient({apiUrl: "https://api-test.oort.digital/platform"})

        makeObservable(this, {
            term: observable,
            setTerm: action,
            setItems: action,
            clear: action
        })
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

    private readonly _oortClient: OortClient

}
