import { NumOrUndef, NumRange } from "./typesAndInterfaces"

export interface ISerializer<T> {
    key: string
    serialize: (paramVal: T) => string[]
    deserialize: (paramStr: string[]) => T
}

export class StringSerializer implements ISerializer<string> {

    readonly key: string
    serialize = (paramVal: string) => [paramVal]
    deserialize = (params: string[]) => params[0]

    constructor(key: string) {
        this.key = key
    }
}

export class BoolSerializer implements ISerializer<boolean> {

    readonly key: string
    serialize = (paramVal: boolean) => [`${paramVal}`]
    deserialize = (params: string[]) => params[0] === 'true'

    constructor(key: string) {
        this.key = key
    }
}

export class IntSerializer implements ISerializer<number> {

    readonly key: string
    serialize = (paramVal: number) => [paramVal.toString()]
    deserialize = (params: string[]) => parseInt(params[0])

    constructor(key: string) {
        this.key = key
    }
}

export class NumRangeSerializer implements ISerializer<NumRange> {

    private static sep = '-'

    readonly key: string

    serialize = (paramVal: NumRange) => {
        let result = ''
        if(NumRangeSerializer.isDefined(paramVal[0])) {
            result = paramVal[0]!.toString()
        }
        
        if(NumRangeSerializer.isDefined(paramVal[1])) {
            result = `${result}${NumRangeSerializer.sep}${paramVal[1]!.toString()}`
        }
        return [result]
    }

    deserialize = (params: string[]): NumRange => {
        const arr = params[0].split(NumRangeSerializer.sep)
        if(arr.length === 1) {
            return [NumRangeSerializer.deserializeItem(arr[0]), undefined]
        }
        return [NumRangeSerializer.deserializeItem(arr[0]), NumRangeSerializer.deserializeItem(arr[1])]
    }
    
    constructor(key: string) {
        this.key = key
    }

    private static deserializeItem(str: string | undefined): NumOrUndef {
        if(str) {
            return parseFloat(str)
        }
        return undefined
    }

    private static isDefined(val: NumOrUndef): boolean {
        //null value happens too
        return val !== undefined && val !== null
    }
}

export class ArraySerializer<T> implements ISerializer<T[]> {

    readonly key: string

    constructor(key: string, parseFunc: (str: string) => T) {
        this.key = key
        this._parseFunc = parseFunc
    }

    serialize(arr: T[]): string[] {
        const p =  arr.join(this._sep)
        return [p]
    }

    deserialize(params: string[]): T[] {
        return params[0].split(this._sep).map(x => this._parseFunc(x))
    }

    private readonly _sep = '-'
    private readonly _parseFunc: (str: string) => T
}