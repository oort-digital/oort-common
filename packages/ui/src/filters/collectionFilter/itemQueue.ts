import { distinct } from "@oort-digital/utils"
import { ItemKeyType } from "./stores"

export class ItemQueue<T> {

    get items() {
        return this._items
    }
    
    enqueue(newItems: T[], unique: boolean = false): void {

        if(newItems.length > this._maxSize) {
            newItems = this.rmLast(newItems,  newItems.length - this._maxSize)
        }

        let result = new Array<T>()
        if(newItems.length === this._maxSize) {
            result = newItems
        }
        else {
            const lenSum = newItems.length + this._items.length
            let oldItems = this._items
            if(lenSum > this._maxSize) {
                oldItems = this.rmLast(oldItems, lenSum - this._maxSize)
            }

            result = newItems.concat(oldItems)
        }

        if(unique) {
            result = distinct(result, this._keyFunc)
        }

        this._items = result
    }

    remove(item: T): void {
        this._items = this._items.filter(x => this.neq(x, item))
    }

    clear(): void {
        this._items = []
    }

    private eq = (a: T, b: T) => this._keyFunc(a) !== this._keyFunc(b)
    private neq = (a: T, b: T) => this.eq(a, b)

    private rmLast(arr: T[], n: number): T[] {
        return arr.slice(0, -1 * n)
    }

    private readonly _maxSize: number
    private _items: T[]
    private readonly _keyFunc: (item:T) => ItemKeyType

    constructor(keyFunc: (item:T) => ItemKeyType, maxSize: number, initialArr: T[]) {
        this._keyFunc = keyFunc
        this._maxSize = maxSize
        this._items = initialArr
    }

}
