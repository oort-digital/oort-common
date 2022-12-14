import React from 'react';
import '../styles/antOverride.less';
import '../styles/fonts.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectModal, IWeb3 } from '.';
import { ConnectorNames, IConnector, InjectedConnector } from '@oort/web3-connectors';
import { logger } from '@oort/logger';
import { ZERO_ADDR } from '../utils';
import { EMPTY_CHAIN } from '../typesAndInterfaces';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/connectModal',
  component: ConnectModal,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ConnectModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConnectModal> = (args) => <ConnectModal {...args} />;

const chains = [
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
  },
  {
    name: "goerli",
    chainId: 5,
    rpcUrl: 'https://ethereum-goerli-rpc.allthatnode.com',
    blockExplorer: 'https://goerli.etherscan.io',
  }
]
  
const supportedConnectors: { [name: string]: IConnector } = {}
supportedConnectors[ConnectorNames.Injected] = new InjectedConnector(logger, chains)
supportedConnectors[ConnectorNames.WalletConnect] = new InjectedConnector(logger, chains)


const web3: IWeb3 = {
  canSwitchChain: true,
  connectorName: ConnectorNames.Injected,
  switchChain: async (_newChainId: number) => true,
  connect: async (chainId: number, _connectorName: ConnectorNames) => true,
  chain: chains[0],
  account: ZERO_ADDR,
  supportedChains: chains,
  supportedConnectors: supportedConnectors,
}

const web3NotConnected = { ...web3, ...{ chain: EMPTY_CHAIN, account: '' } }

export const Connected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Connected.args = {
  web3: web3,
  visible: true
};

export const NotConnected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotConnected.args = {
  web3: web3NotConnected,
  visible: true
};


export const ExpectedChain = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExpectedChain.args = {
  web3: web3,
  visible: true,
  expectedChainId: 5
};
