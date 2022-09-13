
import "../styles/antOverride.less";
import "../styles/fonts.css";
import '@oort/ui/dist/style.css';
// import '../oortLib.less';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectorNames, IConnector, InjectedConnector } from "@oort/web3-connectors";
import { logger } from "@oort/logger";
import { Layout } from './layout';
import { INavItems } from "./navMenu";
import { ZERO_ADDR } from '../extensions';
import { lazy } from "react";
import { useTheme } from "../effects";
import { TestCarousel } from "./testCarousel";

const DarkTheme = lazy(() => import("../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../styles/theme/lightTheme"));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/layout',
  component: Layout,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => {

  const [isDark] = useTheme()

  return <>
    { isDark ? <DarkTheme /> : <LightTheme /> }
    <Layout {...args} />
  </>
}

const navItems: INavItems = {

  dashboard: {
    href: 'https://localhost',
  },
  mint: {
    href: 'https://mint.oort.digital',
    isActive: true
  },
  rent: {
    href: 'https://app.oort.digital',
  },
  gameHub: {
    href: 'https://app.oort.digital',
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

const content = <div style={{ background: 'red' }}>
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
  navItems: navItems
};
