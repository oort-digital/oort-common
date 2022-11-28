import { BnOrUndef, NumOrUndef } from "./tOrUndef"

export type Range<T> = [T, T]
export type BnRange = Range<BnOrUndef>
export type NumRange = Range<NumOrUndef>

export function isRangeEmpty<T>(range: Range<T>): boolean {
    return range[0] === undefined && range[1] === undefined
}
