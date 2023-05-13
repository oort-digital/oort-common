import { ReactNode } from "react"
import { NotConnected } from "@oort-digital/ui"
import { showAuthModal } from "./showAuthModal";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { registerAuthInterceptors, unRegisterAuthInterceptors } from "../interceptors";
import { ConnectorNames, IWeb3Store } from "@oort-digital/web3-connectors";
import { ILogger } from "@oort-digital/logger";
import { SsoStore, TokenStorageType } from "../store";
import { AuthModal } from "./authModal";

export interface IAuthProps {
    web3Store: IWeb3Store
    logger: ILogger
    supportedWallets: ConnectorNames[]
    ssoServerBaseUrl: string
    tokenStorageType: TokenStorageType
    children: ReactNode
}

const Impl = ({ web3Store, logger, supportedWallets, ssoServerBaseUrl, tokenStorageType, children }: IAuthProps) => {
    
    const debug = (msg: string) => {
        logger.debug(`SsoAuth. ${msg}`)
    }

    const [ssoStore] = useState(() => new SsoStore({
        logger, web3Store, ssoServerBaseUrl, tokenStorageType
    }))

    const { isConnectedToSupportedChain } = web3Store
    const { isAuth } = ssoStore
    const isReady = web3Store.isReady && ssoStore.isReady

    debug(`isReady:${isReady} isConnectedToSupportedChain:${isConnectedToSupportedChain} isAuth:${isAuth}`)

    const auth = async () => {
        try {
            await ssoStore.auth()
        } catch (e) {
            logger.error(e);
        }
    }

    useEffect(() => {
        if(isReady) {
            const ids = registerAuthInterceptors(ssoStore, logger)
            return () => unRegisterAuthInterceptors(ids)
        }
        return
    }, [isReady]); // eslint-disable-line react-hooks/exhaustive-deps

    if(!isReady) {
        return null
    }

    if (!isConnectedToSupportedChain) {
        return <NotConnected
            supportedWallets={supportedWallets}
            web3Store={web3Store}
          />
    }

    if(!isAuth) {
        return <AuthModal authFunc={() => auth()} />
    }

    return <>{children}</>
};


export const SsoAuth = observer(Impl)