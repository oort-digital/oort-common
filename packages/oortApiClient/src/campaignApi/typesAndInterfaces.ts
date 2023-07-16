import { IPagingParams, IPagingResponse } from "../common";

/* eslint-disable no-unused-vars */
export interface IOortCampaignApi {
  getBrands: (
    { pageNum, pageSize }: IGetPageBaseParams,
    signal: AbortSignal,
  ) => Promise<GetBrandsResponse>;
  getCampaings: (
    { brandIds, keywords, pageNum, pageSize }: IGetCampaingsParams,
    signal: AbortSignal,
  ) => Promise<GetCampaignsResponse>;

  getCampaing: (
    { campaignId }: IGetCampaingParams,
    signal: AbortSignal,
  ) => Promise<IGetCampaignResponse>;

  getRewards: (
    { campaignId }: IGetCampaingParams,
    signal: AbortSignal,
  ) => Promise<IGetRewardsResponse>;
}

export interface ICampaign {
  campaignId: number;
  campaignName: string;
  campaignImage: string;
  endTime: string;
  startTime: string;
  host: IBrandDetail;
  rewards: { name: string; brandLogo: string }[];
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

export interface IGetCampaingsParams extends IPagingParams {
  brandIds?: number[];
  keywords?: string;
}

export interface IGetPageBaseParams extends IPagingParams {
  keywords?: string;
}

export interface IGetCampaingParams {
  campaignId: number;
}
export interface IGetRewardsParams {
  campaignId: number;
}
