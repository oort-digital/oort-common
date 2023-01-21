// import Moralis  from "./moralis";
import { INftOwnerProvider, IFeatchNftOwnerResponse, ProviderKind, IFeatchAccountNftsParams, IFeatchNftImageSrc, IFeatchNftParams, IFeatchNftsResponse, INft, IAssetsProvider, IAssetProvider, NftType } from "../typesAndInterfaces";
import { ILogger, logger } from "@oort-digital/logger";
import axios, { AxiosInstance } from "axios";

interface IMoralisMetadata {
    image?: string
    // image_data?: string
    name?: string
    description?: string
}

interface IMoralisResponse<TResult> {
    result: TResult
}

interface IMoralisPagingResponse<TResult> extends IMoralisResponse<TResult> {
    total: number
    page: number
    page_size: number
    cursor: string
    status: string
}

interface IRawNft {
    token_id: string
    token_address: string
    amount: string
    contract_type: string
    name: string
    symbol: string
    token_uri: string
    metadata: string | undefined
}

export class MoralisNftProviderNoSdk implements IAssetsProvider, IAssetProvider, INftOwnerProvider {
    public readonly providerKind: ProviderKind = ProviderKind.Moralis

    public readonly chainId: number;

    public async featchNftOwner(_params: { address: string, tokenId: string }): Promise<IFeatchNftOwnerResponse> {
        throw new Error('not implemented')
    }

    public async featchNft(_params: IFeatchNftParams): Promise<INft> {
        throw new Error('not implemented')
    }

    public async featchNftImageSrc(_params: IFeatchNftImageSrc): Promise<string | undefined> {
        throw new Error('not implemented')
    }

    public async featchAccountNfts(params: IFeatchAccountNftsParams): Promise<IFeatchNftsResponse> {
        
        const { ownerAddress, cursor, limit, tokenAddresses } = params

        const config = {
            params: {
              chain: this._chainIdHex,
              format: 'decimal',
              //If the result should skip returning the total count (Improves performance).
              disable_total: false,
              token_addresses: tokenAddresses,
              limit,
              cursor
            }
        }

        // https://deep-index.moralis.io/api/v2/0xd8da6bf26964af9d7eed9e03e53415d37aa96045/nft?chain=eth&format=decimal
        const axiosResponse = await this._axios.get<IMoralisPagingResponse<IRawNft[]>>(`/${ownerAddress}/nft`, config)

        const moralisResponse = axiosResponse.data
        const data = moralisResponse.result.map(x => this.mapNft(x))
   
        return {
            page: moralisResponse.page,
            pageSize: moralisResponse.page_size,
            total: moralisResponse.total,
            data,
            cursor: moralisResponse.cursor
        }
        
    }

    constructor(_logger: ILogger, chainId: number, config: { apiKey: string }) {
       
        this._axios = axios.create({
            baseURL: 'https://deep-index.moralis.io/api/v2/',
            headers: {'X-API-Key': config.apiKey}
          });
        
        this.chainId = chainId
        this._logger = logger
        this._chainIdHex = `0x${chainId.toString(16)}`;
    }

    private readonly _chainIdHex: string
    private readonly _axios: AxiosInstance
    private readonly _logger: ILogger

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

    private mapNft(rawNft: IRawNft): INft {
        const { token_address, token_id, amount, metadata } = rawNft

        const metadataParsed: IMoralisMetadata | undefined = metadata ? JSON.parse(metadata) as IMoralisMetadata : undefined        
        const result: INft = {
            projectName: rawNft.name,
            amount:  parseInt(amount),
            contractType: MoralisNftProviderNoSdk.ParseContractType(token_address, token_id, rawNft.contract_type),
            tokenAddress: token_address,
            tokenId: token_id,
            symbol: rawNft.symbol || '',
            rawData: rawNft,
            image: undefined,
            imageProvider: ProviderKind.Moralis,
            nftName: undefined,
            description: undefined
        }

        if(metadataParsed) {
            result.image = this.ParseImage(token_address, token_id, metadataParsed)
            result.nftName = this.ParseNftName(token_address, token_id, metadataParsed)
            result.description = this.ParseDescription(token_address, token_id, metadataParsed)
        }

        return result
    }

}
