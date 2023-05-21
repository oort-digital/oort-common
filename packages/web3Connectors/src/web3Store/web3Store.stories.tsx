import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConsoleLogger } from '@oort-digital/logger';
import { observer } from 'mobx-react';
import { IFaceWalletCredentials } from '../connectors/faceWalletConnector';
import { ChainService } from './chainService';
import { TestWeb3Store } from './testWeb3Store';
import { IChainInfo } from '../internalTypesAndInterfaces';
import { ConnectorNames } from '../connectors';

const logger = new ConsoleLogger()

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

const faceWalletConnectCredentials: IFaceWalletCredentials = {
  testnetApiKey,
  mainnetApiKey,
}


const chainService = new ChainService(chains)

const web3Store = new TestWeb3Store({ 
  supportedChains: chains,
  walletConnectProjectId: 'c2b4ff7ce76613f93a7edea85b9618f5',
  faceWalletCredentials: faceWalletConnectCredentials,
  supportedWallets: [ConnectorNames.Injected, ConnectorNames.FaceWallet, ConnectorNames.WalletConnect],
  logger,
  chainService
 })

const FakeComponent = observer(() => {

  const { isReady, account, chain, isConnectedToSupportedChain, supportedChains } = web3Store

  const [ curConnector, setCurConnector ] = useState<ConnectorNames>(ConnectorNames.FaceWallet)

  const isConnected = !!account

  const onConnect = () => {
    web3Store.connect(137, curConnector)
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
    <select value={curConnector} onChange={(ev: any) => setCurConnector(ev.target.value)}>
      <option value={ConnectorNames.FaceWallet}>face wallet</option>
      <option value={ConnectorNames.WalletConnect}>wallet connect</option>
      <option value={ConnectorNames.Injected}>injected</option>
    </select>
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