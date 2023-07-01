import {CSSProperties, ReactNode, useEffect, useState} from 'react';
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
import { AuthStore, TokenStorageType } from '../store';
import { ILogger } from '@oort-digital/logger';
import { registerAuthInterceptors, unRegisterAuthInterceptors } from '../interceptors';
import { AuthModal } from './authModal';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { OortApiInterceptors } from '@oort-digital/oort-api-client';
import { PathType, isExcludedPath } from './isExcludedPath';


export interface IAuthProps {
    className?: string
    style?: CSSProperties | undefined;
    supportedWallets: ConnectorNames[]
    web3Store: IWeb3Store
    expectedChainId?: number
    logger: ILogger
    ssoServerBaseUrl: string
    tokenStorageType?: TokenStorageType
    children: ReactNode
    excludePathes?: PathType[],
    interceptors: OortApiInterceptors
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

    const { className, style, excludePathes,
        web3Store, expectedChainId, supportedWallets,
        logger, ssoServerBaseUrl, tokenStorageType = 'cookies',
        children, interceptors } = props

    const [isWalletVisible, setIsWalletVisible] = useState(false)
    const [authInProcess, setAuthInProcess] = useState(false)

    const [renderChildren, setRenderChildren] = useState(false)

    const [authStore] = useState(() => new AuthStore({
        logger, web3Store, ssoServerBaseUrl, tokenStorageType
    }))

    const location = useLocation()
    const notNeedAuth = excludePathes && isExcludedPath(location.pathname, excludePathes)

    const debug = (msg: string) => {
        logger.debug(`Auth. ${msg}`)
    }

    useEffect(() => {
        debug(`useEffect. authStore.isReady:${authStore.isReady}`)

        if(notNeedAuth) {
            debug(`useEffect. notNeedAuth`)
            return
        }
        if(authStore.isReady) {
            debug('registerAuthInterceptors')
            const ids = registerAuthInterceptors(interceptors, authStore, logger)
            debug('registerAuthInterceptors done')
            setRenderChildren(true)
            return () => {
                debug(`useEffect. authStore.isReady:${authStore.isReady} unmount`)
                unRegisterAuthInterceptors(interceptors, ids)
            }
        }
        return
    }, [authStore.isReady]); // eslint-disable-line react-hooks/exhaustive-deps

    if(notNeedAuth) {
        return <>{children}</>
    }

    const onClose = () => setIsWalletVisible(false)

    const auth = async () => {
        try {
            setAuthInProcess(true)
            await authStore.auth()
        } catch (e) {
            logger.error(e);
        }
        setAuthInProcess(false)
    }

    debug(`renderChildren: ${renderChildren}`)

    const { isConnectedToSupportedChain } = web3Store

    const { askAuth } = authStore
    
    const loaderStyle: CSSProperties = { textAlign: "center", marginTop: "150px", width: '100%' }
    if(!authStore.isReady) {
        return <PageLoader delay={100} visible style={loaderStyle} />
    }

    if(askAuth || !isConnectedToSupportedChain) {
        return <div style={style} className={classnames(styles.wrapper, className)}>
            <WalletSvg />
            {renderText(props)}
            <Button className={styles.connect_btn} size='large' type="primary" onClick={() => setIsWalletVisible(true)}>
                Connect your WEB 3.0 wallet <WalletIcon />
            </Button>
            <div className={styles.label_text}>To enter the world of Oort Digital</div>
            <ConnectModal supportedWallets={supportedWallets} expectedChainId={expectedChainId} web3={web3Store} visible={isWalletVisible} onClose={onClose} />
            <AuthModal loading={authInProcess} authFunc={() => auth()} visible={askAuth} />
        </div>
    }

    if(renderChildren) {
        // return <PageLoader delay={100} visible style={loaderStyle} />
        return <>{children}</>
    }

    return <></>
}

export const Auth = observer(Impl)
