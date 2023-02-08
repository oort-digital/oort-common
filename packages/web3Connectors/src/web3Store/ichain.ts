export interface IChain {
    chainId: number
    name: string
}

export interface IChainInfo extends IChain {
    rpcUrl: string
    blockExplorer?: string
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
}

export const EMPTY_CHAIN: IChain = {
    chainId: -1,
    name: ''
}

export const isChainEmpty = ({ chainId, name }: IChain) => chainId === EMPTY_CHAIN.chainId && name === EMPTY_CHAIN.name 