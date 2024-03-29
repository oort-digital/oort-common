import { IPagingParams, IPagingResponse } from "../common";

export interface IOortLeaderboardApi {
  getBrandsInCurrentLeaderboard: (
    _signal: AbortSignal,
  ) => Promise<GetBrandsInCurrentLeaderboardResponse>;

  getBattleResults(
    _params: IGetBattleResultsRequest,
    _signal: AbortSignal,
  ): Promise<GetBattleResultsResponse>;

  getCurrentUserResult(
    _signal: AbortSignal,
  ): Promise<IBrandBattleResult | undefined>;

  getLeaderboardInfo(_signal: AbortSignal): Promise<ILeaderboardInfo>;

  join(_params: IJoinParams, _signal: AbortSignal): Promise<void>;

  notifyHeroMinted(
    _params: INotifyHeroMintedParams,
    _signal: AbortSignal,
  ): Promise<void>;

  getJoinedBrand(_signal: AbortSignal): Promise<number>;

  getRewardsInCurrentLeaderboard(
    _signal: AbortSignal,
  ): Promise<IGetRewardsInCurrentLeaderboardResponse>;

  checkHaveBrandHeroes(
    _params: ICheckHaveBrandHeroesParams,
    _signal: AbortSignal,
  ): Promise<CheckHaveBrandHeroesResponse>;
}

export interface IGetBattleResultsRequest extends IPagingParams {
  brandId: number | null;
}

export type GetBattleResultsResponse = IPagingResponse<IBrandBattleResult>;
export type GetBrandsInCurrentLeaderboardResponse =
  IPagingResponse<IBrandBattleResult>;

export interface IBrandBattleResult {
  battles: number;
  brandLogo: string;
  brandName: string;
  place: number;
  wallet: string;
  wins: number;
}

export interface ILeaderboardBrand {
  id: number;
  name: string;
  logo: string;
  url: string;
  wins: number;
  campaignUrl: string;
  campaignId: number
}

export interface ILeaderboardInfo {
  campaignName: string;
  startTime: string;
  endTime: string;
  host: ILeaderboardBrand;
  sponsors: ILeaderboardBrand[];
}

export interface IJoinParams {
  brandId: number;
}

export interface INotifyHeroMintedParams {
  brandId: number;
}

export interface ILeaderboardReward {
  description: string;
  image: string;
  name: string;
  type: string;
}

export interface IGetRewardsInCurrentLeaderboardResponse {
  rewards: ILeaderboardReward[];
}

export interface ICheckHaveBrandHeroesParams {
  brandIds: number[];
}

export type CheckHaveBrandHeroesResponse = number[];
