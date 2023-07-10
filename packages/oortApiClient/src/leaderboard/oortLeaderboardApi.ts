import { BaseAPI, IAPIConfig, IPagingResponse, getConfig } from "../common";
import {
  GetBattleResultsResponse,
  GetBrandsInCurrentLeaderboardResponse,
  IBrandBattleResult,
  IGetBattleResultsRequest,
  IGetLeaderboardInfoResponse,
  IGetRewardsInCurrentLeaderboardResponse,
  IJoinParams,
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

  public async getCurrentUserResult(
    signal: AbortSignal,
  ): Promise<IBrandBattleResult> {
    const url = oortServerApis.getCurrentUserResult;

    const response = await this.get<IBrandBattleResult>(
      url,
      getConfig(true, signal),
    );
    return response;
  }

  public async getLeaderboardInfo(
    signal: AbortSignal,
  ): Promise<IGetLeaderboardInfoResponse> {
    const url = oortServerApis.getLeaderboardInfo;

    const response = await this.get<IGetLeaderboardInfoResponse>(
      url,
      getConfig(true, signal),
    );
    return response;
  }

  public async join(
    { brandId }: IJoinParams,
    signal: AbortSignal,
  ): Promise<void> {
    const url = oortServerApis.join;
    const urlParams = new URLSearchParams();
    urlParams.append("brand-id", `${brandId}`);
    const response = await this.put<void>(url, getConfig(true, signal));
    return response;
  }

  public async getJoinedBrand(signal: AbortSignal): Promise<number> {
    const url = oortServerApis.getJoinedBrand;
    const response = await this.get<number>(url, getConfig(true, signal));
    return response;
  }

  public async getRewardsInCurrentLeaderboard(
    signal: AbortSignal,
  ): Promise<IGetRewardsInCurrentLeaderboardResponse> {
    const url = oortServerApis.getRewardsInCurrentLeaderboard;
    const response = await this.get<IGetRewardsInCurrentLeaderboardResponse>(
      url,
      getConfig(false, signal),
    );
    return response;
  }
}
