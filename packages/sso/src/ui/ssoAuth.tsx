import { ReactNode } from "react"
import { NotConnected } from "@oort-digital/ui"
import { showAuthModal } from "./showAuthModal";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { registerAuthInterceptors, unRegisterAuthInterceptors } from "../interceptors";
import { ConnectorNames, IWeb3Store } from "@oort-digital/web3-connectors";
import { ILogger } from "@oort-digital/logger";
import { SsoStore, TokenStorageType } from "../store";

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
        logger.debug(`Auth. ${msg}`)
    }

    const [ssoStore] = useState(() => new SsoStore({
        logger, web3Store, ssoServerBaseUrl, tokenStorageType
    }))

    const { isReady, isConnectedToSupportedChain } = web3Store

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


    if(!ssoStore.isAuth) {
        debug('isConnectedToSupportedChain=true')
        showAuthModal(() => ssoStore.auth(), logger)
        return null
    }

    return children
};


export const SsoAuth = observer(Impl)