import { ReactNode, useState } from 'react'
import { Col, Row } from 'antd'
import "./connectModalMobile.less"

import { ConnectButton } from './connectButton';
import { MetamaskIcon } from './metamaskIcon';
import { WalletConnectIcon } from './walletConnectIcon';
import { Gutter } from 'antd/lib/grid/row';
import { ChainButton } from './chainButton';
import { ConnectorNames } from "@oort/web3-connectors";
import { IChain } from '../typesAndInterfaces';
import { OortModalMobile } from '../oortModal';
import { IWeb3 } from './connectModal';


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
	web3: IWeb3
	visible: boolean
	onCancel: () => void
}

const ConnectModalMobile = ({ web3, visible, onCancel }: IProps) => {

	const [ loading, setLoading ] = useState(false)
	
	const { supportedChains, chain, switchChain, canSwitchChain, connectAsync, account, connectorName, supportedConnectors } = web3

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
		By connecting, I accept Oort Digital’s <a href='https://oort.digital/terms'>Terms of Service</a> and acknowledge that you have read and understand the <a href='https://oort.digital/terms#disclaimer'>Oort Digital protocol disclaimer</a>
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
	
		return <Col span="24" key={chainId}>
			<ChainButton
				onClick={() => switchChainAndClose(chainId)}
				loading={loading}
				isActive={chainId === chain!.chainId}
				canSwitchChain={canSwitchChain}
				chain={supportedChain} />
		</Col>
	
	}

	const btnGutter: [Gutter, Gutter] = [0, 12]
	
	return <OortModalMobile viewMode="topGap" loading={loading} footer={footer} className='connect-wallet-mobile-modal' title='Network & Wallet' visible={visible} onCancel={onCancel}>
		<>
			{
				chain && <>
					<div className="description">
						{renderAlert(account, chain, supportedChains)}
					</div>
					<Row gutter={btnGutter} className='chain-buttons'>
						{supportedChains.map(x => renderChainBtn(x))}
					</Row>
				</>
			}
			<div className="description">
				<span>Connect your Wallet</span> and jump into the world of NFT's
			</div>
			<Row gutter={btnGutter}>
				{window.ethereum && <Col span="24">{renderWalletBtn("Metamask", ConnectorNames.Injected, MetamaskIcon)}</Col>}
				<Col span="24">{renderWalletBtn("WalletConnect", ConnectorNames.WalletConnect, WalletConnectIcon)}</Col>
			</Row>
		</>
	</OortModalMobile>
		
	
};

export default ConnectModalMobile