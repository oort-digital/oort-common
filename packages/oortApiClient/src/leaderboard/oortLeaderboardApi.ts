import { BaseAPI, IAPIConfig, getConfig } from "../common";
import {
    IGetBrandsInCurrentLeaderboardResponse,
    IOortLeaderboardApi,
} from "./typesAndInterfaces";
  
const oortServerApis = {
    getBrandsInCurrentLeaderboard: "/leaderboard/brands",
};
  
export class OortLeaderboardApi extends BaseAPI implements IOortLeaderboardApi {
    private static _singleton: OortLeaderboardApi;
  
    static createSingleton(config: IAPIConfig): OortLeaderboardApi {
      if (!OortLeaderboardApi._singleton) {
        OortLeaderboardApi._singleton = new OortLeaderboardApi("LeaderboardApi", config);
      }
      return OortLeaderboardApi._singleton;
    }
  
  
    public async getBrandsInCurrentLeaderboard(
      signal: AbortSignal,
    ): Promise<IGetBrandsInCurrentLeaderboardResponse> {
      const url = oortServerApis.getBrandsInCurrentLeaderboard;
  
      const response = await this.get<IGetBrandsInCurrentLeaderboardResponse>(
        url,
        getConfig(false, signal),
      );
      return response;
    }

    /*
    private addArrParam(urlParams: URLSearchParams, name: string, arr: Array<string | number>) {
      if (arr.length) {
          arr.forEach(x => {
              urlParams.append(name, x.toString())
          })
      }
    }*/
}
