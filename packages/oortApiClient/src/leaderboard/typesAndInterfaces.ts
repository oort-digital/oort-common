import { IPagingParams, IPagingResponse } from "../common";

export interface IOortLeaderboardApi {
  getBrandsInCurrentLeaderboard: (
    _signal: AbortSignal,
  ) => Promise<GetBrandsInCurrentLeaderboardResponse>;

  getBattleResults(
    _params: IGetBattleResultsRequest,
    _signal: AbortSignal,
  ): Promise<GetBattleResultsResponse>;
}

export interface IGetBattleResultsRequest extends IPagingParams {
  brandId: string;
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
