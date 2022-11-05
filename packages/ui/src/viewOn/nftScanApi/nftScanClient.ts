import { logger } from "@oort/logger";
import axios from "axios";

export interface NftScanApiData {
    accessToken: string;
    expiration: number;
}

export interface SingleNFTData {
    code: number;
    nftscan_asset_id: string;
    nft_name: string;
    nft_token_uri: string;
    nft_holder: string;
    token_id: string
}

interface INftScanResponse<T> {
    code: number,
    data: T
}

const NFTSCAN_HOST = 'https://bnbapi.nftscan.com/gw/token';
const NFTSCAN_SINGLE_NFT_URL = 'https://bscapi.nftscan.com/api/v1/getSingleNft';
const MAX_ATTEMPT = 5

export interface INftScanClient {
    getSingleNft: (nftAddress: string, tokenId: string) => Promise<SingleNFTData | null>
}

export interface INftScanConfig {
    apiKey: string
    apiSecret: string
}

export class NftScanClient implements INftScanClient {

    private static _instance: NftScanClient
    public static getInstance(config: INftScanConfig): NftScanClient {
        if(!NftScanClient._instance) {
            NftScanClient._instance = new NftScanClient(config)
        }
        return NftScanClient._instance
    }

    constructor ({ apiKey, apiSecret }: INftScanConfig) {
        this._apiKey = apiKey
        this._apiSecret = apiSecret
    }

    getSingleNft = (nftAddress: string, tokenId: string)=> this.getSingleNftInternal(nftAddress, tokenId, 1)

    private readonly _apiKey: string
    private readonly _apiSecret: string

    private _curAccessToken = ''

    private configHead = () => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': this._curAccessToken,
            },
        }
    };
    
    private dataParams = (nftAddress: string, tokenId: string) =>  (
        {
            'nft_address': nftAddress,
            'token_id': tokenId
        }
    )

    private getSingleNftInternal = async (nftAddress: string, tokenId: string, attempt: number): Promise<SingleNFTData | null> => {

        if(!this._curAccessToken) {
            await this.updateAccessTokenOnce()
        }

        const response = await axios.post<INftScanResponse<SingleNFTData | null>>(NFTSCAN_SINGLE_NFT_URL, this.dataParams(nftAddress, tokenId), this.configHead());
        const data = response.data
        if(data.code === 401) {
    
            if(attempt > MAX_ATTEMPT) {
                logger.error('getSingleNftInternal attempts limit error')
                return data.data
            }
            this._curAccessToken = ''
            await this.getSingleNftInternal(nftAddress, tokenId, attempt++)
        }
    
        return data.data;
    }


    private _updateTokenRequest: Promise<void> | undefined
    private updateAccessTokenOnce = async (): Promise<void> => {
        
        if(this._updateTokenRequest) {
            await this._updateTokenRequest
        }
        
        if(!this._curAccessToken) {
            this._updateTokenRequest =  this.__updateAccessToken()
            await this._updateTokenRequest
            this._updateTokenRequest = undefined
        }
    }

    // don't call it direct, use updateAccessTokenOnce instead
    private __updateAccessToken = async (): Promise<void> => {
        const url = `${NFTSCAN_HOST}?apiKey=${this._apiKey}&apiSecret=${this._apiSecret}`;
        const response = await axios.get<INftScanResponse<NftScanApiData>>(url);
        const data = response.data.data
        this._curAccessToken = data.accessToken;
    }
}

