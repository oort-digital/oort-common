import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletConnectConnectorNew } from './walletConnectConnectorNew';
import { logger } from '@oort/logger';

const FakeComponent = () => <></>

export default {
  title: 'web3Connectors/walletConnectConnector',
  component: FakeComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FakeComponent>;


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

const connector = new WalletConnectConnectorNew(logger, supportedChains)

const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {

  return <div>

    <button onClick={() => connector.connect(1)}>Connect Ethereum</button>

  </div>
}

export const Main = Template.bind({});
Main.args = { }
