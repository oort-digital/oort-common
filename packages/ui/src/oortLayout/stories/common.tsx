import { INavItems } from "../navMenu";
import { TestCarousel } from "./testCarousel";

export const navItems: INavItems = {
    dashboard: 'http://dashboard.oort.local',
    leaderboard: 'http://leaderboard.oort.local',
    minting: {
      mutation: {
          reactRouterLink: false,
          href: 'http://minting.oort.local/hero-mutation',
          disabled: true,
          // hide: true
      },
      claim: 'http://minting.oort.local/claim-rewards',
      campaigns: 'http://minting.oort.local/campaigns',
    },
    rent: {
      activity: 'http://rent.oort.local/avtivities',
      borrow: 'http://rent.oort.local/borrow',
      heroes: 'http://rent.oort.local/heroes',
      lend: 'http://rent.oort.local/lend'
    },
    gameHub: {
      games: {
        href: 'http://game-hub.oort.local/games',
        reactRouterLink: true
      },
      nfts: {
        href: 'http://game-hub.oort.local/nfts',
        reactRouterLink: true
      }
    },
    rpgBattle: 'https://battle.oort.digital'  
}

export const testNavItems: INavItems = { ...navItems, ...{ developTools: {
  faucet: 'http://develop.oort.local/faucet',
  refreshMetadata: "http://develop.oort.local/refresh-metadata"
}, } }

const style = { 
  // background: 'red'
  height: '1000px'
}

export const TestContent = <div style={style}>
  <TestCarousel />
</div>

export const isActiveFunc = (href: string) => {
  return href.includes('game-hub.oort.local/nfts');
}