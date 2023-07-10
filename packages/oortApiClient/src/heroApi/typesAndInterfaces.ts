import { IOortApiResponse } from "../common";

export interface IOortHeroApi {
  getHeroes(
    _params: IQueryHeroesParams,
    _signal: AbortSignal,
  ): Promise<IOortApiResponse<IHeroesResponse>>;
  getMintingHeroes(
    _params: IMintingQueryHeroesParams,
    _signal: AbortSignal,
  ): Promise<IOortApiResponse<IGameHeroesResponse>>;
  getHeroMintAvailable(
    _signal: AbortSignal,
  ): Promise<IOortApiResponse<IHeroMintAvailableResponse>>;
  generateHero(
    _params: IGenerateHeroParams,
    _signal: AbortSignal,
  ): Promise<IOortApiResponse<IGenerateHeroResponse>>;
  /** @deprecated generateHero */
  openHeroBlindBox(
    _params: IOpenBlindBoxParams,
    _signal: AbortSignal,
  ): Promise<IOortApiResponse<IOpenBlindBoxHero>>;
  getOpenseaHeroes(
    _params: IOpenseaHeroParams,
    _signal: AbortSignal,
  ): Promise<IOortApiResponse<IOpenseaHeroResponse>>;
}

export interface IOortHeroesResponse {
  clan: string;
  dexterity: number;
  endurance: number;
  gen: string;
  gender: string;
  hairColor: string;
  id: number;
  name: string;
  nickName: string;
  planet: string;
  race: string;
  strength: number;
}

export interface IHeroCampaignRewards {
  campaignId: number;
  rewardsId: number;
  clanId: number;
  clanName: string;
  amount: number;
  level: number;
  rewardType: string;
  merkleProof: string;
}

export interface IHeroCampaign {
  campaignId: number;
  campaignName: string;
  brandName: string;
  brandUrl: string;
}

export interface IHeroMintAvailableResponse {
  heroCampaignRewardsList: IHeroCampaignRewards[];
  campaigns: IHeroCampaign[];
}

export interface IOpenBlindBoxHero {
  hero: IOortHeroesResponse;
  image: string;
}

export interface IOpenseaAsset {
  tokenId: string;
  assetHash: string;
}

export interface IOpenseaHeroResponse {
  openseaHeroList: IOpenseaAsset[];
}

export interface IGenerateHeroResponse {
  hero: IOortHeroesResponse;
  image: string;
}

export interface IHeroesResponse {
  heroes: IHeroForMutate[];
}

export interface IHeroForMutate {
  id: number;
  name: string;
  image: string;
  blindBoxStatus: boolean;
}

export interface IGameHeroesResponse {
  dataList: IMintingHero[];
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
}

export interface IHero {
  id: number;
  name: string;
  imageUrl: string;
  bodyParts: BodyParts;
  nickName: string;
  metadata: Metadata;
  heroCollection: string;
}

export interface IMintingHero {
  tokenId: number;
  heroId: string;
  name: string;
  image: string;
  heroCollection: string;
  blindBoxStatus: boolean;
}

interface BodyParts {
  body: number;
  belt: number;
  beard: number;
  brow: number;
  ears: number;
  eyes: number;
  head: number;
  mustache: number;
  nose: number;
}

interface Metadata {
  clan: string;
  gender: string;
  race: string;
  planet: string;
}

export interface IOpenBlindBoxParams {
  heroCollection: string;
  walletAddress?: string;
  tokenId: string;
}

export interface IOpenseaHeroParams {
  startTokenId: number;
  endTokenId: number;
}

export interface IGenerateHeroParams {
  tokenAddress: string;
  tokenId: string;
}

export interface IQueryHeroesParams {
  tokenIds: string;
}

export interface IMintingQueryHeroesParams {
  wallet: string;
  pageNum: number;
  pageSize: number;
}
