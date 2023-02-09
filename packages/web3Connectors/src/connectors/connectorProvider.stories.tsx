import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletConnectConnector } from './walletConnectConnector';
import { logger } from '@oort-digital/logger';
import { InjectedConnector } from './injectedConnector';
import { ConnectorProvider } from './connectorProvider';
import { ConnectorNames } from './connectorNames';
import { FaceWalletConnector, IFaceWalletOptions } from './faceWalletConnector';
import { IChainInfo } from '../internalTypesAndInterfaces';

const FakeComponent = () => <></>

export default {
  title: 'web3Connectors/connectorProvider',
  component: FakeComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FakeComponent>;


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
  credentials: { testnetApiKey, mainnetApiKey }
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

const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {

  // const [ ready, setReady ] = useState(false)
  const [ chainId, setChainId ] = useState<number>()
  const [ address, setAddress ] = useState<string>()
  const [ connected, setConnected ] = useState<boolean>(false)

  const [ curConnector, setCurConnector ] = useState<ConnectorNames>(ConnectorNames.FaceWallet)


  const onConnect = async () => {
    const instance = connectorProvider.curConnector!
    const signer = await instance.getSigner()
    setAddress(await signer.getAddress())
    setChainId(await signer.getChainId())
    setConnected(true)
  }

  const reset = () => {
    setChainId(undefined)
    setAddress(undefined)
    setConnected(false)
  }

  useEffect(() => {

    connectorProvider.waitInitialisation.then(() => {
      if(connectorProvider.curConnector) {
        onConnect()
      }
    })

  }, [])

  const connect = async (chainId: number) => {
    if(await connectorProvider.connect(chainId, curConnector)) {
      onConnect()
    }
  }

  const disconnect = async () => {
    await connectorProvider.disconnect()
    reset()
  }

  const switchChain = async (chainId: number) => {
    if(await connectorProvider.switchChain(chainId)) {
      onConnect()
    }
  }

  return <div>

    <select value={curConnector} onChange={(ev: any) => setCurConnector(ev.target.value)}>
    <option value={ConnectorNames.FaceWallet}>face wallet</option>
      <option value={ConnectorNames.WalletConnect}>wallet connect</option>
      <option value={ConnectorNames.Injected}>injected</option>
    </select>

    <div>chainId: {chainId}</div>
    <div>address: {address}</div>
    <div>connected: {connected.toString()}</div>
    <button onClick={() => connect(1)}>Connect Ethereum</button>
    <button onClick={() => connect(137)}>Connect Polygon</button>
    <button disabled={!connected || chainId === 137} onClick={() => switchChain(137)}>Switch to Polygon</button>
    <button disabled={!connected} onClick={() => disconnect()}>Disconnect</button>

  </div>
}

export const Main = Template.bind({});
Main.args = { }