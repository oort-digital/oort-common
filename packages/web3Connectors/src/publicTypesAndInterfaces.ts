export interface IChain {
    chainId: number
    name: string
}

export const EMPTY_CHAIN: IChain = {
    chainId: -1,
    name: ''
}

export const isChainEmpty = ({ chainId, name }: IChain) => chainId === EMPTY_CHAIN.chainId && name === EMPTY_CHAIN.name 