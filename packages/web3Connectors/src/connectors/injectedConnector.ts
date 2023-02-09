import { ILogger } from "@oort-digital/logger";
import { IChainInfo } from "../internalTypesAndInterfaces";
import { BaseConnector } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";

declare global {
    interface Window {
        ethereum: any;
    }
}

const ErrorCodes = {
  // User rejected the request (close metamask window or press reject button)
  UserReject: 4001,

  // This error code indicates that the chain has not been added to MetaMask.
  UnknownChain: 4902
}

export class InjectedConnector extends BaseConnector implements IConnector
{
  get canSwitchChain() { return !!this.rawProvider.isMetaMask }

  async connect(_chainId: number): Promise<boolean> {
    if(this._ethRequestAccounts) {
      this.logger.debug('InjectedConnector.enable already called')
      return await this._ethRequestAccounts
    }

    this.logger.debug('InjectedConnector.enable')
    this._ethRequestAccounts = this.prvEnable()
    const result = await this._ethRequestAccounts
    this._ethRequestAccounts = undefined

    // const signer = await this.getSigner()
    // const curChainId = await signer.getChainId()

    // if(chainId && curChainId !== chainId) {
    //   await this.switchChain(chainId)
    // }

    return result;
  }

  async switchChain(chainId: number): Promise<boolean> {
    const chainIdHex = `0x${chainId.toString(16)}`
    try {
        if(!this._chains[chainId]) {
            throw new Error(`Chain ${chainId} not supported`)
        }
        await this.rawProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainIdHex }],
        });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === ErrorCodes.UnknownChain) {
        return await this.addEthereumChain(chainId, chainIdHex)
      }
      else if (switchError.code === ErrorCodes.UserReject) {
        return false;
      }
      // handle other "switch" errors
      throw switchError
    }

    return true
  }

  get isConnected(): Promise<boolean> {
    return this.isConnectedAsync()
  }

  get isInstalled(): boolean {
    return !!this.rawProvider
  }

  get installUrl(): string {
    return 'https://metamask.io/download'
  }

  async disconnect(): Promise<void> {
    this.rawProvider.removeListener('accountsChanged', this.accountsChangedHandler);
    this.rawProvider.removeListener('chainChanged', this.chainChangedHandler);
    // this.rawProvider.removeListener("disconnect", this.disconnectHandler);
    await super.disconnect()
}

  constructor(logger: ILogger, chains: IChainInfo[]) {
      super(logger, ConnectorNames.Injected, chains);
      if(this.isInstalled) {
        this.initListeners(this.rawProvider)
      }
  }

  private initListeners(rawProvider: any) {

    this.logger.debug(`${this.name} initListeners`)

    const that = this
    rawProvider.on('accountsChanged', (accounts: Array<string>) => that.accountsChangedHandler.call(that, accounts));
    rawProvider.on('chainChanged', (chainId: string) => that.chainChangedHandler.call(that, chainId));
    // use custom connection check by timer. See onDisconnect
    // rawProvider.on("disconnect", this.disconnectHandler);
}

  private addEthereumChain = async (chainId: number, chainIdHex: string): Promise<boolean> => {
    try {
      const chain = this._chains[chainId]
      const blockExplorerUrls = chain.blockExplorer ? [chain.blockExplorer] : undefined
      await this.rawProvider.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: chainIdHex,
          chainName: chain.name,
          rpcUrls: [chain.rpcUrl],
          nativeCurrency: chain.nativeCurrency,
          blockExplorerUrls
        }]
      });
    } catch (addError: any) {
      if (addError.code === ErrorCodes.UserReject) {
        // User rejected the request (close metamask window or press reject button)
        return false;
      }

      throw addError
    }
    
    return true
  }

  //use this method to override window.ethereum in unit tests
  protected get rawProvider(): any {
    return window.ethereum
  }

  protected getRawProvider(): Promise<any> {
    return Promise.resolve(this.rawProvider)
  }

  private _ethRequestAccounts: Promise<boolean> | undefined = undefined

  private async prvEnable(): Promise<boolean> {
    try {
      await this.rawProvider.request({ method: 'eth_requestAccounts' })
    }
    catch(error: any) {
      if (error.code === ErrorCodes.UserReject) {
        // EIP-1193 userRejectedRequest error
        this.logger.warn('Please connect to MetaMask.');
      } else {
        this.logger.error(error);
      }
      return false
    }
    return true
  }

  private async isConnectedAsync(): Promise<boolean> {
    const response: string[] = await this.rawProvider.request({ method: 'eth_accounts' })
    return response.length > 0
  }
}