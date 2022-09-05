import React, { lazy } from 'react'
import "./connectWalletDesktopModal.less"
import { LazyLoader } from '../../lazyLoader';
import { ConnectorNames, IConnector } from '../../web3Connectors';
import { IChain } from '../../typesAndInterfaces';

const Desktop = lazy(() => import("./connectWalletDesktopModal"));
const Mobile = lazy(() => import("./connectWalletMobileModal"));

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

export const ConnectWalletModal = (props: IProps) => {

	const { onCancel, visible, supportedChains, chain, switchChain, canSwitchChain, connectAsync, account, connectorName, supportedConnectors } = props

	const desktop = <Desktop
		onCancel={onCancel}
		visible={visible}
		supportedChains={supportedChains}
		chain={chain}
		switchChain={switchChain}
		canSwitchChain={canSwitchChain}
		connectAsync={connectAsync}
		account={account}
		connectorName={connectorName}
		supportedConnectors={supportedConnectors} />

	const mobile = <Mobile
		onCancel={onCancel}
		visible={visible}
		supportedChains={supportedChains}
		chain={chain}
		switchChain={switchChain}
		canSwitchChain={canSwitchChain}
		connectAsync={connectAsync}
		account={account}
		connectorName={connectorName}
		supportedConnectors={supportedConnectors} />

	return <LazyLoader
		desktop={desktop}
		tablet={desktop}
		mobile={mobile}
	/>
}
