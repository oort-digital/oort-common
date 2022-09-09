import React from 'react';
// import './layout.stories.less';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectorNames, IConnector, InjectedConnector, WalletConnectConnector } from "@oort/web3-connectors";
import { logger } from "@oort/logger";
import { Layout } from './layout';
import { IMenuItemHref, MenuItemId } from "./navMenu";
import { ZERO_ADDR } from '../extensions';


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
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;


const menuHrefs: IMenuItemHref[] = [
{
  id: MenuItemId.Dasboard,
  href: 'https://localhost'
},

{
  id: MenuItemId.Rent,
  href: 'https://app.oort.digital'
},

{
  id: MenuItemId.Mint,
  href: 'https://mint.oort.digital'
}
]

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

supportedConnectors[ConnectorNames.WalletConnect] = new InjectedConnector(logger, supportedChains)//new WalletConnectConnector(logger, supportedChains)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  chain: supportedChains[0],
  account: ZERO_ADDR,
  supportedChains: supportedChains,
  supportedConnectors: supportedConnectors,
  menuHrefs: menuHrefs
};
/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
