import { ISerializer } from "./serializers";
import { NumRange, URLSearchParamsSetter } from "./typesAndInterfaces";
export declare abstract class BaseSearchParam<T> {
    get param(): T;
    get isEmpty(): boolean;
    protected isParamEmpty(paramVal: T): boolean;
    clear(): void;
    setParam(paramVal: T): void;
    constructor(searchParams: URLSearchParams, setter: URLSearchParamsSetter, serializer: ISerializer<T>, def: T);
    private readonly _def;
    private readonly _searchParams;
    private readonly _setter;
    private readonly _serializer;
    private _param;
}
export declare class NumRangeSearchParam extends BaseSearchParam<NumRange> {
    protected isParamEmpty: (paramVal: NumRange) => boolean;
    constructor(key: string, searchParams: URLSearchParams, setter: URLSearchParamsSetter);
}
export declare class IntArrSearchParam extends BaseSearchParam<number[]> {
    constructor(key: string, searchParams: URLSearchParams, setter: URLSearchParamsSetter);
}
export declare class StrArrSearchParam extends BaseSearchParam<string[]> {
    constructor(key: string, searchParams: URLSearchParams, setter: URLSearchParamsSetter);
}
export declare class IntSearchParam extends BaseSearchParam<number> {
    constructor(key: string, defaultValue: number, searchParams: URLSearchParams, setter: URLSearchParamsSetter);
}
export declare class BoolSearchParam extends BaseSearchParam<boolean> {
    constructor(key: string, defaultValue: boolean, searchParams: URLSearchParams, setter: URLSearchParamsSetter);
}
//# sourceMappingURL=searchParams.d.ts.map