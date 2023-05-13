import {action, autorun, computed, makeObservable, observable, runInAction} from 'mobx'

import { ILogger } from '@oort-digital/logger'
import { IWeb3Store } from '@oort-digital/web3-connectors';
import { ISsoClient, SsoClient } from './ssoClient';
import { ITokenStorage, TokenStorageType, getTokenStorage } from './tokenStorage';

export interface ISsoStore {
    auth(): Promise<void>;
    isAuth: boolean
    token: string | null
    clearToken: () => void
}

interface ISsoStoreParams {
    web3Store: IWeb3Store
    logger: ILogger
    ssoServerBaseUrl: string
    tokenStorageType: TokenStorageType
}

export class SsoStore implements ISsoStore {
  
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

    get isAuth(): boolean {
        return !!this.token
    }

    token: string | null

    constructor({ssoServerBaseUrl, tokenStorageType, web3Store, logger}: ISsoStoreParams) {

        this._ssoClient = new SsoClient({ baseUrl: ssoServerBaseUrl })
        this._tokenStorage = getTokenStorage(tokenStorageType)
        this._web3Store = web3Store
        this.token = null

        makeObservable(this, {
            auth: action,
            clearToken: action,
            isAuth: computed,
            token: observable,
        });

        autorun(() => {
            logger.debug(`SsoStore. web3Store.isReady: ${this._web3Store.isReady} web3Store.account: ${this._web3Store.account}`)
            if(this._web3Store.account) {
                runInAction(() => this.token = this._tokenStorage.getToken(this._web3Store.account) ?? null)
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


