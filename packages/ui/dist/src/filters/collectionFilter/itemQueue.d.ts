import { ItemKeyType } from "./stores";
export declare class ItemQueue<T> {
    get items(): T[];
    enqueue(newItems: T[], unique?: boolean): void;
    remove(item: T): void;
    clear(): void;
    private eq;
    private neq;
    private rmLast;
    private readonly _maxSize;
    private _items;
    private readonly _keyFunc;
    constructor(keyFunc: (item: T) => ItemKeyType, maxSize: number, initialArr: T[]);
}
//# sourceMappingURL=itemQueue.d.ts.map