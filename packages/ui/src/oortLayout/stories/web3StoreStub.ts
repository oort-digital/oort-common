import { ConsoleLogger, LogLevel } from "@oort-digital/logger";
import { ChainService, ConnectorNames, IChain, IWeb3StoreParams, Web3Store } from "@oort-digital/web3-connectors";
import { INavItems } from "../navMenu";

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

const logger = new ConsoleLogger(LogLevel.Debug)

const chainService = new ChainService<IChain>(supportedChains);

const storeParams: IWeb3StoreParams<IChain> = {
  chainService,
  logger,
  supportedChains,
  walletConnectProjectId: 'fake',
  supportedWallets: [ ConnectorNames.Injected ]
}

export class Web3StoreStub  extends Web3Store<IChain> {

  constructor() {
    super(storeParams)
  }
}