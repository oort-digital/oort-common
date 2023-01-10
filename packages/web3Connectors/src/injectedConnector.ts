import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
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
  get canSwitchChain() { return !!window.ethereum.isMetaMask }

  async connect(chainId: number): Promise<boolean> {
    if(this._ethRequestAccounts) {
      this.logger.debug('InjectedConnector.enable already called')
      return await this._ethRequestAccounts
    }

    this.logger.debug('InjectedConnector.enable')
    this._ethRequestAccounts = this.prvEnable()
    const result = await this._ethRequestAccounts
    this._ethRequestAccounts = undefined

    const signer = await this.getSigner()
    const curChainId = await signer.getChainId()

    if(curChainId !== chainId) {
      await this.switchChain(chainId)
    }

    return result;
  }

  async switchChain(chainId: number): Promise<boolean> {
    const chainIdHex = `0x${chainId.toString(16)}`
    try {
        if(!this._chains[chainId]) {
            throw new Error(`Chain ${chainId} not supported`)
        }
        await window.ethereum.request({
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
    return !!window.ethereum
  }

  get installUrl(): string {
    return 'https://metamask.io/download'
  }

  constructor(logger: ILogger, chains: IChainInfo[]) {
      super(logger, ConnectorNames.Injected, chains);
      if(this.isInstalled) {
        this.initListeners(window.ethereum)
      }
  }

  private addEthereumChain = async (chainId: number, chainIdHex: string): Promise<boolean> => {
    try {
      const chain = this._chains[chainId]
      const blockExplorerUrls = chain.blockExplorer ? [chain.blockExplorer] : undefined
      await window.ethereum.request({
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

  protected getRawProvider(): Promise<any> {
    return Promise.resolve(window.ethereum)
  }

  private _ethRequestAccounts: Promise<boolean> | undefined = undefined

  private async prvEnable(): Promise<boolean> {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
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
    const response: string[] = await window.ethereum.request({ method: 'eth_accounts' })
    return response.length > 0
  }
}