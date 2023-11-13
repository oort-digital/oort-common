import { BigNumber } from "ethers"

export type TOrUndef<T> = T | undefined
export type NumOrUndef = TOrUndef<number>
export type BnOrUndef = TOrUndef<BigNumber>