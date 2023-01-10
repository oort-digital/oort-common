import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletConnectConnector } from './walletConnectConnector';
import { logger } from '@oort/logger';
import { InjectedConnector } from './injectedConnector';
import { IConnector } from './iConnector';
import { IChainInfo } from './baseConnector';
import { ConnectorNames } from './connectorNames';
import { FaceWalletConnector } from './faceWalletConnector';

const FakeComponent = () => <></>

export default {
  title: 'web3Connectors/walletConnectConnector',
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

const options = {
  projectId: 'c2b4ff7ce76613f93a7edea85b9618f5',
  logger,
  chains
}
const walletConnect = new WalletConnectConnector(options)
const injected = new InjectedConnector(logger, chains)
const faceWallet = new FaceWalletConnector(logger, chains)

const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {

  const [ chainId, setChainId ] = useState<number>()
  const [ address, setAddress ] = useState<string>()
  const [ connected, setConnected ] = useState<boolean>(false)

  const [ curConnector, setCurConnector ] = useState<ConnectorNames>(ConnectorNames.FaceWallet)

  const getConnectorInstance = (): IConnector => {
    if(curConnector === ConnectorNames.Injected) { return injected }
    if(curConnector === ConnectorNames.FaceWallet) { return faceWallet }
    return walletConnect
  }

  const onConnect = async () => {
    const instance = getConnectorInstance()
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

    const init = async () => {
      if(await getConnectorInstance().isConnected) {
        onConnect()
      }
    }

    reset()
    init()

  }, [curConnector])

  /*
  connector.onChainChanged(_id => {
    debugger
  })*/

  const connect = async (chainId: number) => {
    if(await getConnectorInstance().connect(chainId)) {
      onConnect()
    }
  }

  const disconnect = async () => {
    await getConnectorInstance().disconnect()
    reset()
  }

  const switchChain = async (chainId: number) => {
    if(await getConnectorInstance().switchChain(chainId)) {
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
    <button disabled={!connected} onClick={() => disconnect()}>Disconnect</button>
    <h1>Mainnets</h1>
    <button disabled={connected} onClick={() => connect(1)}>Connect to Ethereum</button>
    <button disabled={!connected || chainId === 137} onClick={() => switchChain(137)}>Switch to Polygon</button>

    <h1>Testnets</h1>
    <button disabled={connected} onClick={() => connect(5)}>Connect to Goerli</button>
    <button disabled={!connected || chainId === 80001} onClick={() => switchChain(80001)}>Switch to Mumbai</button>

  </div>
}

export const Main = Template.bind({});
Main.args = { }