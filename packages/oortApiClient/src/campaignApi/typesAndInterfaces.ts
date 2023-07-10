/* eslint-disable import/export */
/* eslint-disable no-unused-vars */
export interface IOortCampaignApi {
  getBrands: (
    { pageNum, pageSize }: IGetPageBaseParams,
    signal: AbortSignal,
  ) => Promise<IGetBrandsResponse>;
  getCampaings: (
    { brandIds, keywords, pageNum, pageSize }: IGetCampaingsParams,
    signal: AbortSignal,
  ) => Promise<IGetCampaignsResponse>;

  getCampaing: (
    { campaignId }: IGetCampaingParams,
    signal: AbortSignal,
  ) => Promise<IGetCampaignResponse>;

  getRewards: (
    { campaignId }: IGetCampaingParams,
    signal: AbortSignal,
  ) => Promise<IGetRewardsResponse>;
}

export interface IBrand {
  id: number;
  name: string;
  logo: string;
}

export interface ICampaign {
  brandLogo: string;
  brandName: string;
  brandUrl: string;
  campaignId: number;
  campaignName: string;
  campaignImage: string;
  endTime: string;
  startTime: string;
}

export interface IBrand {
  id: number;
  logo: string;
  name: string;
  url: string;
}

export interface IReward {
  id: number;
  chainId: number;
  contractAddress: string;
  amount: number;
  type: string;
  image: string;
  name: string;
  distributionMethod: string;
  eligible: boolean;
}

export interface IGetCampaignsResponse {
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  dataList: ICampaign[];
}

export interface IGetBrandsResponse {
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  dataList: IBrand[];
}

export interface IGetRewardsResponse {
  rewards: IReward[];
}

export interface IGetCampaignResponse {
  campaign: ICampaign;
  sponsorBrands: IBrand[];
}

export interface IGetCampaingsParams {
  brandIds?: number[];
  keywords?: string;
  pageNum: number;
  pageSize: number;
}

export interface IGetPageBaseParams {
  keywords?: string;
  pageNum: number;
  pageSize: number;
}

export interface IGetCampaingParams {
  campaignId: number;
}
export interface IGetRewardsParams {
  campaignId: number;
}