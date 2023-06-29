export interface ICampaign {
    brandLogo: string;
    brandName: string;
    brandUrl: string;
    campaignId: string;
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
  