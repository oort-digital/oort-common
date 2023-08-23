export type NavItemType =
  | string
  | {
      href: string;
      reactRouterLink: boolean;
      disabled?: boolean;
      hide?: boolean;
    };

export interface INavItems {
  dashboard: NavItemType;
  leaderboard: NavItemType;
  minting: {
    mutation: NavItemType;
    claimRewards: NavItemType;
  };
  rent: {
    lend: NavItemType;
    borrow: NavItemType;
    heroes: NavItemType;
    activity: NavItemType;
  };
  gameHub: {
    games: NavItemType;
    nfts: NavItemType;
  };
  developTools?: {
    faucet: NavItemType;
    refreshMetadata: NavItemType;
  };
  rpgBattle: NavItemType;
}
