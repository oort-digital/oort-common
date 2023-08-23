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

export interface INavItemInternal {
  caption: string;
  icon?: JSX.Element;
}

export type StringMap = { [id: string]: string };
export type NavItemMap = { [id: string]: NavItemType };

export type IsHrefActiveFunc = (href: string) => boolean;
export interface IStubs {
  isHrefActive?: IsHrefActiveFunc;
  getCurLocation?: () => LocationType;
}

export type LocationType = {
  origin: string;
  pathname: string;
};
