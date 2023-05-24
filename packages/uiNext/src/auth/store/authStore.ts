import {action, autorun, computed, makeObservable, observable, runInAction} from 'mobx'

import { ILogger } from '@oort-digital/logger'
import { IWeb3Store } from '@oort-digital/web3-connectors';
import { ISsoClient, SsoClient } from './ssoClient';
import { ITokenStorage, TokenStorageType, getTokenStorage } from './tokenStorage';

export interface IAuthStore {
    auth(): Promise<void>
    askAuth: boolean
    isReady: boolean
    token: string | null
    clearToken: () => void
}

interface IAuthStoreParams {
    web3Store: IWeb3Store
    logger: ILogger
    ssoServerBaseUrl: string
    tokenStorageType: TokenStorageType
}

export class AuthStore implements IAuthStore {
  
    clearToken = () => {
        this._tokenStorage.clear(this._web3Store.account)
        this.token = null
    }

    async auth(): Promise<void> {
        if (this._web3Store.account) {
            const nonceResponse = await this._ssoClient.getNonce(this._web3Store.account);
            const signature = await this.signMessage(nonceResponse.resultValue);
            if(signature){
                const tokenResponse = await this._ssoClient.getToken({address: this._web3Store.account, signature: signature});
                this._tokenStorage.setToken(this._web3Store.account, tokenResponse.resultValue.token)

                runInAction(() => {
                    this.token = tokenResponse.resultValue.token
                })
            }
        }
    }

    get askAuth(): boolean {
        return this._web3Store.isConnectedToSupportedChain && !this.token
    }

    isReady: boolean = false

    token: string | null

    constructor({ssoServerBaseUrl, tokenStorageType, web3Store, logger}: IAuthStoreParams) {

        this._ssoClient = new SsoClient({ baseUrl: ssoServerBaseUrl })
        this._tokenStorage = getTokenStorage(tokenStorageType)
        this._web3Store = web3Store
        this.token = null

        makeObservable(this, {
            auth: action,
            clearToken: action,
            askAuth: computed,
            token: observable,
            isReady: observable
        });

        autorun(() => {
            logger.debug(`SsoStore. web3Store.isReady: ${this._web3Store.isReady} web3Store.account: ${this._web3Store.account}`)

            if(this._web3Store.account) {
                runInAction(() => this.token = this._tokenStorage.getToken(this._web3Store.account) ?? null)
            }

            if(this._web3Store.isReady) {
                runInAction(() => this.isReady = true)
            }
        })
    }

    private signMessage = (message: string): Promise<string> => {

        const { signer } = this._web3Store

        if (signer) {
            return signer.signMessage(message);
        }
 
        throw new Error(`web3Store is not connected`)
    }

    private readonly _ssoClient: ISsoClient
    private readonly _tokenStorage: ITokenStorage
    private readonly _web3Store: IWeb3Store

}


