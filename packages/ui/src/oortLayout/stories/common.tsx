import { INavItems } from "../navMenu";
import { TestCarousel } from "./testCarousel";

export const navItems: INavItems = {
    dashboard: 'http://dashboard.oort.local',
    minting: {
      mutation: 'http://minting.oort.local/hero-mutation',
      claim: 'http://minting.oort.local/claim-rewards',
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
    }
}

const minting = { ...navItems.minting, ...{ faucet: "https://faucet.oort.digital/" } }
export const testNavItems: INavItems = { ...navItems, ...{ minting } }

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