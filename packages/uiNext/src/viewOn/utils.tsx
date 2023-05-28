import { BigNumber } from "ethers"
import { NFTScanIcon, OpenseaIcon } from "../icons"
import { NftScanClient, INftScanConfig } from "./nftScanApi"

export enum MarketplaceEnum {
    nftscan = 'nftscan',
    opensea = 'opensea'
}

export interface IMarketplaceConfig {
    name: MarketplaceEnum
    assetItemUrlTemplate: string
}

interface IGetViewOnUrlParams {
    marketplace: IMarketplaceConfig
    chainId: number,
    assetItem: { tokenAddress: string, tokenId: BigNumber }
}

const CHAIN_NAME_VAR = '{chain-name}'
const ADDRESS_VAR = '{address}'
const TOKEN_ID_VAR = '{token-id}'
const CHAIN_ID_VAR = '{chain-id}'
const NFT_SCAN_ASSET_ID = '{nftscan-asset-id}'

const getViewOnChainName = (chainId: number) => {
    if(chainId === 1) { return 'ethereum' }
    if(chainId === 4) { return 'rinkeby' }
    if(chainId === 5) { return 'goerli' }
    if(chainId === 56) { return '' } // don't need chainName for nftscan url
    if(chainId === 97) { return '' } // don't need chainName for nftscan url
    if(chainId === 137) { return 'matic' }
    if(chainId === 80001) { return 'mumbai' }
    throw new Error(`Unknown chainId: ${chainId}`)
}

const getViewOnUrlFromTemplate = (params: IGetViewOnUrlParams) => {
    const { marketplace, assetItem, chainId } = params
    const { tokenAddress, tokenId } = assetItem
    const chainName = getViewOnChainName(chainId)
    return marketplace.assetItemUrlTemplate
        .replace(CHAIN_NAME_VAR, chainName)
        .replace(CHAIN_ID_VAR, chainId.toString())
        .replace(ADDRESS_VAR, tokenAddress)
        .replace(TOKEN_ID_VAR, tokenId.toString())
}

export const getViewOnUrl = async (params: IGetViewOnUrlParams, nftScanConfig: INftScanConfig): Promise<string> => {
    
    const { marketplace, assetItem } = params

    if(marketplace.name === MarketplaceEnum.opensea) {
        return getViewOnUrlFromTemplate(params)
    }

    const { tokenAddress, tokenId } = assetItem

    const nft = await NftScanClient.getInstance(nftScanConfig).getSingleNft(tokenAddress, tokenId.toString())
    if(!nft) {
        return ''
    }
    return marketplace.assetItemUrlTemplate.replace(NFT_SCAN_ASSET_ID, nft.nftscan_asset_id)
}

export const getViewOnIcon = (marketplace: MarketplaceEnum) => {
    if(marketplace === MarketplaceEnum.opensea) {
        return <OpenseaIcon />
    }
    return <NFTScanIcon />
}