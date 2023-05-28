import { ConnectorNames, IConnector } from '@oort-digital/web3-connectors';
import { IChain } from "@oort-digital/web3-connectors";
import { LazyLoaderNextJs } from '@oort-digital/lazy-loader-next-js';
import dynamic, { Loader } from 'next/dynamic';

const desktopLoader: Loader<IConnectModalProps> = () => import('./connectModalDesktop')
const mobileLoader: Loader<IConnectModalProps> = () => import('./connectModalMobile')

export interface IWeb3 {
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: { [name: string]: IConnector }
    switchChain: (newChainId: number) => Promise<boolean>
    connect: (chainId: number, connectorName: ConnectorNames) => Promise<boolean>
    supportedChains: IChain[]
    chain: IChain
    account: string
}

export interface IConnectModalProps {
	web3: IWeb3
	supportedWallets: ConnectorNames[]
	expectedChainId?: number
	visible: boolean
	/**
	 * @deprecated Use onClose, afterConnect, afterChainSwitch
	 */
	onCancel?: () => void

	/** executed when user click 'X' in the top right corner */
	onClose?: () => void
	afterConnect?: () => void
	afterChainSwitch?: () => void
}

export const ConnectModal = (props: IConnectModalProps) => {

	const DesktopEl = dynamic(desktopLoader)
    const MobileEl = dynamic(mobileLoader)

	return <LazyLoaderNextJs
		desktop={<DesktopEl {...props}/>}
		tablet={<DesktopEl {...props}/>}
		mobile={<MobileEl {...props}/>}
	/>
}
