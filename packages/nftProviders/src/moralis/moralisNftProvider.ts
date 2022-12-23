import Moralis  from "moralis";
// import { EvmChain } from '@moralisweb3/common-evm-utils';
import { MoralisDataObjectValue } from '@moralisweb3/common-core';
import { INftOwnerProvider, IFeatchNftOwnerResponse, ProviderKind, IFeatchAccountNftsParams, IFeatchNftImageSrc, IFeatchNftParams, IFeatchNftsResponse, INft, NftType, IAssetsProvider, IAssetProvider } from "../typesAndInterfaces";
import { ILogger } from "@oort/logger";

interface IMoralisMetadata {
    image?: string
    // image_data?: string
    name?: string
    description?: string
}

interface IMoralisNft {
    name?: string
    amount?: number
    tokenAddress: string
    tokenId: string | number
    symbol?: string
    contractType?: string
}

interface IRawNft {
    name: string
    token_address: string
    token_id: string
    contract_type: string
    amount?: string
    symbol: string
}

function toMoralisMetadata(rawMetadata: MoralisDataObjectValue | undefined): IMoralisMetadata | undefined {
    if(rawMetadata) {
        return {
            name: rawMetadata["name"],
            description: rawMetadata['description'],
            image: rawMetadata['image']
        }
    }
    return undefined
}

function toMoralisNft({symbol, amount, name, token_address, token_id, contract_type }: IRawNft): IMoralisNft {

    return {
        name,
        tokenAddress: token_address,
        tokenId: token_id,
        contractType: contract_type,
        amount: amount ? parseInt(amount) : 0,
        symbol
    }
}

type MoralisLogLevel = 'verbose' | 'debug' | 'info' | 'warning' | 'error' | 'off'

export class MoralisNftProvider implements IAssetsProvider, IAssetProvider, INftOwnerProvider {
    public readonly providerKind: ProviderKind = ProviderKind.Moralis

    public readonly chainId: number;

    public async featchNftOwner(params: { address: string, tokenId: string }): Promise<IFeatchNftOwnerResponse> {
        await this._startPromise
        const { address, tokenId } = params
        const response = await Moralis.EvmApi.nft.getNFTTokenIdOwners({
            chain: this.chainId,
            address: address,
            tokenId: tokenId,
        })
        if(!response.result?.length) {
            return { asset: undefined }
        }

        const sorted = response.result.sort((a, b) => {
            const aBN = a.result.blockNumber!
            const bBN = b.result.blockNumber!

            if (aBN < bBN) {
                return -1;
              }
              if (aBN > bBN) {
                return 1;
              }

              return 0;
        })

        const nft = sorted[0].toJSON()
        return {
            asset: {
                address: nft.tokenAddress,
                tokenId: nft.tokenId.toString(),
                ownerAddress: nft.ownerOf!
            }
        }
    }

    public async featchNft(params: IFeatchNftParams): Promise<INft> {
        await this._startPromise
        const { address, tokenId } = params
        const response = await Moralis.EvmApi.nft.getNFTMetadata({
            chain: this.chainId,
            address: address,
            tokenId: tokenId
        })

        const rawNft = response!.raw
        const moralisNft = toMoralisNft(rawNft)
        return this.mapNft(moralisNft, rawNft.normalized_metadata)
    }

    public async featchNftImageSrc(params: IFeatchNftImageSrc): Promise<string | undefined> {
        await this._startPromise
        const moralisNft = await this.featchNft(params)
        return moralisNft.image
    }

    public async featchAccountNfts(params: IFeatchAccountNftsParams): Promise<IFeatchNftsResponse> {
        await this._startPromise

        const moralisResponse = await Moralis.EvmApi.nft.getWalletNFTs({
            chain: this.chainId,
            address: params.ownerAddress,
            tokenAddresses: params.tokenAddresses,
            limit: params.limit,
            cursor: params.cursor
        })
        const { pagination, result } = moralisResponse

        const data = result.map(x => this.mapNft(x.toJSON(), toMoralisMetadata(x.metadata)))
        
        return {
            page: pagination.page,
            pageSize: pagination.pageSize,
            total: pagination.total,
            data,
            cursor: pagination.cursor
        }
        
    }

    constructor(logger: ILogger, chainId: number, config: { apiKey: string }, logLevel: MoralisLogLevel = 'info') {
        this._startPromise = Moralis.start({
            apiKey: config.apiKey,
            formatEvmAddress: 'checksum',
            formatEvmChainId: 'decimal',
            logLevel: logLevel
        })
        this.chainId = chainId
        this._logger = logger
    }

    private readonly _logger: ILogger
    private readonly _startPromise: Promise<void>
    private ParseImage(tokenAddress: string, tokenId: string, metadata: IMoralisMetadata): string | undefined {
        if(metadata.image !== undefined) { return metadata.image }
        //if(metadata.image_data !== undefined) { return metadata.image_data }
        this._logger.trace(`No image. TokenAddress: ${tokenAddress} TokenId: ${tokenId} Metadata: ${metadata}`)
        return undefined
    }

    private ParseNftName(tokenAddress: string, tokenId: string, metadata: IMoralisMetadata): string | undefined {
        if(metadata.name !== undefined) { return metadata.name }
        this._logger.trace(`No nftName. TokenAddress: ${tokenAddress} TokenId: ${tokenId} Metadata: ${metadata}`)
        return undefined
    }

    private ParseDescription(tokenAddress: string, tokenId: string, metadata: IMoralisMetadata): string | undefined {
        if(metadata.description !== undefined) { return metadata.description }
        this._logger.trace(`No description. TokenAddress: ${tokenAddress} TokenId: ${tokenId} Metadata: ${metadata}`)
        return undefined
    }

    private static ParseContractType(tokenAddress: string, tokenId: string, rawNftType: string): NftType {
        if(rawNftType === "ERC721") { return NftType.ERC721 }
        if(rawNftType === "ERC1155") { return NftType.ERC1155 }
        throw new Error(`Unknow contarct type: ${rawNftType}. TokenAddress: ${tokenAddress} TokenId: ${tokenId}`)
    }

    private mapNft(rawNft: IMoralisNft, metadata: IMoralisMetadata | undefined): INft {
        const tokenId = rawNft.tokenId.toString()
        const result: INft = {
            projectName: rawNft.name,
            amount:  rawNft.amount || 0,
            contractType: MoralisNftProvider.ParseContractType(rawNft.tokenAddress, tokenId, rawNft.contractType!),
            tokenAddress: rawNft.tokenAddress,
            tokenId: tokenId,
            symbol: rawNft.symbol || '',
            rawData: rawNft,
            image: undefined,
            imageProvider: ProviderKind.Moralis,
            nftName: undefined,
            description: undefined
        }

        if(metadata) {
            result.image = this.ParseImage(rawNft.tokenAddress, tokenId, metadata)
            result.nftName = this.ParseNftName(rawNft.tokenAddress, tokenId, metadata)
            result.description = this.ParseDescription(rawNft.tokenAddress, tokenId, metadata)
        }

        return result
    }

}
