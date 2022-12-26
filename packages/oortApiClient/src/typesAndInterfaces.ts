import {NumRange} from "@oort/ui";

export interface IPagingParams {
    pageNum: number
    pageSize: number
}

interface IPagingResponse<T> {
    dataList: T[]
    pageNum: number
    pageSize: number
    totalNum: number
    totalPage: number
}

export enum GameStatusEnum {
    Live = "Live",
    Alpha = "Alpha",
    Beta = "Beta",
    Development = "Development",
    Cancelled = "Cancelled",
    Presale = "Presale"
}

export enum MissionType {
    Toturial = "Toturial",
    Tournament = "Tournament",
    Airdrop = "Airdrop",
    IDO = "IDO",
    INO = "INO",
    MerchandiseSale = "Merchandise Sale",
    DiscountOffer = "Discount Offer"
}

export enum SearchGameHubType {
    SearchGames = 'search-games',
    searchNFTCollections = 'search-nft-collections'
}

interface IGame {
    blockChains: number[],
    description: string,
    devices: string | undefined,
    genre: string | undefined,
    id: number,
    logo: string,
    image: string,
    name: string,
    nftCollectionsCount: number,
    rating: number,
    status: GameStatusEnum,
    uri: string,
}

export interface INewGame extends IGame {
    discordUrl: string,
    image: string,
    telegramUrl: string,
    twitterUrl: string,
    websiteUrl: string | undefined
}

export interface IPopularGame extends IGame { }

export interface ITopRatedGame extends IGame {
    likeNum: number
    reviews: number
    views: number
}

export interface IPopularTournament {
    id: number
    startTime: string
    endTime: string
    type: MissionType
    title: string
    rules: string
    prizes: string
    sort: number
    gameId: number
    url: string
    image: string
}

export interface INFTForRent {
    id:number
    chainId: number
    contractAddress: string
    title:string
}

export interface INft {
    averagePrice: string
    blockChain: number
    bsHolders: string
    category: string
    contractAddress: string
    discordFollowers: string
    floorPrice: string
    id: number
    logo: string
    marketCap: string
    name: string
    totalSupply: string
    traders: string
    twitterFollowers: string
    volume: string
}

export interface INftsResponse extends IPagingResponse<INft> { }

export interface IReviewsParams extends IPagingParams {
    gameUri: string
}

export type RatingType = 0|1|2|3|4|5

export interface IReview {
    id: number
    content: string
    dislikeNum: number
    likeNum: number
    gameId: number
    myLikeAction: LikeType | null
    publishTime: string
    replyNum: number
    replyReviewId: number
    score: number
    userAvatar: string
    userId: number
    userName: string
    userWallet:string
    rating: RatingType
}

export interface IReviewResponse extends IPagingResponse<IReview> {}

export interface ISaveReviewParams {
    gameUri: string
    content: string
}

export interface ISaveFeedbackParams {
    gameUri: string
    isGameProfitable: boolean
    isGameFun: boolean
    rating: RatingType
}

export interface IGamesResponse extends IPagingResponse<INewGame> {}

export interface IGameDetailResponse {
    game: INewGame
    nftCollections: INft[]
    missions: IPopularTournament[]
    myLikeAction: LikeType | null
    hasFeedback: boolean
}

export interface INftDetailResponse {
    nftCollection: INft
}

export interface ISearchListItem {
    id: number
    logo: string
    name: string
    uri: string
}

export interface ISearchResultResponse {
    dataList: ISearchListItem[]
}

export interface IDasboardResponse {
    newGames: INewGame[],
    popularGames: IPopularGame[],
    topRatedGameList: ITopRatedGame[],
    popularMissions: IPopularTournament[],
    nftForRents:INFTForRent[]
}

export interface IOortClientSettings {
    apiUrl: string
}

export type LikeType = 'like' | 'dislike'

export interface ILikeGameParams {
    action: LikeType | null
    gameUri: string
}

export interface ILikeReviewParams {
    action: LikeType | null
    gameUri: string
    reviewId: number
}

export interface INftsParams extends IPagingParams {
    chains: number[]
    games: number[]
    gamesOnly: boolean
    keywords: string | null

    twitterFollowersRange: NumRange
    discordFollowersRange: NumRange
    floorPriceRange: NumRange
    volumeRange: NumRange
    marketCapRange: NumRange
    tradersRange: NumRange
    totalSupplyRange: NumRange

    orderDirections: string[]
    orders: string[]
}

export interface IGamesParams extends IPagingParams {
    collectionIds: number[] | null
    chains: number[]
    keywords: string | null
    status: string[]
    genre: string[]
    devices: string[]
    ratingRange: NumRange
    orderDirections: string[] | null
    orders: string[] | null
}

export interface ISearchParams extends IPagingParams {
    url: SearchGameHubType
    keywords: string | null
}

export interface IGameDetailParams{
    gameUri: string
}

export interface INftDetailParams {
    nftCollectionId: number
}

export interface INftDetailByAddressParams {
    collectionAddress: string
}

export interface ICurUserReview {
    reviewId: number
    content: string
}

export interface IOortClient {
    dashboard: (signal: AbortSignal) => Promise<IDasboardResponse>
    nfts: (params: INftsParams, signal: AbortSignal) => Promise<INftsResponse>
    games: (params: IGamesParams, signal: AbortSignal) => Promise<IGamesResponse>
    gameDetail: (params: IGameDetailParams, signal: AbortSignal) => Promise<IGameDetailResponse>
    nftDetail: (params: INftDetailParams, signal: AbortSignal) => Promise<INftDetailResponse>
    nftDetailByAddress: (params: INftDetailByAddressParams, signal: AbortSignal) => Promise<INftDetailResponse>
    getSearch: (params: ISearchParams, signal: AbortSignal) => Promise<ISearchResultResponse>
    likeGame: (params: ILikeGameParams, signal: AbortSignal) => Promise<void>
    likeReview: (params: ILikeReviewParams, signal: AbortSignal) => Promise<void>
    getReviews: (params: IReviewsParams, signal: AbortSignal) => Promise<IReviewResponse>
    getCurrentUserReview: (gameUri: string, signal: AbortSignal) => Promise<ICurUserReview>
    saveReview: (params: ISaveReviewParams, signal: AbortSignal) => Promise<void>
    saveFeedback: (params: ISaveFeedbackParams, signal: AbortSignal) => Promise<void>
}
