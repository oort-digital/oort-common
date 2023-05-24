import axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import { INftDetailParams, INftDetailResponse, IOortClientSettings, IPagingParams, ISearchParams, ISearchResultResponse } from "./typesAndInterfaces"


function getConfig(_isAuth: boolean, signal: AbortSignal, params?: URLSearchParams): AxiosRequestConfig<any> {

    const config: AxiosRequestConfig<any> = { signal: signal }

    if(params) {
        config.params = params
    }

    return  config
}

export class OortClient {


    nftDetail = async ({nftCollectionId}: INftDetailParams, signal: AbortSignal): Promise<INftDetailResponse> => {
        const response: AxiosResponse<INftDetailResponse> =
            await axios.get<INftDetailResponse, AxiosResponse<INftDetailResponse>>(
                `${this._apiUrl}/game-hub/nft-collections/${nftCollectionId}`,
                getConfig(false, signal)
            )
        return response.data;
    }

    getSearch = async ({keywords, url, pageSize, pageNum}: ISearchParams, signal: AbortSignal): Promise<ISearchResultResponse> => {
        const urlParams = this.addPagingParams({pageSize, pageNum})

        if (keywords) {
            urlParams.append('keywords', keywords);
        }

        const response: AxiosResponse<ISearchResultResponse> =
            await axios.get<ISearchResultResponse, AxiosResponse<ISearchResultResponse>>(
                `${this._apiUrl}/game-hub/${url}`,
                {params: urlParams, signal: signal})

        return response.data;
    }

    constructor({apiUrl}: IOortClientSettings) {
        this._apiUrl = apiUrl
    }

    private readonly _apiUrl: string


    private addPagingParams({ pageNum, pageSize }: IPagingParams, urlParams?: URLSearchParams): URLSearchParams {
        urlParams = urlParams || new URLSearchParams()
        urlParams.append('page-num', `${pageNum}`)
        urlParams.append('page-size', `${pageSize}`)
        return urlParams
    }
}