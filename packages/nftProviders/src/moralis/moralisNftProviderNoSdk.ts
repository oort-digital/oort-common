// import Moralis  from "./moralis";
// import { EvmChain } from '@moralisweb3/common-evm-utils';
import { INftOwnerProvider, IFeatchNftOwnerResponse, ProviderKind, IFeatchAccountNftsParams, IFeatchNftImageSrc, IFeatchNftParams, IFeatchNftsResponse, INft, IAssetsProvider, IAssetProvider } from "../typesAndInterfaces";
import { ILogger } from "@oort-digital/logger";
import axios, { AxiosInstance } from "axios";


interface IMoralisResponse {
    status: string
    total: number
    page: number
    page_size: number
    cursor: string
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
        

        debugger
        const { ownerAddress, cursor, limit, /*tokenAddresses*/ } = params


        const config = {
            params: {
              chain: this.chainId,
              format: 'decimal',
              //If the result should skip returning the total count (Improves performance).
              disable_total: false,
              token_addresses: undefined,
              limit,
              cursor
            }
        }

        debugger

        // https://deep-index.moralis.io/api/v2/0xd8da6bf26964af9d7eed9e03e53415d37aa96045/nft?chain=eth&format=decimal
        const axiosResponse = await this._axios.get<IMoralisResponse>(`/${ownerAddress}/nft`, config)
        debugger
        const moralisResponse = axiosResponse.data

        // const { pagination, result } = moralisResponse

        // const data = result.map(x => this.mapNft(x.toJSON(), toMoralisMetadata(x.metadata)))

   
        return {
            page: moralisResponse.page,
            pageSize: moralisResponse.page_size,
            total: moralisResponse.total || 0,
            data: [],
            cursor: moralisResponse.cursor
        }
        
    }

    constructor(_logger: ILogger, chainId: number, config: { apiKey: string }) {
       
        this._axios = axios.create({
            baseURL: 'https://deep-index.moralis.io/api/v2/',
            headers: {'X-API-Key': config.apiKey}
          });
        
        this.chainId = chainId
        // this._logger = logger
    }

    private readonly _axios: AxiosInstance
    // private readonly _logger: ILogger

}
