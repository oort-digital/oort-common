import "../styles/antOverride.less";
import "../styles/fonts.css";

// import '@oort/ui/dist/style.css';
// import '../oortLib.less';
import {BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectorNames, IConnector, InjectedConnector } from "@oort/web3-connectors";
import { logger } from "@oort/logger";
import LayoutDesktop from './layoutDesktop';
import { INavItems } from "./navMenu";
import { lazy } from "react";
import { useTheme } from "../effects";
import { TestCarousel } from "./testCarousel";
import { ZERO_ADDR } from "../utils";

const DarkTheme = lazy(() => import("../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../styles/theme/lightTheme"));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/layout/desktop',
  component: LayoutDesktop,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LayoutDesktop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LayoutDesktop> = (args) => {

  const [isDark] = useTheme()

  return <>
    { isDark ? <DarkTheme /> : <LightTheme /> }
    <Router>
      <LayoutDesktop {...args} />
    </Router>
    
  </>
}

const navItems: INavItems = {

  dashboard: 'http://dashboard.oort.local',
  mint: 'https://mint.oort.digital',
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

const web3 = {
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
const content = <div style={style}>
  <TestCarousel />
</div>

export const WithWeb3 = Template.bind({});
WithWeb3.args = {
  navItems: navItems,
  web3: web3,
  children: content
};

export const WithoutWeb3 = Template.bind({});
WithoutWeb3.args = {
  navItems: navItems,
  children: content
};

const isActiveFunc = (href: string) => {
  return href.includes('game-hub.oort.local/nfts');
}

export const ActiveCollapse = Template.bind({});
ActiveCollapse.args = {
  navItems: navItems,
  children: content,
  isActiveFunc: isActiveFunc
};


