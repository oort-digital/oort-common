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
    token_id: string;
}
export interface INftScanClient {
    getSingleNft: (nftAddress: string, tokenId: string) => Promise<SingleNFTData | null>;
}
export interface INftScanConfig {
    apiKey: string;
    apiSecret: string;
}
export declare class NftScanClient implements INftScanClient {
    private static _instance;
    static getInstance(config: INftScanConfig): NftScanClient;
    constructor({ apiKey, apiSecret }: INftScanConfig);
    getSingleNft: (nftAddress: string, tokenId: string) => Promise<SingleNFTData | null>;
    private readonly _apiKey;
    private readonly _apiSecret;
    private _curAccessToken;
    private configHead;
    private dataParams;
    private getSingleNftInternal;
    private _updateTokenRequest;
    private updateAccessTokenOnce;
    private __updateAccessToken;
}
//# sourceMappingURL=nftScanClient.d.ts.map