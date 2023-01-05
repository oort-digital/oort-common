import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletConnectConnector } from './walletConnectConnector';
import { logger } from '@oort/logger';
import { InjectedConnector } from './injectedConnector';
import { IConnector } from './iConnector';

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

const walletConnect = new WalletConnectConnector(logger, supportedChains)
const injected = new InjectedConnector(logger, supportedChains)

type ConnectorType = 'walletConnect' | 'injected'



const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {

  const [ chainId, setChainId ] = useState<number>()
  const [ address, setAddress ] = useState<string>()
  const [ connected, setConnected ] = useState<boolean>(false)

  const [ curConnector, setCurConnector ] = useState<ConnectorType>('walletConnect')

  const getConnectorInstance = (): IConnector => {
    if(curConnector === 'injected') { return injected }
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
    await getConnectorInstance().connect(chainId)
    onConnect()
  }

  const disconnect = async () => {
    await getConnectorInstance().disconnect()
    reset()
  }

  const switchChain = async (chainId: number) => {
    await getConnectorInstance().switchChain(chainId)
    onConnect()
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
    <button disabled={!connected} onClick={() => switchChain(137)}>Switch to Polygon</button>
    <button disabled={!connected} onClick={() => disconnect()}>Disconnect</button>

  </div>
}

export const Main = Template.bind({});
Main.args = { }
