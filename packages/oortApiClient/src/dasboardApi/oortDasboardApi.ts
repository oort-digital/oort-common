import {AxiosHeaders, AxiosResponse, RawAxiosRequestConfig} from "axios"
import { toAuthRequest } from "../isAuthRequest"

import {
    ICurUserReview,
    IDasboardResponse, IGameDetailParams, IGameDetailResponse,
    IGamesParams, IGamesResponse, ILikeGameParams, ILikeReviewParams, INftDetailByAddressParams, INftDetailParams, INftDetailResponse,
    INftsParams,
    INftsResponse,
    IOortDasboardApi,
    IPagingParams, IReviewResponse, IReviewsParams, ISaveFeedbackParams, ISaveReviewParams, ISearchParams, ISearchResultResponse
} from "./typesAndInterfaces"
import { BaseAPI, IAPIConfig } from "../common"


function getConfig(isAuth: boolean, signal: AbortSignal, params?: URLSearchParams): RawAxiosRequestConfig<any> {

    const config: RawAxiosRequestConfig<any> = {
        signal: signal,
        headers: new AxiosHeaders()
    }

    if(params) {
        config.params = params
    }

    return isAuth ? toAuthRequest(config) : config
}

export class OortDasboardApi
    extends BaseAPI
    implements IOortDasboardApi {

    private static _singleton: OortDasboardApi
    static createSingleton(config: IAPIConfig): OortDasboardApi {
        if(!OortDasboardApi._singleton) {
            OortDasboardApi._singleton = new OortDasboardApi(config)
        }
        return OortDasboardApi._singleton
    }

    dashboard = async (signal: AbortSignal): Promise<IDasboardResponse> => {
        const response: AxiosResponse<IDasboardResponse> = await this._axios.get<IDasboardResponse, AxiosResponse<IDasboardResponse>>(`/dashboard/`, { signal: signal })
        return response.data
    }

    nfts = async ({pageNum, pageSize, chains, keywords, games, twitterFollowersRange, discordFollowersRange, floorPriceRange, marketCapRange, volumeRange, tradersRange, totalSupplyRange, orders, orderDirections, gamesOnly}: INftsParams, signal: AbortSignal): Promise<INftsResponse> => {
        const urlParams = new URLSearchParams([
            ['filter-games', `${gamesOnly}`]
        ]);

        this.addPagingParams({ pageNum, pageSize }, urlParams)

        if(keywords) {
            urlParams.append('keywords', `${keywords}`)
        }

        this.addArrParam(urlParams, 'block-chains', chains)
        this.addArrParam(urlParams, 'game-ids', games)

        if (twitterFollowersRange && twitterFollowersRange[0] && twitterFollowersRange[1]) {
            urlParams.append('number-filter-starts', twitterFollowersRange[0].toString());
            urlParams.append('number-filter-ends', twitterFollowersRange[1].toString());
            urlParams.append('number-filters', "twitterFollowers");
        }

        if (discordFollowersRange && discordFollowersRange[0] && discordFollowersRange[1]) {
            urlParams.append('number-filter-starts', discordFollowersRange[0].toString());
            urlParams.append('number-filter-ends', discordFollowersRange[1].toString());
            urlParams.append('number-filters', "discordFollowers");
        }

        if (floorPriceRange && floorPriceRange[0] && floorPriceRange[1]) {
            urlParams.append('number-filter-starts', floorPriceRange[0].toString());
            urlParams.append('number-filter-ends', floorPriceRange[1].toString());
            urlParams.append('number-filters', "floorPrice");
        }

        if (volumeRange && volumeRange[0] && volumeRange[1]) {
            urlParams.append('number-filter-starts', volumeRange[0].toString());
            urlParams.append('number-filter-ends', volumeRange[1].toString());
            urlParams.append('number-filters', "volume");
        }

        if (marketCapRange && marketCapRange[0] && marketCapRange[1]) {
            urlParams.append('number-filter-starts', marketCapRange[0].toString());
            urlParams.append('number-filter-ends', marketCapRange[1].toString());
            urlParams.append('number-filters', "marketCap");
        }

        if (tradersRange && tradersRange[0] && tradersRange[1]) {
            urlParams.append('number-filter-starts', tradersRange[0].toString());
            urlParams.append('number-filter-ends', tradersRange[1].toString());
            urlParams.append('number-filters', "traders");
        }

        if (totalSupplyRange && totalSupplyRange[0] && totalSupplyRange[1]) {
            urlParams.append('number-filter-starts', totalSupplyRange[0].toString());
            urlParams.append('number-filter-ends', totalSupplyRange[1].toString());
            urlParams.append('number-filters', "totalSupply");
        }

        if (orders && orders.length && orderDirections && orderDirections.length) {
            this.addArrParam(urlParams, 'orders', orders);
            this.addArrParam(urlParams, 'order-directions', orderDirections);
        }

        const response: AxiosResponse<INftsResponse> =
            await this._axios.get<INftsResponse, AxiosResponse<INftsResponse>>(
                `/game-hub/nft-collections`,
                {params: urlParams, signal: signal})

        if(signal.aborted) {
            return {
                dataList: [],
                pageNum: 0,
                pageSize: 0,
                totalPage: 0,
                totalNum: 0
            }
        }

        return response.data
    }

    games = async ({pageNum, pageSize, chains, collectionIds, keywords, devices, status, genre, ratingRange, orders, orderDirections}: IGamesParams, signal: AbortSignal): Promise<IGamesResponse> => {
        const urlParams = this.addPagingParams({ pageNum, pageSize })

        if(keywords) {
            urlParams.append('keywords', keywords)
        }

        if (collectionIds && collectionIds.length) {
            this.addArrParam(urlParams, 'nft-collection-ids', collectionIds);
        }

        const stringFilters: string[] = []
        const stringValues: string[] = []

        const addFilter = (name: string, values: string[]) => {
            if(values.length) {
                stringFilters.push(name)
                stringValues.push(values.join(','))
            }
        }
        
        addFilter('devices', devices)
        addFilter('status', status)
        addFilter('genre', genre)

        if (stringFilters.length && stringValues.length) {
            this.addArrParam(urlParams, 'string-filters', stringFilters);
            this.addArrParam(urlParams, 'string-values', stringValues);
        }
        
        if (ratingRange && ratingRange[0] && ratingRange[1]) {
            this.addArrParam(urlParams, 'number-filter-starts', [ratingRange[0]]);
            this.addArrParam(urlParams, 'number-filter-ends', [ratingRange[1]]);
            this.addArrParam(urlParams, 'number-filters', ["rating"])
        }

        if (orders && orders.length && orderDirections && orderDirections.length) {
            this.addArrParam(urlParams, 'orders', orders);
            this.addArrParam(urlParams, 'order-directions', orderDirections);
        }

        this.addArrParam(urlParams, 'block-chains', chains);

        const response: AxiosResponse<IGamesResponse> =
            await this._axios.get<IGamesResponse, AxiosResponse<IGamesResponse>>(
                `/game-hub/games`,
                {params: urlParams, signal: signal})

        if(signal.aborted) {
            return {
                dataList: [],
                pageNum: 0,
                pageSize: 0,
                totalNum: 0,
                totalPage: 0
            }
        }

        return response.data;
    }

    gameDetail = async ({gameUri}: IGameDetailParams, signal: AbortSignal): Promise<IGameDetailResponse> => {

        const response: AxiosResponse<IGameDetailResponse> =
            await this._axios.get<IGameDetailResponse, AxiosResponse<IGameDetailResponse>>(
                `/game-hub/games/${gameUri}`,
                getConfig(false, signal, undefined)
            )

        return response.data;
    }

    nftDetail = async ({nftCollectionId}: INftDetailParams, signal: AbortSignal): Promise<INftDetailResponse> => {
        const response: AxiosResponse<INftDetailResponse> =
            await this._axios.get<INftDetailResponse, AxiosResponse<INftDetailResponse>>(
                `/game-hub/nft-collections/${nftCollectionId}`,
                getConfig(false, signal)
            )
        return response.data;
    }

    nftDetailByAddress = async ({collectionAddress}: INftDetailByAddressParams, signal: AbortSignal): Promise<INftDetailResponse> => {
        const response: AxiosResponse<INftDetailResponse> =
            await this._axios.get<INftDetailResponse, AxiosResponse<INftDetailResponse>>(
                `/game-hub/nft-collections/address/${collectionAddress}`,
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
            await this._axios.get<ISearchResultResponse, AxiosResponse<ISearchResultResponse>>(
                `/game-hub/${url}`,
                {params: urlParams, signal: signal})

        return response.data;
    }

    likeGame = async ({ gameUri, action }: ILikeGameParams, signal: AbortSignal): Promise<void> => {

        const urlParams = new URLSearchParams([
            ['action', `${action}`]
        ]);

        await this._axios.put(
            `/game-hub/games/${gameUri}/like`,
            null,
            getConfig(true, signal, urlParams)
            )
    }

    likeReview = async ({ gameUri, reviewId, action }: ILikeReviewParams, signal: AbortSignal): Promise<void> => {

        const urlParams = new URLSearchParams([
            ['action', `${action}`]
        ]);

        await this._axios.put(
            `/game-hub/${gameUri}/reviews/${reviewId}/like`,
            null,
            getConfig(true, signal, urlParams)
            )
    }

    saveReview = ({ content, gameUri }: ISaveReviewParams, signal: AbortSignal): Promise<void> => this._axios.put(
        `/game-hub/games/${gameUri}/reviews`,
        { content },
        getConfig(true, signal, undefined))


    saveFeedback = ({ gameUri, isGameFun, isGameProfitable, rating }: ISaveFeedbackParams, signal: AbortSignal): Promise<void> => {
        
        const urlParams = new URLSearchParams([
            ['isGameFun', `${isGameFun}`],
            ['isGameProfitable', `${isGameProfitable}`],
            ['rating', `${rating}`]
        ]);

        return this._axios.put(
            `/game-hub/games/${gameUri}/feedback`,
            null,
            getConfig(true, signal, urlParams))
    }

    getReviews = async ({ pageNum, pageSize, gameUri }: IReviewsParams, signal: AbortSignal): Promise<IReviewResponse> => {
        const urlParams = this.addPagingParams({pageSize, pageNum})

        const response: AxiosResponse<IReviewResponse> =
        await this._axios.get<IReviewResponse, AxiosResponse<IReviewResponse>>(
            `$/game-hub/games/${gameUri}/reviews`,
            getConfig(false, signal, urlParams))

        return response.data;
    }

    getCurrentUserReview = async (gameUri: string, signal: AbortSignal): Promise<ICurUserReview> => {
        const response: AxiosResponse<ICurUserReview> =
            await this._axios.get<ICurUserReview, AxiosResponse<ICurUserReview>>(
                `/game-hub/games/${gameUri}/reviews/cur-user-review`,
                getConfig(true, signal))

        return response.data;
    }

    private addArrParam(urlParams: URLSearchParams, name: string, arr: Array<string | number>) {
        if (arr.length) {
            arr.forEach(x => {
                urlParams.append(name, x.toString())
            })
        }
    }

    private addPagingParams({ pageNum, pageSize }: IPagingParams, urlParams?: URLSearchParams): URLSearchParams {
        urlParams = urlParams || new URLSearchParams()
        urlParams.append('page-num', `${pageNum}`)
        urlParams.append('page-size', `${pageSize}`)
        return urlParams
    }
}