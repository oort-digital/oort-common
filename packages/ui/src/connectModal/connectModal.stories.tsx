import React from 'react';
import '../styles/antOverride.less';
import '../styles/fonts.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectModal, IWeb3 } from '.';
import { ConnectorNames, ConnectorProvider, FaceWalletConnector, IConnector, IFaceWalletOptions, InjectedConnector } from '@oort/web3-connectors';
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

/*
https://oortdigital.slack.com/archives/C04EY5MLV50/p1671005355999189
Oort NFT Rental Marketplace
[API Key for Testnet]
*/
const testnetApiKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD7uJnqeI74gH6M-cSeEq82_Zrh-dp9KYH9asKMsjmdZpxjuHifc8lRhkKp5ZDTr9H__bpX8XFSBHt52r_iyP2-pMMh5E-T3uQJLFs0dBUSw2COr2ZgA_QWFHaIoSOtV_b9w5gEzxY623L0_Op9ItpZ51NN1WGEWgate5k-vMaDwIDAQAB'

const faceWalletOptions: IFaceWalletOptions = {
  chains,
  logger,
  mainnetApiKey: null,
  testnetApiKey
}
  
const supportedConnectors: { [name: string]: IConnector } = {}
supportedConnectors[ConnectorNames.Injected] = new InjectedConnector(logger, chains)
supportedConnectors[ConnectorNames.WalletConnect] = new InjectedConnector(logger, chains)
supportedConnectors[ConnectorNames.FaceWallet] = new FaceWalletConnector(faceWalletOptions)

const connectorProvider = new ConnectorProvider(logger, Object.entries(supportedConnectors).map(x => x[1]))

const web3: IWeb3 = {
  canSwitchChain: true,
  connectorName: ConnectorNames.Undefined,
  switchChain: async (newChainId: number) => {
    if(connectorProvider.CurConnector?.canSwitchChain === true) {
      return await connectorProvider.CurConnector.switchChain(newChainId)
    }
    return false
  },
  connect: async (chainId: number, connectorName: ConnectorNames) => {
    await connectorProvider.connect(chainId, connectorName)
    return true
  },
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
