import React from 'react';
import '../styles/antOverride.less';
import '../styles/fonts.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectModal, IWeb3 } from '.';
import { BaseConnector, ConnectorNames, ConnectorProvider, FaceWalletConnector, IChainInfo, IConnector, IFaceWalletOptions, InjectedConnector, WalletConnectConnector } from '@oort-digital/web3-connectors';
import { logger } from '@oort-digital/logger';
import { EMPTY_CHAIN } from '../typesAndInterfaces';
import { delayAsync, ZERO_ADDR } from '@oort-digital/utils';
import { IConnectModalProps } from './connectModal';

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
const Template: ComponentStory<typeof ConnectModal> = (args: IConnectModalProps) => <ConnectModal {...args} />;

const chains: IChainInfo[] = [
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
  
const supportedConnectors: { [name: string]: BaseConnector } = {}
supportedConnectors[ConnectorNames.Injected] = new InjectedConnector(logger, chains)
supportedConnectors[ConnectorNames.WalletConnect] = new WalletConnectConnector({ projectId: '', logger, chains})
supportedConnectors[ConnectorNames.FaceWallet] = new FaceWalletConnector(faceWalletOptions)

const connectorProvider = new ConnectorProvider(logger, Object.values(supportedConnectors))

const web3Delay = 5000
const web3: IWeb3 = {
  canSwitchChain: true,
  connectorName: ConnectorNames.Injected,
  switchChain: async (newChainId: number) => {
    await delayAsync(web3Delay)
    if(connectorProvider.canSwitchChain === true) {
      return await connectorProvider.switchChain(newChainId)
    }
    return false
  },
  connect: async (chainId: number, connectorName: ConnectorNames) => {
    await delayAsync(web3Delay)
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
