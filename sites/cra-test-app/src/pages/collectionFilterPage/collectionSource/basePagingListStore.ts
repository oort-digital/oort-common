import { runInAction } from "mobx"
import { BaseListStore } from "./baseListStore"
import { StoreState } from "./storeState"

export abstract class BasePagingListStore<TItem> extends BaseListStore<TItem> {

    private _curPage: number = 0

    protected addNewPage(page: TItem[], pageNum: number) {
        runInAction(() => {
            if(pageNum === 1) {
                this.items = page
            }
            else {
                this.items = this.items.concat(page)
            }
            this.state = StoreState.Done
            this.hasLoadMore = page.length === this.pageSize
        })
        this._curPage = pageNum
    }

    protected reset(): void {
        this._curPage = 0
        this.items = []
    }

    protected get curPage(): number {
        return this._curPage
    }

}