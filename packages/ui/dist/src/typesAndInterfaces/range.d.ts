import { BnOrUndef, NumOrUndef, TOrUndef } from "./tOrUndef";
export declare type Range<T> = [T, T];
export declare type BnRange = Range<BnOrUndef>;
export declare type NumRange = Range<NumOrUndef>;
export declare function isRangeEmpty<T>(range: Range<T>): boolean;
export declare function emptyRange<T>(): Range<TOrUndef<T>>;
//# sourceMappingURL=range.d.ts.map