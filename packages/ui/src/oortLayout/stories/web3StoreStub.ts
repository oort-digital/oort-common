import { logger } from "@oort-digital/logger";
import { ConnectorNames, IConnector, InjectedConnector } from "@oort-digital/web3-connectors";
import { makeObservable, observable, runInAction } from "mobx";
import { IWeb3 } from "../../connectModal";
import { EMPTY_CHAIN, IChain } from "../../typesAndInterfaces";
import { delayAsync } from "../../utils";
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
    
const supportedConnectors: { [name: string]: IConnector } = {}
supportedConnectors[ConnectorNames.Injected] = new InjectedConnector(logger, supportedChains)
supportedConnectors[ConnectorNames.WalletConnect] = new InjectedConnector(logger, supportedChains)
    

export class Web3StoreStub implements IWeb3 {
  canSwitchChain: boolean = true;
  connectorName: ConnectorNames = ConnectorNames.Injected

  chain: IChain = EMPTY_CHAIN
  account: string = ''
  supportedChains: IChain[] = supportedChains
  supportedConnectors: { [name: string]: IConnector; } = supportedConnectors

  switchChain = async (newChainId: number) => {
    await delayAsync(1000)

    const newChain = supportedChains.find(x => x.chainId === newChainId)

    if(newChain) {
      runInAction(() => {
        this.chain = { ...newChain }
      })
    }

    return false
  }

  connect = async (_chainId: number, _connectorName: ConnectorNames) => {
    await delayAsync(1000)
    runInAction(() => {
      this.chain = { ...supportedChains[0] }
      this.account = '0x0000000000000000000000000000000000000001'
    })
    return false
  }

  constructor() {
    makeObservable(this, {
      account: observable,
      chain: observable,
      connectorName: observable
    })
  }

}