import { delayAsync } from '@oort-digital/utils';
import { runInAction } from 'mobx'
import { addressToDataURL } from '../../../blockieAddress';
import { CollectionFilterStore, ICollectionFilterItem, ItemKeyType, SelectMode } from '../stores';

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const nameLen = 5;

class Source {

    private _items: ICollectionFilterItem[] = []
    private _noIcon: boolean

    private static generateName(idx: number): string {
        const alphaIdx = idx % alpha.length
        const symbol = alpha[alphaIdx]
        let result = ''
        for(let i = 0; i < nameLen; i++) {
            result = result + symbol;
        }
        return result
    }

    constructor(len: number, noIcon: boolean) {
        this._noIcon = noIcon
        for(let i = 0; i < len; i++) {
            this._items.push({
                key: i,
                title: Source.generateName(i),
                icon: this._noIcon ? null : addressToDataURL(i.toString()),
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

export interface IInMemoryStoreStubConfig {
    useRecent?: boolean
    useFavorites?: boolean
    noIcons?: boolean
}

export class InMemoryStoreStub extends CollectionFilterStore {
    
    async loadNextPage(_signal: AbortSignal): Promise<void> {

        runInAction(() => {
            this.isLoading = true
        })
        
        await delayAsync(this._delay)

        const page = this._source.featch({
            take: this.pageSize,
            skip: this.offset,
            term: this.term })

        this.addNewPage(page)
    }

    protected async getAppliedItems(_appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> {
        return []
    }
  
    constructor({ useFavorites = true, useRecent = true, noIcons = false }: IInMemoryStoreStubConfig) {
        super({ selectMode: SelectMode.Multy, useFavorites, useRecent, cacheKeyPrefixFunc: () => 'storybook_collection_filter_in_memory' })
        this._source = new Source(100, noIcons)
    }

    private _source: Source
    private _delay = 1000
     
    private get offset() {
        return this.curPage * this.pageSize
    }

}
