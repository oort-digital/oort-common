import { ConnectorNames } from "@oort-digital/web3-connectors"
import { Col, Row } from "antd"
import { ReactNode, useState } from "react"
import { ChainButtonWithLogic } from "./chainButtonWithLogic"
import { ConnectButton } from "./connectButton"
import { MetamaskIcon } from "./metamaskIcon"
import { WalletConnectIcon } from "./walletConnectIcon"
import { IConnectModalProps } from './connectModal';
import { IChain, isChainEmpty } from "@oort-digital/web3-connectors"
import { Gutter } from "antd/lib/grid/row"
import { Alert } from "./alert"
import { Bold } from "./bold"
import { FaceWalletIcon } from "./faceWalletIcon"

interface IResult {
    footer1: ReactNode
    footer2: ReactNode
    content: ReactNode
    onCancel: () => void
    loading: boolean
}

interface IArgs {
    props: IConnectModalProps
    isMobile: boolean
    btnGutter: [Gutter, Gutter]
    styles: any
}

interface ILoadingData {
    inProcess: boolean
    cnnName: ConnectorNames
}

const stopedLoading: ILoadingData = { inProcess: false, cnnName: ConnectorNames.Undefined }

export const useConnectModalCommon = ({ props, isMobile, btnGutter, styles }: IArgs): IResult => {

    const { onCancel, onClose, afterConnect, afterChainSwitch, web3, expectedChainId, supportedWallets } = props
    const [ loading, setLoading ] = useState<ILoadingData>(stopedLoading)

    const startLoading = (cnnName: ConnectorNames) => setLoading({ inProcess: true, cnnName })
    const stopLoading = () => setLoading(stopedLoading)
    
    const footer1 = <>By connecting, I accept Oort Digital’s <a href='https://oort.digital/terms'>Terms of Service</a> and acknowledge</>
    const footer2 = <>that you have read and understand the <a href='https://oort.digital/terms#disclaimer'>Oort Digital protocol disclaimer</a></>

    const {  supportedChains, chain, switchChain, canSwitchChain, connect, account, connectorName, supportedConnectors } = web3

    const _onCancel = () => {
		onClose && onClose()
		onCancel && onCancel()
	}

    const connectAndClose = async (chainId: number, cnnName: ConnectorNames) => {
		startLoading(cnnName)
        try {
            if(await connect(chainId, cnnName)) {
				onCancel && onCancel()
				afterConnect && afterConnect()
			}
        }
        finally {
            stopLoading()
        }
	}

    const switchChainAndClose = async (newChainId: number): Promise<void> => {		
        startLoading(connectorName)
        try {
            if(await switchChain(newChainId)) {
			    onCancel && onCancel()
			    afterChainSwitch && afterChainSwitch()
            }
        }
        finally {
            stopLoading()
        }
    }

    const renderChainBtn = (supportedChain: IChain) => {

		const { chainId } = supportedChain
	
		return <Col flex={isMobile ? 24 : 3} key={chainId}>
			<ChainButtonWithLogic
				onClick={() => switchChainAndClose(chainId)}
				loading={loading.inProcess}
				expectedChainId={expectedChainId}
				connectedChainId={chain.chainId}
				canSwitchChain={canSwitchChain}
				chain={supportedChain} />
		</Col>
	
	}

    const isWalletSupported = (connectorName: ConnectorNames): boolean => {
        if(supportedWallets) {
            return supportedWallets.some(x => x === connectorName)
        }

        return true
    }

    const renderWalletBtn = (chainId: number, walletName: string, cnnName: ConnectorNames, icon: ReactNode) => {

		if(account && cnnName === connectorName) {
			return <ConnectButton
                    disabled={loading.inProcess}
					walletName={walletName}
					walletIcon={icon}
					account={account}/>
		}

		const connector = supportedConnectors[cnnName]
		if(!connector.isInstalled) {
			return <ConnectButton
				walletName={walletName}
                disabled={loading.inProcess}
				onClick={() => window.open(connector.installUrl, '_blank')!.focus()}
				walletIcon={icon}
				labelText="Install"
			/>
		}

		return <ConnectButton
            loading={cnnName === loading.cnnName}
            disabled={loading.inProcess}
			walletName={walletName}
			onClick={() => connectAndClose(chainId, cnnName)}
			walletIcon={icon}
			labelText="Connect"
		/>

	}

    const justify = isMobile ? undefined : 'space-between'

    const span = isMobile ? 24 : 12

    const connectChainId = expectedChainId || supportedChains[0].chainId
    const content = <>
        {
            !isChainEmpty(chain) && <>
                <div className={styles.description}>
                    <Alert account={account} chain={chain} supportedChains={supportedChains} expectedChainId={expectedChainId} />
                </div>
                <Row gutter={btnGutter} className={styles.chain_buttons} justify={justify}>
                    {supportedChains.map(x => renderChainBtn(x))}
                </Row>
            </>
        }
        <div className={styles.description}>
            <Bold>Connect your Wallet</Bold> and jump into the world of NFT's
        </div>
        <Row gutter={btnGutter} justify={justify}>
            { isWalletSupported(ConnectorNames.Injected) && <Col span={span}>{renderWalletBtn(connectChainId, "Metamask", ConnectorNames.Injected, MetamaskIcon)}</Col> }
            { isWalletSupported(ConnectorNames.FaceWallet) && <Col span={span}>{renderWalletBtn(connectChainId, "FaceWallet", ConnectorNames.FaceWallet, FaceWalletIcon)}</Col> }
            { isWalletSupported(ConnectorNames.WalletConnect) && <Col span={span}>{renderWalletBtn(connectChainId, "WalletConnect", ConnectorNames.WalletConnect, WalletConnectIcon)}</Col> }
        </Row>
    </>

    return {
        footer1,
        footer2,
        content,
        onCancel: _onCancel,
        loading: loading.inProcess
    }

}