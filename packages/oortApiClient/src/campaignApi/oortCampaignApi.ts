import { BaseAPI, IAPIConfig, getConfig } from "../common";
import {
    IGetBrandsInCurrentLeaderboardResponse,
    IGetCampaignResponse,
    IGetCampaignsResponse,
    IGetCampaingParams,
    IGetCampaingsParams,
    IGetRewardsResponse,
    IOortCampaignApi,
} from "./typesAndInterfaces";
  
const oortServerApis = {
    getCampaigns: "/campaign/campaigns",
    getRewards: "/reward/rewards",
    getBrandsInCurrentLeaderboard: "/leaderboard/brands",
};
  
export class OortCampaignApi extends BaseAPI implements IOortCampaignApi {
    private static _singleton: OortCampaignApi;
  
    static createSingleton(config: IAPIConfig): OortCampaignApi {
      if (!OortCampaignApi._singleton) {
        OortCampaignApi._singleton = new OortCampaignApi("CampaignApi", config);
      }
      return OortCampaignApi._singleton;
    }
  
    public async getCampaings(
      { brandIds, keywords, pageNum, pageSize }: IGetCampaingsParams,
      signal: AbortSignal,
    ): Promise<IGetCampaignsResponse> {
      const url = oortServerApis.getCampaigns;
      const params: URLSearchParams = new URLSearchParams();
  
      params.append("page-num", pageNum.toString());
      params.append("page-size", pageSize.toString());
  
      if (brandIds) {
        params.append("brand-ids", brandIds.join(","));
      }
      if (keywords) {
        params.append("keywords", keywords.join(","));
      }
  
      const response = await this.get<IGetCampaignsResponse>(
        url,
        getConfig(false, signal, params),
      );
      return response;
    }
  
    public async getCampaing(
      { campaignId }: IGetCampaingParams,
      signal: AbortSignal,
    ): Promise<IGetCampaignResponse> {
      const url = `${oortServerApis.getCampaigns}/${campaignId}`;
  
      const response = await this.get<IGetCampaignResponse>(
        url,
        getConfig(false, signal),
      );
  
      return response;
    }
  
    public async getRewards(
      { campaignId }: IGetCampaingParams,
      signal: AbortSignal,
    ): Promise<IGetRewardsResponse> {
      const url = oortServerApis.getRewards;
      const params: URLSearchParams = new URLSearchParams();
      params.append("campaign-id", campaignId.toString());
  
      const response = await this.get<IGetRewardsResponse>(
        url,
        getConfig(false, signal, params),
      );
      return response;
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
  }
