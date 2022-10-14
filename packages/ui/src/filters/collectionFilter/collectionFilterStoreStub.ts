import { runInAction } from 'mobx'
import { addressToDataURL } from '../../blockieAddress';
import { delayAsync } from '../../utils';
import { CollectionFilterStore } from './collectionFilterStore';
import { ICollectionFilterItem, ItemKeyType } from './typesAndInterfaces';

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const nameLen = 5;

class Source {

    private _items: ICollectionFilterItem[] = []

    private static generateName(idx: number): string {
        const alphaIdx = idx % alpha.length
        const symbol = alpha[alphaIdx]
        let result = ''
        for(let i = 0; i < nameLen; i++) {
            result = result + symbol;
        }
        return result
    }

    constructor(len: number) {
        for(let i = 0; i < len; i++) {
            this._items.push({
                key: i,
                title: Source.generateName(i),
                iconUrl: addressToDataURL(i.toString()),
                count: i
            })
        }
    }

    featch(params: { skip: number, take: number, term: string }): ICollectionFilterItem[] {
        const { skip, take, term } = params
        const filtred =  this._items.filter(c => c.title.includes(term));
        return filtred.slice(skip, take)
    }

    getByKey(key: ItemKeyType): ICollectionFilterItem {
        return this._items.find(x => x.key === key)!
    }

}

export class CollectionFilterStoreStub extends CollectionFilterStore {
    
    async loadNextPage(_reset: boolean, _signal: AbortSignal): Promise<void> {

        runInAction(() => {
            this.isLoading = true
        })
        
        await delayAsync(this._delay)

        const page = this._source.featch({
            take: this.pageSize,
            skip: this.offset,
            term: this.term })

        runInAction(() => {
            this.addNewPage(page)
        })
    }

    protected async getAppliedItems(_appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> {
        return []
    }
  
    constructor() {
        super({ cacheKeyPrefixFunc: () => 'storybook_collection_filter' })
        this._source = new Source(100)
    }

    private _source: Source
    private _delay = 1000
     
    private get offset() {
        return this.curPage * this.pageSize
    }

}
