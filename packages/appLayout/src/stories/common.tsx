import { INavItems } from "../navMenu";
import { TestCarousel } from "./testCarousel";

export const navItems: INavItems = {
  dashboard: "https://app-test.oort.digital",
  leaderboard: "https://app-test.oort.digital/leaderboard",
  minting: {
    mutation: {
      reactRouterLink: false,
      href: "https://app-test.oort.digital/mint/hero-mutation",
      disabled: true,
    },
    claimRewards: "http://app-test.oort.digital/mint/campaigns",
  },
  rent: {
    activity: "https://app-test.oort.digital/rent/avtivities",
    borrow: "https://app-test.oort.digital/rent/borrow",
    heroes: "https://app-test.oort.digital/rent/heroes",
    lend: "https://app-test.oort.digital/rent/lend",
  },
  gameHub: {
    games: {
      href: "http://localhost/games",
      reactRouterLink: true,
    },
    nfts: {
      href: "http://localhost/nfts",
      reactRouterLink: true,
    },
  },
  rpgBattle: "https://battle.oort.digital",
};

export const testNavItems: INavItems = {
  ...navItems,
  ...{
    developTools: {
      faucet: "http://develop.oort.local/faucet",
      refreshMetadata: "http://develop.oort.local/refresh-metadata",
    },
  },
};

const style = {
  // background: 'red'
  height: "1000px",
};

export const TestContent = (
  <div style={style}>
    <TestCarousel />
  </div>
);

export const isActiveFunc = (href: string) => {
  return href.includes("game-hub.oort.local/nfts");
};
