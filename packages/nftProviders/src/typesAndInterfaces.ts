export enum NftType {
    UNKNOWN = 'UNKNOWN',
    ERC721 = "ERC721",
    ERC1155 = "ERC1155"
}

export enum ProviderKind {
    Opensea = "opensea",
    OpenseaV2 = "openseaV2",
    Moralis = "moralis",
    MoralisOpensea = "MoralisOpensea"
}

export interface INft {
    tokenAddress: string
    tokenId: string
    projectName: string | undefined
    image: string | undefined
    imageProvider: ProviderKind
    contractType: NftType
    amount: number
    description: string | undefined
    nftName: string | undefined
    symbol: string
    rawData: any
}

export interface IFeatchNftsResponse {
    total: number
    page: number
    pageSize: number
    cursor: string | undefined
    data: INft[]
}

export interface IFeatchAccountNftsParams {
    ownerAddress: string
    limit: number
    cursor: string | undefined
    tokenAddresses?: string[]
}

export interface IFeatchNftParams {
    address: string
    tokenId: string
}

export interface IFeatchNftImageSrc {
    address: string
    tokenId: string
    preferProvider: ProviderKind
}

export interface IAssetsProvider {
    chainId: number
    providerKind: ProviderKind
    featchAccountNfts: (params: IFeatchAccountNftsParams) => Promise<IFeatchNftsResponse>
    featchNftImageSrc: (params: IFeatchNftImageSrc) => Promise<string | undefined>
}

export interface IAssetProvider {
    chainId: number
    featchNft: (params: IFeatchNftParams) => Promise<INft | null>
}

export interface IFeatchNftOwnerResponse {
    asset?: {
        address: string
        tokenId: string
        ownerAddress: string
    }
}

export interface INftOwnerProvider {
    featchNftOwner(params: { address: string, tokenId: string }): Promise<IFeatchNftOwnerResponse>
    chainId: number
}

export interface IAssetsProviderFactory {
    getOrCreate(chainId: number | undefined): IAssetsProvider | undefined 
}

export interface IAssetProviderFactory {
    getOrCreate(chainId: number | undefined): IAssetProvider | undefined 
}

// export interface INftOwnerProviderFactory {
//     getOrCreate(chainId: number | undefined): INftOwnerProvider | undefined 
// }