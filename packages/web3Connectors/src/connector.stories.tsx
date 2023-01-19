import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { WalletConnectConnector } from './walletConnectConnector';
import { logger } from '@oort-digital/logger';
import { InjectedConnector } from './injectedConnector';
import { IConnector } from './iConnector';
import { IChainInfo } from './baseConnector';
import { ConnectorNames } from './connectorNames';
import { FaceWalletConnector, IFaceWalletOptions } from './faceWalletConnector';

const FakeComponent = () => <></>

export default {
  title: 'web3Connectors/connectors',
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

/*
const walletConnectOptions = {
  projectId: 'c2b4ff7ce76613f93a7edea85b9618f5',
  logger,
  chains
}
*/

/*
https://oortdigital.slack.com/archives/C04EY5MLV50/p1671005355999189
Oort NFT Rental Marketplace
[API Key for Testnet]
*/
const testnetApiKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD7uJnqeI74gH6M-cSeEq82_Zrh-dp9KYH9asKMsjmdZpxjuHifc8lRhkKp5ZDTr9H__bpX8XFSBHt52r_iyP2-pMMh5E-T3uQJLFs0dBUSw2COr2ZgA_QWFHaIoSOtV_b9w5gEzxY623L0_Op9ItpZ51NN1WGEWgate5k-vMaDwIDAQAB'

const mainnetApiKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCX9F3aDaZiPAsbGNbnpHAyBJNBHi4DtLkHIo1ZSYKSlxVHkg2ejuN1rMmPFGe6cZsZS7eAcNB-AaVTLyDgmYYdYBYwdJEoTejAJ2nC1ntZwmOEDC6nR_oeedEH2lc4zQp05rV0p8DHDUYxiYC6nlG-RSEUOvJhzsoC2tetoEbjuQIDAQAB'

const faceWalletConnectOptions: IFaceWalletOptions = {
  logger,
  chains,
  testnetApiKey,
  mainnetApiKey,
}

// const walletConnect = new WalletConnectConnector(walletConnectOptions)
const injected = new InjectedConnector(logger, chains)
const faceWallet = new FaceWalletConnector(faceWalletConnectOptions)


type OnClickHandler = (chainId: number) => Promise<void>
interface IConnectButtonProps {
  chainId: number
  curChainId: number | undefined
  connect: OnClickHandler
  switchChain: OnClickHandler
}

const getChainName = (chainId: number): string => {
  switch(chainId) {
    case 1:
      return 'Ethereum'
    case 5:
      return 'Goerli'
    case 137:
      return 'Polygon'
    case 80001:
      return 'Mumbai'
  }

  throw new Error(`Unknown chain. ChainId: ${chainId}`)
}

const ConnectButton = ({ chainId, curChainId, connect, switchChain }: IConnectButtonProps) => {

  let onClick: OnClickHandler
  let text = `to ${getChainName(chainId)}`

  if(curChainId) {
    onClick = switchChain
    text = `Switch ${text}`
  }
  else {
    onClick = connect
    text = `Connect ${text}`
  }
  return <button disabled={curChainId === chainId} onClick={() => onClick(chainId)}>{text}</button>
}

const Template: ComponentStory<typeof FakeComponent> = (_args: any) => {

  const [ chainId, setChainId ] = useState<number>()
  const [ address, setAddress ] = useState<string>()

  const [ curConnector, setCurConnector ] = useState<ConnectorNames>(ConnectorNames.FaceWallet)

  const getConnectorInstance = (): IConnector => {
    if(curConnector === ConnectorNames.Injected) { return injected }
    // if(curConnector === ConnectorNames.WalletConnect) { return walletConnect }
    return faceWallet
  }

  const onConnect = async () => {
    const instance = getConnectorInstance()
    const signer = await instance.getSigner()
    setAddress(await signer.getAddress())
    setChainId(await signer.getChainId())
  }

  const reset = () => {
    setChainId(undefined)
    setAddress(undefined)
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

  const renderConnectBtn = (chnId: number) => <ConnectButton curChainId={chainId} chainId={chnId} switchChain={switchChain} connect={connect} />

  return <div>

    <select value={curConnector} onChange={(ev: any) => setCurConnector(ev.target.value)}>
      <option value={ConnectorNames.FaceWallet}>face wallet</option>
      <option value={ConnectorNames.WalletConnect}>wallet connect</option>
      <option value={ConnectorNames.Injected}>injected</option>
    </select>

    <div>chainId: {chainId}</div>
    <div>address: {address}</div>
    <div>connected: {(!!chainId).toString()}</div>
    <button disabled={!chainId} onClick={() => disconnect()}>Disconnect</button>
    <h1>Mainnets</h1>
    {renderConnectBtn(1)}
    {renderConnectBtn(137)}

    <h1>Testnets</h1>
    {renderConnectBtn(5)}
    {renderConnectBtn(80001)}
  </div>
}

export const Main = Template.bind({});
Main.args = { }