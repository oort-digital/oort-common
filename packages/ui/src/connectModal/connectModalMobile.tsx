import { ReactNode, useState } from 'react'
import { Col, Row } from 'antd'
import styles from "./connectModalMobile.module.less"

import { ConnectButton } from './connectButton';
import { MetamaskIcon } from './metamaskIcon';
import { WalletConnectIcon } from './walletConnectIcon';
import { Gutter } from 'antd/lib/grid/row';
import { ConnectorNames } from "@oort/web3-connectors";
import { IChain, isChainEmpty } from '../typesAndInterfaces';
import { OortModalMobile } from '../oortModal';
import { IConnectModalProps, IWeb3 } from './connectModal';
import { ChainButtonWithLogic } from './chainButtonWithLogic';
import { Alert } from './alert';
import { Bold } from './bold';

const ConnectModalMobile = ({ web3, visible, onCancel, onClose, afterConnect, afterChainSwitch, expectedChainId }: IConnectModalProps) => {

	const [ loading, setLoading ] = useState(false)
	
	const { supportedChains, chain, switchChain, canSwitchChain, connect, account, connectorName, supportedConnectors } = web3

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
		By connecting, I accept Oort Digital’s <a href='https://oort.digital/terms'>Terms of Service</a> and acknowledge that you have read and understand the <a href='https://oort.digital/terms#disclaimer'>Oort Digital protocol disclaimer</a>
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
	
		return <Col span="24" key={chainId}>
			<ChainButtonWithLogic
				onClick={() => switchChainAndClose(chainId)}
				loading={loading}
				expectedChainId={expectedChainId}
				connectedChainId={chain.chainId}
				canSwitchChain={canSwitchChain}
				chain={supportedChain} />
		</Col>
	
	}

	const btnGutter: [Gutter, Gutter] = [0, 12]

	const _onCancel = () => {
		onClose && onClose()
		onCancel && onCancel()
	}
	
	return <OortModalMobile viewMode="topGap" loading={loading} footer={footer}
		className={styles.modal} title='Network & Wallet' visible={visible}
		onCancel={() => _onCancel()}>
		<>
			{
				!isChainEmpty(chain) && <>
					<div className={styles.description}>
						<Alert account={account} chain={chain} supportedChains={supportedChains} expectedChainId={expectedChainId} />
					</div>
					<Row gutter={btnGutter} className={styles.chain_buttons}>
						{supportedChains.map(x => renderChainBtn(x))}
					</Row>
				</>
			}
			<div className={styles.description}>
				<Bold>Connect your Wallet</Bold> and jump into the world of NFT's
			</div>
			<Row gutter={btnGutter}>
				<Col span="24">{renderWalletBtn(supportedChains[0].chainId, "Metamask", ConnectorNames.Injected, MetamaskIcon)}</Col>
				<Col span="24">{renderWalletBtn(supportedChains[0].chainId, "WalletConnect", ConnectorNames.WalletConnect, WalletConnectIcon)}</Col>
			</Row>
		</>
	</OortModalMobile>
		
	
};

export default ConnectModalMobile