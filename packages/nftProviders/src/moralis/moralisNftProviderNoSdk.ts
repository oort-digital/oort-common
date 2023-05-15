// import Moralis  from "./moralis";
import { INftOwnerProvider, IFeatchNftOwnerResponse, ProviderKind, IFeatchAccountNftsParams, IFeatchNftImageSrc, IFeatchNftParams, IFeatchNftsResponse, INft, IAssetsProvider, IAssetProvider, NftType } from "../typesAndInterfaces";
import {ILogger } from "@oort-digital/logger";
import axios, { AxiosInstance } from "axios";
import { toErrorWithMessage } from "@oort-digital/utils";
import * as https from "https";

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
    block_number: string
    owner_of: string
    amount: string
    contract_type: string | null
    name: string | null
    symbol: string | null
    token_uri: string
    metadata: string | null
}

interface IRawNftWithUnparsedMetadata extends IRawNft {
    metadata: string | null
}

interface IRawNftWithNormMetadata extends IRawNft {
    normalized_metadata: IMoralisMetadata | null
}

const is404 = (err: any) => {
    return err.response?.status === 404
}


export type GenerateHeroFunc = (params: {tokenAddress: string, tokenId: string}) => Promise<any>

export interface IMoralisNftProvider {
    logger: ILogger,
    chainId: number,
    config: { apiKey: string },
    generateHero: GenerateHeroFunc,
    // for test
    rejectUnauthorized?: boolean
}

export class MoralisNftProviderNoSdk implements IAssetsProvider, IAssetProvider, INftOwnerProvider {
    public readonly providerKind: ProviderKind = ProviderKind.Moralis

    public readonly chainId: number;

    public async featchNftOwner(params: { address: string, tokenId: string }): Promise<IFeatchNftOwnerResponse> {
        
        const { address, tokenId } = params

        const config = {
            params: {
              chain: this._chainIdHex,
              format: 'decimal',
              //If the result should skip returning the total count (Improves performance).
              disable_total: false,
              // limit: 1,
            }
        }

        const axiosResponse = await this._axios.get<IMoralisPagingResponse<IRawNft[]>>(`/nft/${address}/${tokenId}/owners`, config)
        const moralisResponse = axiosResponse.data

        if(!moralisResponse.result.length) {
            return { asset: null }
        }

        const sorted = moralisResponse.result.sort((a, b) => {
            const aBN = parseInt(a.block_number)
            const bBN = parseInt(b.block_number)

            if (aBN < bBN) {
                return -1;
              }
              if (aBN > bBN) {
                return 1;
              }

              return 0;
        })

        const nft = sorted[0]
        return {
            asset: {
                address: nft.token_address,
                tokenId: nft.token_id,
                ownerAddress: nft.owner_of
            }
        }
    }

    public async featchNft({ address, tokenId }: IFeatchNftParams): Promise<INft | null> {

        const config = {
            params: {
              chain: this._chainIdHex,
              format: 'decimal',
              normalizeMetadata: true
            }
        }

        try {
            const axiosResponse = await this._axios.get<IRawNftWithNormMetadata>(`/nft/${address}/${tokenId}`, config)
            const rawNft = axiosResponse.data
            return await this.mapNft(rawNft, rawNft.normalized_metadata)
        }

        catch(err) {
            if(is404(err)) { return null }
            throw err
        }
    }

    public async featchNftImageSrc(params: IFeatchNftImageSrc): Promise<string | undefined> {
        const moralisNft = await this.featchNft(params)
        if(moralisNft) {
            return moralisNft.image
        }
        return undefined
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

        const axiosResponse = await this._axios.get<IMoralisPagingResponse<IRawNftWithUnparsedMetadata[]>>(`/${ownerAddress}/nft`, config)
        const moralisResponse = axiosResponse.data
        const promises = moralisResponse.result.map(x => this.mapNft(x, x.metadata ? JSON.parse(x.metadata) as IMoralisMetadata : null))
   
        return {
            page: moralisResponse.page,
            pageSize: moralisResponse.page_size,
            total: moralisResponse.total,
            data: await Promise.all(promises),
            cursor: moralisResponse.cursor
        }
        
    }

    constructor({
        logger,
        chainId,
        config,
        generateHero,
        // for test
        rejectUnauthorized }: IMoralisNftProvider) {

        const baseURL = 'https://deep-index.moralis.io/api/v2/'
        const headers = {'X-API-Key': config.apiKey}

        this._generateHero = generateHero

        if(rejectUnauthorized === false) {
            const httpsAgent = new https.Agent({ rejectUnauthorized: false })
            this._axios = axios.create({ baseURL, headers, httpsAgent });
        }
        else {
            this._axios = axios.create({ baseURL, headers });
        }        
        
        this.chainId = chainId
        this._logger = logger
        this._chainIdHex = `0x${chainId.toString(16)}`;
    }

    private readonly _chainIdHex: string
    private readonly _axios: AxiosInstance
    private readonly _logger: ILogger
    private readonly _generateHero: GenerateHeroFunc

    private async tryFetchMetadata(token_uri: string, tokenAddress: string, tokenId: string): Promise<IMoralisMetadata | null> {
        try {
            let response = await this._axios.get(token_uri)
            if(response.data?.description === 'Oort Hero blind box') {
                await this._generateHero({tokenAddress, tokenId})
                response = await this._axios.get(token_uri)
            }
  
            const metadata: IMoralisMetadata = {
                name: response.data?.name,
                image: response.data?.image,
                description: response.data?.description
            }
            return metadata
        }
        catch(err: any) {
            const errWithMessage = toErrorWithMessage(err)
            this._logger.debug(errWithMessage.message)
        }
        return null
    }

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

    private static ParseContractType(tokenAddress: string, tokenId: string, rawNftType: string | null, logger: ILogger): NftType {
        if(rawNftType === "ERC721") { return NftType.ERC721 }
        if(rawNftType === "ERC1155") { return NftType.ERC1155 }
        logger.debug(`Unknow contarct type: ${rawNftType}. TokenAddress: ${tokenAddress} TokenId: ${tokenId}`)
        return NftType.UNKNOWN
    }

    private async mapNft(rawNft: IRawNftWithUnparsedMetadata, metadata: IMoralisMetadata | null): Promise<INft> {
        const { token_address, token_id, amount, token_uri } = rawNft

        if(!metadata && token_uri) {
            // sometimes moralis doesn't fetch metadata even if nft has token_uri
            metadata = await this.tryFetchMetadata(token_uri, token_address, token_id)
        }

        const result: INft = {
            projectName: rawNft.name ?? undefined,
            amount:  parseInt(amount),
            contractType: MoralisNftProviderNoSdk.ParseContractType(token_address, token_id, rawNft.contract_type, this._logger),
            tokenAddress: token_address,
            tokenId: token_id,
            symbol: rawNft.symbol || '',
            rawData: rawNft,
            image: undefined,
            imageProvider: ProviderKind.Moralis,
            nftName: undefined,
            description: undefined
        }

        if(metadata) {
            result.image = this.ParseImage(token_address, token_id, metadata)
            result.nftName = this.ParseNftName(token_address, token_id, metadata)
            result.description = this.ParseDescription(token_address, token_id, metadata)
        }

        return result
    }

}
