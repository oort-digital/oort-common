import { IChain } from "./ichain"

export interface IChainConfigService {
    chainName: (chainId: number) => string
    supportedChains: IChain[]
    isSupported: (chainId: number) => boolean
}