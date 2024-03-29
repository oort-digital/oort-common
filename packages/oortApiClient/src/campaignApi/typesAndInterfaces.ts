import { IPagingParams, IPagingResponse } from "../common";

/* eslint-disable no-unused-vars */
export interface IOortCampaignApi {
  getBrands: (
    { pageNum, pageSize }: IGetPageBaseParams,
    signal: AbortSignal,
  ) => Promise<GetBrandsResponse>;
  getCampaigns: (
    { brandIds, keywords, pageNum, pageSize }: IGetCampaignsParams,
    signal: AbortSignal,
  ) => Promise<GetCampaignsResponse>;

  getCampaign: (
    { campaignId }: IGetCampaignParams,
    signal: AbortSignal,
  ) => Promise<IGetCampaignResponse>;

  getRewards: (
    { campaignId }: IGetRewardsParams,
    signal: AbortSignal,
  ) => Promise<IGetRewardsResponse>;
}

export interface ICampaign {
  campaignId: number;
  campaignName: string;
  campaignImage: string;
  campaignType: string;
  endTime: string;
  startTime: string;
  host: IBrandDetail;
  rewards: { name: string; image: string, chainId: number }[];
}

export interface ICampaignDetail {
  host: IBrandDetail;
  campaignId: number;
  campaignName: string;
  campaignImage: string;
  endTime: string;
  startTime: string;
  description: string;
}

export interface IBrandDetail {
  id: number;
  logo: string;
  name: string;
  url: string;
  campaignUrl: string;
}

export interface IBrand {
  id: number;
  logo: string;
  name: string;
}

export interface IRewardDetail {
  id: number;
  chainId: number;
  contractAddress: string;
  amount: number;
  type: string;
  image: string;
  name: string;
  description: string;
  distributorContract: {
    address: string;
    type: null; // this field for the future
  } | null;
  eligible: boolean;
  merkleProof: string | null;
  claimed: boolean | null;
  clanId: number | null;
  claimMessage: string | null;
  claimUrl: string | null;
}

export type GetCampaignsResponse = IPagingResponse<ICampaign>;

export type GetBrandsResponse = IPagingResponse<IBrand>;

export interface IGetRewardsResponse {
  rewards: IRewardDetail[];
}

export interface IGetCampaignResponse {
  campaign: ICampaignDetail;
  sponsorBrands: IBrandDetail[];
}

export interface IGetCampaignsParams extends IPagingParams {
  brandIds?: number[];
  keywords?: string;
  claimOnly?: boolean;
}

export interface IGetPageBaseParams extends IPagingParams {
  keywords?: string;
}

export interface IGetCampaignParams {
  campaignId: number;
}
export interface IGetRewardsParams {
  campaignId: number;
  wallet: string;
}
