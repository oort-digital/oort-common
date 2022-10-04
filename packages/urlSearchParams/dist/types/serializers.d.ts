import { NumRange } from "./typesAndInterfaces";
export interface ISerializer<T> {
    key: string;
    serialize: (paramVal: T) => string[];
    deserialize: (paramStr: string[]) => T;
}
export declare class StringSerializer implements ISerializer<string> {
    readonly key: string;
    serialize: (paramVal: string) => string[];
    deserialize: (params: string[]) => string;
    constructor(key: string);
}
export declare class BoolSerializer implements ISerializer<boolean> {
    readonly key: string;
    serialize: (paramVal: boolean) => string[];
    deserialize: (params: string[]) => boolean;
    constructor(key: string);
}
export declare class IntSerializer implements ISerializer<number> {
    readonly key: string;
    serialize: (paramVal: number) => string[];
    deserialize: (params: string[]) => number;
    constructor(key: string);
}
export declare class NumRangeSerializer implements ISerializer<NumRange> {
    private static sep;
    readonly key: string;
    serialize: (paramVal: NumRange) => string[];
    deserialize: (params: string[]) => NumRange;
    constructor(key: string);
    private static deserializeItem;
    private static isDefined;
}
export declare class ArraySerializer<T> implements ISerializer<T[]> {
    readonly key: string;
    constructor(key: string, parseFunc: (str: string) => T);
    serialize(arr: T[]): string[];
    deserialize(params: string[]): T[];
    private readonly _sep;
    private readonly _parseFunc;
}
//# sourceMappingURL=serializers.d.ts.map