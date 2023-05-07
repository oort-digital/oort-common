import React from "react"
import { ConnectModal } from "@oort-digital/ui"
import { showAuthModal } from "./showAuthModal";
import { useEffect, useState } from "react";
import { ISsoStore, } from "../store";
import { observer } from "mobx-react";
import { registerAuthInterceptors, TokenType, unRegisterAuthInterceptors } from "./interceptors";
import { ConnectorNames, IWeb3Store } from "@oort-digital/web3-connectors";
import { ILogger } from "@oort-digital/logger";

interface IProps {
    web3Store: IWeb3Store
    ssoStore: ISsoStore
    logger: ILogger
    supportedWallets: ConnectorNames[]
}

interface IResolveReject {
    resolve: (t: TokenType) => void
    reject: (reason: string) => void
}

const Impl = ({ web3Store, ssoStore, logger, supportedWallets }: IProps) => {
    
    const [ startAuthProcess, setStartAuthProcess ] = useState(false)
    const [ resolveReject, setResolveReject ] = useState<IResolveReject | null>(null)
    
    const { isReady } = web3Store

    const debug = (msg: string) => {
        logger.debug(`Auth. ${msg}`)
    }

    const getAuthToken = (isExpired: boolean): Promise<TokenType> => {

        if(isExpired) {
            ssoStore.clearToken()
        }

        if(ssoStore.isAuth) {
            debug('Start. isAuth == true. Return resolved promise immediately')
            //setAuthState(AuthState.Auth)
            return Promise.resolve(ssoStore.token)
        }

        const promise = new Promise<TokenType>((resolve, reject) => {
            setResolveReject({ resolve, reject })
        })

        /*
        if(web3Store.isConnectedToSupportedChain) {
            setAuthState(AuthState.NeedToken)
            return promise
        }

        setAuthState(AuthState.NeedWeb3Connect)*/
        setStartAuthProcess(true)
        return promise
    }

    const rejectAuth = (reason: string) => {
        if(resolveReject) {
            resolveReject.reject(reason)
            debug('promise rejected')
            setResolveReject(null)
        }
        setStartAuthProcess(false)
    }

    useEffect(() => {
        if(isReady) {
            const ids = registerAuthInterceptors(getAuthToken, ssoStore, logger)
            return () => unRegisterAuthInterceptors(ids)
        }
        return
    }, [isReady]); // eslint-disable-line react-hooks/exhaustive-deps

    if(!isReady || !startAuthProcess) {
        return null
    }

    if(ssoStore.isAuth) {
        debug('ssoStore.isAuth=true')
        if(resolveReject) {
            resolveReject.resolve(ssoStore.token)
            setResolveReject(null)
            debug('promise resolve')

            debug('User got new token. Page will be reloaded')
            document.location.reload()
        }
        return null
    }


    if(web3Store.isConnectedToSupportedChain) {
        debug('isConnectedToSupportedChain=true')
        showAuthModal(() => ssoStore.auth(), logger)
        return null
    }
    
    debug('isConnectedToSupportedChain=false')
    return <ConnectModal
        supportedWallets={supportedWallets}
        web3={web3Store}
        visible={!web3Store.isConnectedToSupportedChain}
        onClose={() => rejectAuth('User cancel authentication process')}/>
};


export const Auth = observer(Impl)