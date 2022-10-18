import { logger } from "@oort/logger";
import { ConnectorNames, IConnector, InjectedConnector } from "@oort/web3-connectors";
import { ZERO_ADDR } from "../utils";
import { INavItems } from "./navMenu";
import { TestCarousel } from "./testCarousel";

export const navItems: INavItems = {

    dashboard: 'http://dashboard.oort.local',
    minting: {
      mutation: 'http://minting.oort.local/hero-mutation',
      claim: 'http://minting.oort.local/claim-rewards'
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

const supportedChains = [
{
    name: "rinkeby",
    chainId: 4,
    rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    blockExplorer: 'https://rinkeby.etherscan.io'
},
{
    name: 'mumbai',
    chainId: 80001,
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    blockExplorer: 'https://mumbai.polygonscan.com',

    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
    }
}]
    
const supportedConnectors: { [name: string]: IConnector } = {}
supportedConnectors[ConnectorNames.Injected] = new InjectedConnector(logger, supportedChains)
supportedConnectors[ConnectorNames.WalletConnect] = new InjectedConnector(logger, supportedChains)
    
export const web3 = {
    canSwitchChain: true,
    connectorName: ConnectorNames.Injected,
    switchChain: async (newChainId: number) => {},
    connectAsync: async (connectorName: ConnectorNames) => {},
    chain: supportedChains[0],
    account: ZERO_ADDR,
    supportedChains: supportedChains,
    supportedConnectors: supportedConnectors,
}

const style = { 
  // background: 'red'
}

export const TestContent = <div style={style}>
  <TestCarousel />
</div>

export const isActiveFunc = (href: string) => {
  return href.includes('game-hub.oort.local/nfts');
}