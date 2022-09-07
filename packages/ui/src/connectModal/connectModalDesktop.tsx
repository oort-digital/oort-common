import React, { ReactNode, useState } from 'react'
import { IChain } from "../typesAndInterfaces"
import { Col, Row } from 'antd'
import "./connectModalDesktop.less"
import { ConnectButton } from './connectButton';
import { MetamaskIcon } from './metamaskIcon';
import { WalletConnectIcon } from './walletConnectIcon';
import { Gutter } from 'antd/lib/grid/row';
import { ChainButton } from './chainButton';
import { ConnectorNames, IConnector } from '../web3Connectors';
import { OortModal } from '../oortModal';
import { ConnectModal } from './connectModal';

export enum WALLETTYPE {
	WALLET_METAMASK,
	WALLET_CONNECT,
}

const renderAlert = (account: string, chain: IChain, supportedChains: IChain[]) => {

	if (!account) {
		return null;
	}

	if (!supportedChains.some(x => x.name === chain!.name)) {
		return <>
			You connected to <span>{chain!.name}.</span>
			<div>
				Please connect to the appropriate network. <span>{supportedChains.map(x => x.name).join(', ')}</span>
			</div>
		</>
	}

	return <>
	You are currently using <span>Oort Digital</span> on the <span>{chain!.name}</span> network
	</>
};

interface IProps {
	chain: IChain
	supportedChains: IChain[]
	account: string
	canSwitchChain: boolean
	connectorName: ConnectorNames
	supportedConnectors: { [name: string]: IConnector }
	visible: boolean
	onCancel: () => void
	switchChain: (newChainId: number) => Promise<void>
	connectAsync: (connectorName: ConnectorNames) => Promise<void>
}

const ConnectModalDesktop = (props: IProps) => {

	const [ loading, setLoading ] = useState(false)
	const { onCancel, visible, supportedChains, chain, switchChain, canSwitchChain, connectAsync, account, connectorName, supportedConnectors } = props
	
	const connectAndClose = async (cnnName: ConnectorNames) => {
		setLoading(true)
        try {
            await connectAsync(cnnName)
			onCancel()
        }
        finally {
            setLoading(false)
        }
	}

	const switchChainAndClose = async (newChainId: number): Promise<void> => {		
        setLoading(true)
        try {
            await switchChain(newChainId)
			onCancel()
        }
        finally {
            setLoading(false)
        }
    }

	const footer = <>
		<div>By connecting, I accept Oort Digital’s <a href='https://oort.digital/terms'>Terms of Service</a> and acknowledge</div>
		<div>that you have read and understand the <a href='https://oort.digital/terms#disclaimer'>Oort Digital protocol disclaimer</a></div>
	</>

	const renderWalletBtn = (walletName: string, cnnName: ConnectorNames, icon: ReactNode) => {

		if(account && cnnName === connectorName) {
			return <ConnectButton
					disabled={true}
					walletName={walletName}
					walletIcon={icon}
					account={account}/>
		}

		const connector = supportedConnectors[cnnName]
		if(!connector.isInstalled) {
			return <ConnectButton
				walletName={walletName}
				onClick={() => window.open(connector.installUrl, '_blank')!.focus()}
				walletIcon={icon}
				labelText="Install"
			/>
		}

		return <ConnectButton
			walletName={walletName}
			onClick={() => connectAndClose(cnnName)}
			walletIcon={icon}
			labelText="Connect"
		/>

	}

	const renderChainBtn = (supportedChain: IChain) => {

		const { chainId } = supportedChain
	
		return <Col flex={3} key={chainId}>
			<ChainButton
				onClick={() => switchChainAndClose(chainId)}
				loading={loading}
				isActive={chainId === chain!.chainId}
				canSwitchChain={canSwitchChain}
				chain={supportedChain} />
		</Col>
	
	}

	const btnGutter: [Gutter, Gutter] = [10, 0]
	
	return <OortModal loading={loading} footer={footer} className='connect-wallet-desktop-modal' title='Network & Wallet' width="690px" visible={visible} onCancel={onCancel}>
		<>
			{
				chain && <>
					<div className="description">
						{renderAlert(account, chain, supportedChains)}
					</div>
					<Row gutter={btnGutter} className='chain-buttons' justify='space-between'>
						{supportedChains.map(x => renderChainBtn(x))}
					</Row>
				</>
			}
			<div className="description">
				<span>Connect your Wallet</span> and jump into the world of NFT's
			</div>
			<Row gutter={btnGutter} justify='space-between'>
				<Col span={12}>{renderWalletBtn("Metamask", ConnectorNames.Injected, MetamaskIcon)}</Col>
				<Col span={12}>{renderWalletBtn("WalletConnect", ConnectorNames.WalletConnect, WalletConnectIcon)}</Col>
			</Row>
		</>
	</OortModal>
		
	
};

export default ConnectModalDesktop
