import { IChain } from "./publicTypesAndInterfaces"

export interface IChainInfo extends IChain {
    rpcUrl: string
    blockExplorer?: string
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
}