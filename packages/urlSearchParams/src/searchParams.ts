import { ISerializer, NumRangeSerializer } from "./serializers";
import { NumRange, URLSearchParamsSetter } from "./typesAndInterfaces";

export abstract class BaseSearchParam<T> {

    get param() { return this._param }

    get isEmpty() { return this.isParamEmpty(this._param) }

    protected isParamEmpty(paramVal: T) {
        if(Array.isArray(paramVal)) {
            return paramVal.length === 0
        }
        return !paramVal
    }

    clear() {
        this._param = this._def
        this._searchParams.delete(this._serializer.key)
        this._setter(this._searchParams)
    }

    setParam(paramVal: T) {
        this._param = paramVal
        this._searchParams.delete(this._serializer.key)

        if(!this.isParamEmpty(paramVal)) {
            const params = this._serializer.serialize(paramVal)
            params.forEach(p => this._searchParams.append(this._serializer.key, p))
        }

        this._setter(this._searchParams)
    }
    
    constructor(searchParams: URLSearchParams, setter: URLSearchParamsSetter, serializer: ISerializer<T>, def: T) {
        this._searchParams = searchParams
        this._setter = setter
        this._serializer = serializer
        const params = searchParams.getAll(serializer.key)
        this._def = def
        this._param = params.length ? serializer.deserialize(params) : def
    }

    private readonly _def
    private readonly _searchParams: URLSearchParams
    private readonly _setter: URLSearchParamsSetter
    private readonly _serializer: ISerializer<T>
    private _param: T
}

const isNumRangeNotEmpty = (range: NumRange) => range[0] !== undefined || range[1] !== undefined

export class NumRangeSearchParam extends BaseSearchParam<NumRange> {
    protected isParamEmpty = (paramVal: NumRange) => !isNumRangeNotEmpty(paramVal)

    constructor(key: string, searchParams: URLSearchParams, setter: URLSearchParamsSetter) {
        super(searchParams, setter, new NumRangeSerializer(key), [undefined, undefined])
    }
}