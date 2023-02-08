import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletConnectConnector } from '../walletConnectConnector';
import { logger } from '@oort-digital/logger';
import { InjectedConnector } from '../injectedConnector';
import { IChainInfo } from '../baseConnector';
import { ConnectorProvider } from '../connectorProvider';
import { Web3Store } from './web3Store';
import { observer } from 'mobx-react';
import { FaceWalletConnector, IFaceWalletOptions } from '../faceWalletConnector';
import { ChainService } from './chainService';
import { ConnectorNames } from '../connectorNames';

const chains: IChainInfo[] = [
  {
    name: "polygon",
    chainId: 137,
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
  },
  {
      name: "ethereum",
      chainId: 1,
      rpcUrl: ''
  }
]

const testnetApiKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD7uJnqeI74gH6M-cSeEq82_Zrh-dp9KYH9asKMsjmdZpxjuHifc8lRhkKp5ZDTr9H__bpX8XFSBHt52r_iyP2-pMMh5E-T3uQJLFs0dBUSw2COr2ZgA_QWFHaIoSOtV_b9w5gEzxY623L0_Op9ItpZ51NN1WGEWgate5k-vMaDwIDAQAB'

const mainnetApiKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCX9F3aDaZiPAsbGNbnpHAyBJNBHi4DtLkHIo1ZSYKSlxVHkg2ejuN1rMmPFGe6cZsZS7eAcNB-AaVTLyDgmYYdYBYwdJEoTejAJ2nC1ntZwmOEDC6nR_oeedEH2lc4zQp05rV0p8DHDUYxiYC6nlG-RSEUOvJhzsoC2tetoEbjuQIDAQAB'

const faceWalletConnectOptions: IFaceWalletOptions = {
  logger,
  chains,
  testnetApiKey,
  mainnetApiKey,
}

const options = {
  projectId: 'c2b4ff7ce76613f93a7edea85b9618f5',
  logger,
  chains
}
const walletConnect = new WalletConnectConnector(options)
const injected = new InjectedConnector(logger, chains)
const faceWallet = new FaceWalletConnector(faceWalletConnectOptions)

const connectorProvider = new ConnectorProvider(logger, [faceWallet, walletConnect, injected])

const chainService = new ChainService(chains)

const web3Store = new Web3Store({ 
  logger, connectorProvider, chainService
 })

const FakeComponent = observer(() => {

  const { isReady, account, chain, isConnectedToSupportedChain, supportedChains } = web3Store

  const isConnected = !!account

  const onConnect = () => {
    web3Store.connect(137, ConnectorNames.Injected)
  }

  const onSwitch = () => {
    const newChain = supportedChains.find(c => c.chainId !== chain.chainId)
    if(newChain) {
      web3Store.switchChain(newChain.chainId)
    }
  }

  if(!isReady) {
    return <>store is not ready</>
  }

  return <div>
    <button disabled={isConnected} onClick={onConnect}>Connect</button>
    <button disabled={!isConnected} onClick={onSwitch}>Switch</button>
    <div>isConnectedToSupportedChain: {isConnectedToSupportedChain.toString()}</div>
    <div>account: {account}</div>
    <div>chainId: {chain.chainId}</div>
  </div>
})

export default {
  title: 'web3Connectors/web3Store',
  component: FakeComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FakeComponent>;


const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {
  return <FakeComponent />
}

export const Main = Template.bind({});
Main.args = { }