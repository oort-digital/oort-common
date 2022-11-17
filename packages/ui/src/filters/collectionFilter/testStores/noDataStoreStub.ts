import { runInAction } from 'mobx'
import { delayAsync } from '../../../utils';
import { CollectionFilterStore, ICollectionFilterItem, ItemKeyType, SelectMode } from '../stores';

export class NoDataStoreStub extends CollectionFilterStore {
    
    async loadNextPage(_signal: AbortSignal): Promise<void> {
        runInAction(() => {
            this.isLoading = true
        })
        await delayAsync(1000)
        this.addNewPage([])
    }

    protected async getAppliedItems(_appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> {
        return []
    }
  
    constructor() {
        super({ selectMode: SelectMode.Multy, cacheKeyPrefixFunc: () => 'storybook_collection_filter_no_data' })
    }
}
