import { IChain } from "./ichain"

export enum ChainEnum {
    EthereumMainnet = 1,
    EthereumRopsten = 3,
    EthereumRinkeby = 4,
    EthereumGoerli = 5,
    EthereumKovan = 42,
    MaticMumbai = 80001,
    MaticMainnet = 137,
    BSCTestnet = 97,
    BSCMainnet = 56,
    SolanaTestnet = 245022940,
}

export interface IChainService<T extends IChain> {
    chainName: (chainId: number) => string
    supportedChains: IChain[]
    isSupported: (chainId: number) => boolean
    getChain: (chainId: number) => T | undefined
}

export class ChainService<T extends IChain> implements IChainService<T> {

    public chainName = (chainId: number): string => {
        if (chainId === ChainEnum.EthereumMainnet) {
            return "Ethereum";
        } else if (chainId === ChainEnum.EthereumRopsten) {
            return "Ropsten";
        } else if (chainId === ChainEnum.EthereumRinkeby) {
            return "Rinkeby";
        } else if (chainId === ChainEnum.EthereumGoerli) {
            return "Goerli";
        } else if (chainId === ChainEnum.EthereumKovan) {
            return "Kovan";
        } else if (chainId === ChainEnum.MaticMumbai) {
            return "Mumbai";
        } else if (chainId === ChainEnum.MaticMainnet) {
            return "Polygon";
        } else if (chainId === ChainEnum.BSCTestnet) {
            return "Chapel"
        } else if (chainId === ChainEnum.BSCMainnet) {
            return "BSC"
        } else if (chainId === ChainEnum.SolanaTestnet) {
            return "Solana testnet"
        }
        return "unknown network";
    }

    get supportedChains() {
        if(!this._supportedChains) {
            this._supportedChains = Object.values(this._supportedChainsMap).map(x => ({chainId: x.chainId, name: this.chainName(x.chainId)}))
        }
        return this._supportedChains
    }

    isSupported = (chainId: number): boolean => !!this._supportedChainsMap[chainId]

    getChain = (chainId: number): T | undefined => {
        return this._supportedChainsMap[chainId]
    }

    constructor(supportedChains: T[]) {
        this._supportedChainsMap = {}
        supportedChains.forEach(x => this._supportedChainsMap[x.chainId] = x)
    }

    private readonly _supportedChainsMap: { [id: number]: T }
    private _supportedChains: IChain[] | undefined
}
