import {useState} from 'react';
import {Button} from 'antd';
import styles from "./notConnected.module.less"
import { PageLoader } from '../pageLoader';
import { observer } from 'mobx-react';
import { WalletSvg } from './walletSvg';
import { WalletIcon } from '../icons';
import { ConnectModal, IWeb3 } from '../connectModal';
import { isChainEmpty } from '@oort-digital/web3-connectors';
import { getChainName } from '../utils';
import { ConnectorNames } from '@oort-digital/web3-connectors';

interface IWeb3Store extends IWeb3 {
    isReady: boolean
}

interface IProps {
    supportedWallets: ConnectorNames[]
    web3Store: IWeb3Store
    expectedChainId?: number
}

const renderText = ({ web3Store, expectedChainId }: IProps) => {

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

const Impl = (props: IProps) => {

    const { web3Store, expectedChainId, supportedWallets } = props
    const [isWalletVisible, setIsWalletVisible] = useState(false)

    const onCancel = () => setIsWalletVisible(false)
    
    if(!web3Store.isReady) {
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

export const NotConnected = observer(Impl)
