export interface IOortLeaderboardApi {
  getBrandsInCurrentLeaderboard: (
    // eslint-disable-next-line no-unused-vars
    signal: AbortSignal,
  ) => Promise<IGetBrandsInCurrentLeaderboardResponse>;
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
