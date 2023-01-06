import { ReactNode, useState } from 'react'
import { IChain, isChainEmpty } from "../typesAndInterfaces"
import { Col, Row } from 'antd'
import styles from "./connectModalDesktop.module.less"
import { ConnectButton } from './connectButton';
import { MetamaskIcon } from './metamaskIcon';
import { WalletConnectIcon } from './walletConnectIcon';
import { Gutter } from 'antd/lib/grid/row';
import { ConnectorNames } from '@oort/web3-connectors';
import { OortModal } from '../oortModal';
import { IConnectModalProps, IWeb3 } from './connectModal';
import { ChainButtonWithLogic } from './chainButtonWithLogic';
import { Alert } from './alert';
import { Bold } from './bold';

const ConnectModalDesktop = ({ web3, onCancel, visible, onClose, afterChainSwitch, afterConnect, expectedChainId }: IConnectModalProps) => {

	const [ loading, setLoading ] = useState(false)
	const {  supportedChains, chain, switchChain, canSwitchChain, connect, account, connectorName, supportedConnectors } = web3
	
	const connectAndClose = async (chainId: number, cnnName: ConnectorNames) => {
		setLoading(true)
        try {
            await connect(chainId, cnnName)
			onCancel && onCancel()
			afterConnect && afterConnect()
        }
        finally {
            setLoading(false)
        }
	}

	const switchChainAndClose = async (newChainId: number): Promise<void> => {		
        setLoading(true)
        try {
            await switchChain(newChainId)
			onCancel && onCancel()
			afterChainSwitch && afterChainSwitch()
        }
        finally {
            setLoading(false)
        }
    }

	const footer = <>
		<div>By connecting, I accept Oort Digital’s <a href='https://oort.digital/terms'>Terms of Service</a> and acknowledge</div>
		<div>that you have read and understand the <a href='https://oort.digital/terms#disclaimer'>Oort Digital protocol disclaimer</a></div>
	</>

	const renderWalletBtn = (chainId: number, walletName: string, cnnName: ConnectorNames, icon: ReactNode) => {

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
			onClick={() => connectAndClose(chainId, cnnName)}
			walletIcon={icon}
			labelText="Connect"
		/>

	}

	const renderChainBtn = (supportedChain: IChain) => {

		const { chainId } = supportedChain
	
		return <Col flex={3} key={chainId}>
			<ChainButtonWithLogic
				onClick={() => switchChainAndClose(chainId)}
				loading={loading}
				expectedChainId={expectedChainId}
				connectedChainId={chain.chainId}
				canSwitchChain={canSwitchChain}
				chain={supportedChain} />
		</Col>
	
	}

	const btnGutter: [Gutter, Gutter] = [10, 0]

	const _onCancel = () => {
		onClose && onClose()
		onCancel && onCancel()
	}
	
	return <OortModal 
		loading={loading}
		footer={footer}
		className={styles.modal}
		title='Network & Wallet'
		width="690px"
		visible={visible} onCancel={() => _onCancel()}>
		<>
			{
				!isChainEmpty(chain) && <>
					<div className={styles.description}>
						<Alert account={account} chain={chain} supportedChains={supportedChains} expectedChainId={expectedChainId} />
					</div>
					<Row gutter={btnGutter} className={styles.chain_buttons} justify='space-between'>
						{supportedChains.map(x => renderChainBtn(x))}
					</Row>
				</>
			}
			<div className={styles.description}>
				<Bold>Connect your Wallet</Bold> and jump into the world of NFT's
			</div>
			<Row gutter={btnGutter} justify='space-between'>
				<Col span={12}>{renderWalletBtn(supportedChains[0].chainId, "Metamask", ConnectorNames.Injected, MetamaskIcon)}</Col>
				<Col span={12}>{renderWalletBtn(supportedChains[0].chainId, "WalletConnect", ConnectorNames.WalletConnect, WalletConnectIcon)}</Col>
			</Row>
		</>
	</OortModal>
		
	
};

export default ConnectModalDesktop
