import { IPagingParams, IPagingResponse } from "../common";

export interface IOortLeaderboardApi {
  getBrandsInCurrentLeaderboard: (
    _signal: AbortSignal,
  ) => Promise<GetBrandsInCurrentLeaderboardResponse>;

  getBattleResults(
    _params: IGetBattleResultsRequest,
    _signal: AbortSignal,
  ): Promise<GetBattleResultsResponse>;

  getCurrentUserResult(_signal: AbortSignal): Promise<IBrandBattleResult>;

  getLeaderboardInfo(_signal: AbortSignal): Promise<ILeaderboardInfo>;

  join(_params: IJoinParams, _signal: AbortSignal): Promise<void>;

  getJoinedBrand(_signal: AbortSignal): Promise<number>;

  getRewardsInCurrentLeaderboard(
    _signal: AbortSignal,
  ): Promise<IGetRewardsInCurrentLeaderboardResponse>;
}

export interface IGetBattleResultsRequest extends IPagingParams {
  brandId?: string;
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

export interface ILeaderboardReward {
  description: string;
  image: string;
  name: string;
  type: string;
}

export interface IGetRewardsInCurrentLeaderboardResponse {
  rewards: ILeaderboardReward[];
}
