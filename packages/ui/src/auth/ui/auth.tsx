import {ReactNode, useState} from 'react';
import {Button} from 'antd';
import styles from "./auth.module.less"
import { PageLoader } from '../../pageLoader';
import { observer } from 'mobx-react';
import { WalletSvg } from './walletSvg';
import { WalletIcon } from '../../icons';
import { ConnectModal } from '../../connectModal';
import { IWeb3Store, isChainEmpty } from '@oort-digital/web3-connectors';
import { getChainName } from '../../utils';
import { ConnectorNames } from '@oort-digital/web3-connectors';
import { SsoStore, TokenStorageType } from '../store';
import { ILogger } from '@oort-digital/logger';


export interface IAuthProps {
    supportedWallets: ConnectorNames[]
    web3Store: IWeb3Store
    expectedChainId?: number
    logger: ILogger
    ssoServerBaseUrl: string
    tokenStorageType: TokenStorageType
    children: ReactNode
}

const renderText = ({ web3Store, expectedChainId }: IAuthProps) => {

    const { chain, supportedChains } = web3Store;

    if(isChainEmpty(chain)) {

        if(expectedChainId) {
            return <div className={styles.wrong_chain_text}>Please connect to {getChainName(expectedChainId)} network.</div>
        }

        return null
    }

    if(expectedChainId) {
        return <div className={styles.wrong_chain_text}>
            <div>{`You connected to ${chain!.name}.`}</div>
            <div>Please connect to {getChainName(expectedChainId)} network.</div>
        </div>
    }

    if(!supportedChains.some(x => x.chainId === chain!.chainId)) {
        return <div className={styles.wrong_chain_text}>
            <div>{`You connected to ${chain!.name}.`}</div>
            <div>Please connect to the appropriate network.</div>
            {supportedChains.map(x => x.name).join(', ')}
        </div>
    }

    return null
}

const Impl = (props: IAuthProps) => {

    const { web3Store, expectedChainId, supportedWallets, logger, ssoServerBaseUrl, tokenStorageType } = props
    const [isWalletVisible, setIsWalletVisible] = useState(false)
    const [ssoStore] = useState(() => new SsoStore({
        logger, web3Store, ssoServerBaseUrl, tokenStorageType
    }))

    const isReady = web3Store.isReady && ssoStore.isReady

    const onCancel = () => setIsWalletVisible(false)
    
    if(!isReady) {
        return <PageLoader />
    }

    return <div className={styles.wrapper}>
        <WalletSvg />
        {renderText(props)}
        <Button className={styles.connect_btn} size='large' type="primary" onClick={() => setIsWalletVisible(true)}>
            Connect your WEB 3.0 wallet <WalletIcon />
        </Button>
        <div className={styles.label_text}>To enter the world of Oort Digital</div>
        <ConnectModal supportedWallets={supportedWallets} expectedChainId={expectedChainId} web3={web3Store} visible={isWalletVisible} onCancel={onCancel} />
    </div>
}

export const Auth = observer(Impl)
