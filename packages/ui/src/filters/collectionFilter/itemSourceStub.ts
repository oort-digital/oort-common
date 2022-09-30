import {action, makeObservable, observable, runInAction } from 'mobx'
import { delayAsync } from '../../utils';
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

const iconBase64 = 'data:image/png;base64,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'

class Source {

    private _collections: ICollectionFilterItem[] = []

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
                key: numberToAddress(i),
                title: Source.generateName(i),
                icon: iconBase64,
                count: i
            })
        }
    }

    featch(params: { skip: number, take: number, term: string }): ICollectionFilterItem[] {
        const { skip, take, term } = params
        const filtred =  this._collections.filter(c => c.title.includes(term));
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

    setItems(items: ICollectionFilterItem[]): void {
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

        runInAction(() => {
            this.addNewPage(page)
        })

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

        this._collectionSource = new Source(100)
    }

    private _collectionSource: Source
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