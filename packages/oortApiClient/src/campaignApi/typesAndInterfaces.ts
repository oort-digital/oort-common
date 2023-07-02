export interface IOortCampaignApi {
  getCampaings: (
    { brandIds, keywords, pageNum, pageSize }: IGetCampaingsParams,
    signal: AbortSignal,
  ) => Promise<IGetCampaignsResponse>

  getCampaing: (
    { campaignId }: IGetCampaingParams,
    signal: AbortSignal,
  ) => Promise<IGetCampaignResponse> 

  getRewards: (
    { campaignId }: IGetCampaingParams,
    signal: AbortSignal,
  ) => Promise<IGetRewardsResponse>

  getBrandsInCurrentLeaderboard: (
    signal: AbortSignal,
  ) => Promise<IGetBrandsInCurrentLeaderboardResponse> 
}

export interface ICampaign {
    brandLogo: string;
    brandName: string;
    brandUrl: string;
    campaignId: number;
    campaignName: string;
    endTime: string;
    startTime: string;
  }
  
  export interface IBrand {
    id: number;
    logo: string;
    name: string;
    url: string;
  }
  
  export interface IBrandBattleResult {
    id: number;
    logo: string;
    name: string;
    totalWins: number;
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
  
  export interface IGetRewardsResponse {
    rewards: IReward[];
  }
  
  export interface IGetCampaignResponse {
    campaign: ICampaign;
    sponsorBrands: IBrand[];
  }
  
  export interface IGetBrandsInCurrentLeaderboardResponse {
    brands: IBrandBattleResult[];
  }
  
  export interface IGetCampaingsParams {
    brandIds?: string[];
    keywords?: string[];
    pageNum: number;
    pageSize: number;
  }
  
  export interface IGetCampaingParams {
    campaignId: number;
  }
  export interface IGetRewardsParams {
    campaignId: number;
  }
  