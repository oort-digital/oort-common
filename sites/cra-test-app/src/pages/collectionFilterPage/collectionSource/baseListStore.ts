import { makeObservable, observable } from 'mobx'
import {StoreState} from './storeState'

export abstract class BaseListStore<TItem> {
    items: TItem[] = []
    state: StoreState = StoreState.Done
    hasLoadMore: boolean = false

    constructor() {
        makeObservable(this, {
            items: observable,
            state: observable,
            hasLoadMore: observable
        });
    }

    protected get pageSize() { return 5 }
}
