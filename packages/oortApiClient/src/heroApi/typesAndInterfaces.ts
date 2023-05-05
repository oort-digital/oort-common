import { IOortApiResponse } from "../common"

export interface IOortHeroApi {
    getHeroes(params: IQueryHeroesParams, signal: AbortSignal): Promise<IOortApiResponse<IHeroesResponse>>
    getMintingHeroes(params: IMintingQueryHeroesParams, signal: AbortSignal): Promise<IOortApiResponse<IGameHeroesResponse>>
    openHeroBlindBox(params: IOpenBlindBoxParams, signal: AbortSignal): Promise<IOortApiResponse<IOpenBlindBoxHero>>
    getHeroMintAvailable(signal: AbortSignal): Promise<IOortApiResponse<IHeroMintAvailableResponse>>
}

export interface IOortHeroesResponse {
    clan: string
    dexterity: number
    endurance: number
    gen: string
    gender: string
    hairColor: string
    id: number
    name: string
    nickName: string
    planet: string
    race: string
    strength: number
}

export interface IHeroCampaignRewards {
    campaignId: number
    rewardsId: number
    clanId: number
    clanName: string
    amount: number
    level: number
    rewardType: string
    merkleProof: string
}
export interface IHeroMintAvailableResponse {
    heroCampaignRewardsList: IHeroCampaignRewards[] 
}

export interface IOpenBlindBoxHero {
    hero: IOortHeroesResponse
    image: string
}

export interface IHeroesResponse {
    heroes: IHeroForMutate[]
}

export interface IHeroForMutate {
    id: number
    name: string
    image: string
    blindBoxStatus: boolean
}

export interface IGameHeroesResponse {
    dataList: IMintingHero[]
    pageNum: number
    pageSize: number
    totalNum: number
    totalPage: number
}

export interface IHero {
    id: number
    name: string
    imageUrl: string
    bodyParts: BodyParts
    nickName: string
    metadata: Metadata
    heroCollection: string
}

export interface IMintingHero {
    tokenId: number
    heroId: string
    name: string
    image: string
    heroCollection: string
    blindBoxStatus: boolean
}

interface BodyParts {
    body: number
    belt: number
    beard: number
    brow: number
    ears: number
    eyes: number
    head: number
    mustache: number
    nose: number
}

interface Metadata {
    clan: string
    gender: string
    race: string
    planet: string
}

export interface IOpenBlindBoxParams {
    heroCollection: string
    walletAddress?: string
    tokenId: string
}

export interface IQueryHeroesParams {
    tokenIds: string
}

export interface IMintingQueryHeroesParams {
    wallet: string
    pageNum: number
    pageSize: number
}