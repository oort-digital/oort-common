import { lazy } from 'react'
import { LazyLoader } from '../lazyLoader';
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
import { IChain } from '../typesAndInterfaces';

const Desktop = lazy(() => import("./connectModalDesktop"));
const Mobile = lazy(() => import("./connectModalMobile"));

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

export const ConnectModal = (props: IProps) => {

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
