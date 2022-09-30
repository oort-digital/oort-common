import {action, makeObservable, observable } from 'mobx'
import { delayAsync } from '../../utils';
import { ICollection } from './collectionFilterContent';
import { ICollectionFilterItem, IItemSource } from './itemSource'
import { StoreState } from './storeState';

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const nameLen = 5;

const addrTemplate = '0x0000000000000000000000000000000000000000'
const numberToAddress = (value: number): string => {
    const valStr = value.toString()
    const prefix = addrTemplate.substring(0, addrTemplate.length - valStr.length)
    return `${prefix}${valStr}`
}

class CollectionSource {

    private _collections: ICollection[] = []

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
            this._collections.push({
                tokenAddress: numberToAddress(i),
                tokenName: CollectionSource.generateName(i)
            })
        }
    }

    featch(params: { skip: number, take: number, term: string }): ICollection[] {
        const { skip, take, term } = params
        const filtred =  this._collections.filter(c => c.tokenName.includes(term));
        return filtred.slice(skip, take)
    }

}

export class ItemSourceStub implements IItemSource {
    
    term: string = ''
    state: StoreState = StoreState.Done
    hasLoadMore: boolean = false

    items: ICollectionFilterItem[] = []
    
    clear(): void {
        this.term = ''
        this.reset()
    }

    setTerm(term: string): void {
        this.term = term;
        this.reset()
    }

    setItems(items: ICollection[]): void {
        this.items = items;
    }

    // Use in ant.select. It shouldn't be an action
    async loadNextPage(_reset: boolean, _signal: AbortSignal): Promise<boolean> {

        this.state = StoreState.Pending

        await delayAsync(this._delay)

        const page = this._collectionSource.featch({
            take: this.pageSize,
            skip: this.offset,
            term: this.term })

        this.addNewPage(page)
        return true
    }

    constructor() {
        makeObservable(this, {
            loadNextPage: action,
            setTerm: action,
            items: observable,
            state: observable,
            hasLoadMore: observable
        })

        this._collectionSource = new CollectionSource(100)
    }

    private _collectionSource: CollectionSource
    private _delay = 1000
    private _curPage: number = 1
    
    private addNewPage(page: ICollectionFilterItem[]) {
        if(this._curPage === 1) {
            this.items = page
        }
        else {
            this.items = this.items.concat(page)
        }
        this.state = StoreState.Done
        this.hasLoadMore = page.length === this.pageSize
        this._curPage++
    }

    private reset(): void {
        this._curPage = 1
        this.items = []
    }
    
    private get offset() {
        return (this._curPage - 1) * this.pageSize
    }

    private get pageSize() { return 20 }
   
}