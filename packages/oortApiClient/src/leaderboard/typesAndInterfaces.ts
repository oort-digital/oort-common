export interface IOortLeaderboardApi {
  getBrandsInCurrentLeaderboard: (
    signal: AbortSignal,
  ) => Promise<IGetBrandsInCurrentLeaderboardResponse> 
}

export interface IGetBrandsInCurrentLeaderboardResponse {
  brands: IBrandBattleResult[];
}

export interface IBrandBattleResult {
  id: number;
  logo: string;
  name: string;
  totalWins: number;
}