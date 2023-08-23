import { ConnectorNames } from "@oort-digital/web3-connectors";
import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";

export interface ILayoutProps {
  children: ReactNode;
  navItems: INavItems;
  supportedWallets: ConnectorNames[];
  oortTokenAddress?: string | undefined;
  web3?: IWeb3;
  className?: string;
  //for testing
  isActiveFunc?: (href: string) => boolean;
  useTopGradient?: boolean;
  baseName?: string;
}

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
