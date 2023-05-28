import { runInAction } from 'mobx'
import { CollectionFilterStore, ICollectionFilterItem, ItemKeyType, SelectMode } from '../stores';

export class LoadingStoreStub extends CollectionFilterStore {
    
    async loadNextPage(_signal: AbortSignal): Promise<void> {
        runInAction(() => {
            this.isLoading = true
        })
    }

    protected async getAppliedItems(_appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> {
        return []
    }
  
    constructor() {
        super({ selectMode: SelectMode.Multy, cacheKeyPrefixFunc: () => 'storybook_collection_filter_loading' })
    }
}
