import { BigNumber } from "ethers"

export interface IAssetItem {
    nftName?: string
    tokenAddress: string
    tokenId: BigNumber
    projectName?: string
    nftAmount: number
    imgSrc?: string | undefined
}