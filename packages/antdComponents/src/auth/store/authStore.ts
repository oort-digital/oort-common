import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { ILogger } from "@oort-digital/logger";
import { IWeb3Store } from "@oort-digital/web3-connectors";
import { ISsoClient, SsoClient } from "./ssoClient";
import {
  ITokenStorage,
  TokenStorageType,
  getTokenStorage,
} from "./tokenStorage";
import { registerAuthInterceptors } from "../interceptors";
import { OortApiInterceptors } from "@oort-digital/oort-api-client";

export interface IAuthStore {
  auth(): Promise<void>;
  askAuth: boolean;
  isReady: boolean;
  token: string | null;
  clearToken: () => void;
}

interface IAuthStoreParams {
  web3Store: IWeb3Store;
  logger: ILogger;
  ssoServerBaseUrl: string;
  tokenStorageType: TokenStorageType;
  interceptors: OortApiInterceptors;
}

export class AuthStore implements IAuthStore {
  clearToken = () => {
    this._tokenStorage.clear(this._web3Store.account);
    this.token = null;
  };

  async auth(): Promise<void> {
    if (this._web3Store.account) {
      const nonceResponse = await this._ssoClient.getNonce(
        this._web3Store.account
      );
      const signature = await this.signMessage(nonceResponse.resultValue);
      if (signature) {
        const tokenResponse = await this._ssoClient.getToken({
          address: this._web3Store.account,
          signature: signature,
        });
        this._tokenStorage.setToken(
          this._web3Store.account,
          tokenResponse.resultValue.token
        );

        runInAction(() => {
          this.token = tokenResponse.resultValue.token;
        });
      }
    }
  }

  get askAuth(): boolean {
    this._logger.debug(
      `AuthStore. askAuth isConnectedToSupportedChain: ${this._web3Store.isConnectedToSupportedChain} token: ${this.token}`
    );
    return this._web3Store.isConnectedToSupportedChain && !this.token;
  }

  isReady: boolean = false;

  token: string | null;

  private static _store: AuthStore | undefined;
  public static createInstance(params: IAuthStoreParams): AuthStore {
    if (!AuthStore._store) {
      params.logger.debug("AuthStore. Create new instance");
      AuthStore._store = new AuthStore(params);
    }

    return AuthStore._store;
  }

  private constructor({
    ssoServerBaseUrl,
    tokenStorageType,
    web3Store,
    logger,
    interceptors,
  }: IAuthStoreParams) {
    this._ssoClient = new SsoClient({ baseUrl: ssoServerBaseUrl });
    this._tokenStorage = getTokenStorage(tokenStorageType);
    this._web3Store = web3Store;
    this.token = null;
    this._logger = logger;

    makeObservable(this, {
      auth: action,
      clearToken: action,
      askAuth: computed,
      token: observable,
      isReady: observable,
    });

    autorun(() => {
      logger.debug(
        `AuthStore. web3Store.isReady: ${this._web3Store.isReady} web3Store.account: ${this._web3Store.account}`
      );

      if (this._web3Store.account) {
        runInAction(
          () =>
            (this.token =
              this._tokenStorage.getToken(this._web3Store.account) ?? null)
        );
      }

      if (this._web3Store.isReady) {
        logger.debug("AuthStore.  RegisterAuthInterceptors");
        registerAuthInterceptors(interceptors, this, logger);

        runInAction(() => (this.isReady = true));
      }
    });
  }

  private signMessage = (message: string): Promise<string> => {
    const { signer } = this._web3Store;

    if (signer) {
      return signer.signMessage(message);
    }

    throw new Error(`web3Store is not connected`);
  };

  private readonly _ssoClient: ISsoClient;
  private readonly _tokenStorage: ITokenStorage;
  private readonly _web3Store: IWeb3Store;
  private readonly _logger: ILogger;
}
