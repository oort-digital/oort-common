import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletConnectConnector } from './walletConnectConnector';
import { logger } from '@oort-digital/logger';
import { InjectedConnector } from './injectedConnector';
import { IChainInfo } from './baseConnector';
import { ConnectorProvider } from './connectorProvider';
import { ConnectorNames } from './connectorNames';

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

const options = {
  projectId: 'c2b4ff7ce76613f93a7edea85b9618f5',
  logger,
  chains
}
const walletConnect = new WalletConnectConnector(options)
const injected = new InjectedConnector(logger, chains)


const connectorProvider = new ConnectorProvider(logger, [walletConnect, injected])

const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {

  // const [ ready, setReady ] = useState(false)
  const [ chainId, setChainId ] = useState<number>()
  const [ address, setAddress ] = useState<string>()
  const [ connected, setConnected ] = useState<boolean>(false)

  const [ curConnector, setCurConnector ] = useState<ConnectorNames>(ConnectorNames.Injected)


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
      <option value="walletConnect">wallet connect</option>
      <option value="injected">injected</option>
    </select>

    <div>chainId: {chainId}</div>
    <div>address: {address}</div>
    <div>connected: {connected.toString()}</div>
    <button disabled={connected} onClick={() => connect(1)}>Connect Ethereum</button>
    <button disabled={!connected || chainId === 137} onClick={() => switchChain(137)}>Switch to Polygon</button>
    <button disabled={!connected} onClick={() => disconnect()}>Disconnect</button>

  </div>
}

export const Main = Template.bind({});
Main.args = { }