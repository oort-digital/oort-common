import { BaseAPI, IAPIConfig, IPagingResponse, getConfig } from "../common";
import {
  GetBattleResultsResponse,
  GetBrandsInCurrentLeaderboardResponse,
  IBrandBattleResult,
  IGetBattleResultsRequest,
  IOortLeaderboardApi,
} from "./typesAndInterfaces";

const oortServerApis = {
  getBrandsInCurrentLeaderboard: "/leaderboard/brands",
  getBattleResults: "/leaderboard/battle-results",
  getCurrentUserResult: "/leaderboard/current-user-result",
  getLeaderboardInfo: "/leaderboard/info",
  join: "/leaderboard/join",
  getJoinedBrand: "/leaderboard/joined-brand-id",
  getRewardsInCurrentLeaderboard: "/leaderboard/rewards",
};

export class OortLeaderboardApi extends BaseAPI implements IOortLeaderboardApi {
  private static _singleton: OortLeaderboardApi;

  static createSingleton(config: IAPIConfig): OortLeaderboardApi {
    if (!OortLeaderboardApi._singleton) {
      OortLeaderboardApi._singleton = new OortLeaderboardApi(
        "LeaderboardApi",
        config,
      );
    }
    return OortLeaderboardApi._singleton;
  }

  public async getBattleResults(
    params: IGetBattleResultsRequest,
    signal: AbortSignal,
  ): Promise<GetBattleResultsResponse> {
    const url = oortServerApis.getBattleResults;

    const urlParams = this.addPagingParams(params);

    const response = await this.get<IPagingResponse<IBrandBattleResult>>(
      url,
      getConfig(false, signal, urlParams),
    );
    return response;
  }

  public async getBrandsInCurrentLeaderboard(
    signal: AbortSignal,
  ): Promise<GetBrandsInCurrentLeaderboardResponse> {
    const url = oortServerApis.getBrandsInCurrentLeaderboard;

    const response = await this.get<IPagingResponse<IBrandBattleResult>>(
      url,
      getConfig(false, signal),
    );
    return response;
  }
}
