import { IDasboardResponse, IGameDetailParams, IGameDetailResponse, IGamesParams, IGamesResponse, ILikeGameParams, ILikeReviewParams, INftDetailParams, INftDetailResponse, INftsParams, INftsResponse, IOortClient, IOortClientSettings, IReview, IReviewResponse, IReviewsParams, ISaveFeedbackParams, ISaveReviewParams, ISearchParams, ISearchResultResponse } from "./typesAndInterfaces";
export declare class OortClient implements IOortClient {
    dashboard: (signal: AbortSignal) => Promise<IDasboardResponse>;
    nfts: ({ pageNum, pageSize, chains, keywords, games, twitterFollowersRange, discordFollowersRange, floorPriceRange, marketCapRange, volumeRange, tradersRange, totalSupplyRange, orders, orderDirections, gamesOnly }: INftsParams, signal: AbortSignal) => Promise<INftsResponse>;
    games: ({ pageNum, pageSize, chains, collectionIds, keywords, devices, status, genre, ratingRange, orders, orderDirections }: IGamesParams, signal: AbortSignal) => Promise<IGamesResponse>;
    gameDetail: ({ gameUri }: IGameDetailParams, signal: AbortSignal) => Promise<IGameDetailResponse>;
    nftDetail: ({ nftCollectionId }: INftDetailParams, signal: AbortSignal) => Promise<INftDetailResponse>;
    getSearch: ({ keywords, url, pageSize, pageNum }: ISearchParams, signal: AbortSignal) => Promise<ISearchResultResponse>;
    likeGame: ({ gameUri, action }: ILikeGameParams, signal: AbortSignal) => Promise<void>;
    likeReview: ({ gameUri, reviewId, action }: ILikeReviewParams, signal: AbortSignal) => Promise<void>;
    saveReview: ({ content, gameUri }: ISaveReviewParams, signal: AbortSignal) => Promise<void>;
    saveFeedback: ({ gameUri, isGameFun, isGameProfitable, rating }: ISaveFeedbackParams, signal: AbortSignal) => Promise<void>;
    getReviews: ({ pageNum, pageSize, gameUri }: IReviewsParams, signal: AbortSignal) => Promise<IReviewResponse>;
    getCurrentUserReview: (gameUri: string, signal: AbortSignal) => Promise<IReview>;
    constructor({ apiUrl }: IOortClientSettings);
    private readonly _apiUrl;
    private addArrParam;
    private addPagingParams;
}
//# sourceMappingURL=oortClient.d.ts.map