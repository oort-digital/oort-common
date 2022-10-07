import { lazy } from 'react'
import { LazyLoader } from '../lazyLoader';
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
import { IChain } from '../typesAndInterfaces';

const Desktop = lazy(() => import("./connectModalDesktop"));
const Mobile = lazy(() => import("./connectModalMobile"));

export interface IWeb3 {
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: { [name: string]: IConnector }
    switchChain: (newChainId: number) => Promise<void>
    connectAsync: (connectorName: ConnectorNames) => Promise<void>
    supportedChains: IChain[]
    chain: IChain
    account: string
}

interface IProps {
	web3: IWeb3
	visible: boolean
	onCancel: () => void
}

export const ConnectModal = ({web3, visible, onCancel}: IProps) => {

	
	const desktop = <Desktop
		onCancel={onCancel}
		visible={visible}
		web3={web3} />

	const mobile = <Mobile
		onCancel={onCancel}
		visible={visible}
		web3={web3} />

	return <LazyLoader
		desktop={desktop}
		tablet={desktop}
		mobile={mobile}
	/>
}
