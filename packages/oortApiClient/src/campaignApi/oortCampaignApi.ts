import { BaseAPI, IAPIConfig, getConfig } from "../common";
import {
  GetBrandsResponse,
  IGetCampaignResponse,
  GetCampaignsResponse,
  IGetCampaingParams,
  IGetCampaingsParams,
  IGetPageBaseParams,
  IGetRewardsResponse,
  IOortCampaignApi,
} from "./typesAndInterfaces";

const oortServerApis = {
  getCampaigns: "/campaign/campaigns",
  getBrands: "/brand/brands",
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

  public async getBrands(
    inParams: IGetPageBaseParams,
    signal: AbortSignal,
  ): Promise<GetBrandsResponse> {
    const url = oortServerApis.getBrands;
    const params = this.addPagingParams(inParams);

    if (inParams.keywords) {
      params.append("keywords", inParams.keywords);
    }
    const response = await this.get<GetBrandsResponse>(
      url,
      getConfig(false, signal, params),
    );
    return response;
  }

  public async getCampaings(
    { brandIds, keywords, pageNum, pageSize }: IGetCampaingsParams,
    signal: AbortSignal,
  ): Promise<GetCampaignsResponse> {
    const url = oortServerApis.getCampaigns;
    const params = this.addPagingParams({ pageNum, pageSize });

    if (brandIds && brandIds.length) {
      this.addArrParam(params, "brand-ids", brandIds);
    }

    if (keywords) {
      params.append("keywords", keywords);
    }

    const response = await this.get<GetCampaignsResponse>(
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
}
