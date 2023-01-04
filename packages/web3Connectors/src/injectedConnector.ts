import { ILogger } from "@oort/logger";
import { BaseConnector, IChainInfo } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";

declare global {
    interface Window {
        ethereum: any;
    }
}

export class InjectedConnector
    extends BaseConnector
    implements IConnector
{
  protected getRawProvider(): Promise<any> {
    return Promise.resolve(window.ethereum)
  }
  private _ethRequestAccounts: Promise<boolean> | undefined = undefined

    constructor(logger: ILogger, chains: IChainInfo[]) {
        super(logger, ConnectorNames.Injected, chains);
        if(this.isInstalled) {
          this.initListeners(window.ethereum)
        }
    }

    get canSwitchChain() { return !!window.ethereum.isMetaMask }

    async switchChain(chainId: number): Promise<void> {
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
            if (switchError.code === 4902) {
              try {
                const chain = this._chains[chainId]
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: chainIdHex,
                    chainName: chain.name,
                    rpcUrls: [chain.rpcUrl],
                    nativeCurrency: chain.nativeCurrency,
                    blockExplorerUrls: [chain.blockExplorer]  }],
                });
              } catch (addError) {
                throw addError
              }
            }
            // handle other "switch" errors
          }
    }

    private async prvEnable(): Promise<boolean> {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
      }
      catch(error: any) {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          this.logger.warn('Please connect to MetaMask.');
        } else {
          this.logger.error(error);
        }
        return false
      }
      return true
    }

    async connect(_chainId: number): Promise<boolean> {
        if(this._ethRequestAccounts) {
          this.logger.debug('InjectedConnector.enable already called')
          return await this._ethRequestAccounts
        }

        this.logger.debug('InjectedConnector.enable')
        this._ethRequestAccounts = this.prvEnable()
        const result = await this._ethRequestAccounts
        this._ethRequestAccounts = undefined
        return result;
    }

    private async isConnectedAsync(): Promise<boolean> {
      const response: string[] = await window.ethereum.request({ method: 'eth_accounts' })
      return response.length > 0
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
}
