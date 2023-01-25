import { providers, Signer } from "ethers";
import { ILogger } from "@oort-digital/logger";
import { ConnectorNames } from "./connectorNames";

type AccountChangedHandlerType = (accounts: Array<string>) => void
type ChainChangedHandlerType = (chainId: string) => void
type DisconnectHandlerType = (error: any) => void

export interface IChainInfo {
    name: string
    chainId: number
    rpcUrl: string
    blockExplorer?: string
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
}
export interface IChainMap {
    [chainId: number]: IChainInfo
  }

export abstract class BaseConnector {
    public readonly name: ConnectorNames;
    public abstract get isInstalled(): boolean
    public abstract get installUrl(): string
    public abstract get isConnected(): Promise<boolean>
    public abstract get canSwitchChain(): boolean
    public abstract connect(chainId: number): Promise<boolean>
    public abstract switchChain(chainId: number): Promise<boolean>

    public async getSigner(): Promise<Signer> {
        const provider = new providers.Web3Provider(await this.getRawProvider())
        return provider.getSigner()
    }

    public async disconnect(): Promise<void> {
        this.removeListeners(await this.getRawProvider())
    }

    public onAccountsChanged(handler: AccountChangedHandlerType) {
        this._externalAccountChangedHandlers.push(handler)
    }

    public onChainChanged(handler: ChainChangedHandlerType): void {
        this._externalChainChangedHandlers.push(handler)
    }

    public onDisconnect(handler: (error: any) => void): void {

        if(!this._timerId) {
            const self = this;
            this._timerId = setInterval(() => self.CheckConnection(), this._checkConnectionDelayMs)
        }
        
        this._externalDisconnectHandlers.push(handler);
    }

    constructor(logger: ILogger, name: ConnectorNames, chains: IChainInfo[]) {
        this.name = name
        this.logger = logger
        chains.forEach(x => this._chains[x.chainId] = x)
    }

    protected readonly _chains: IChainMap = {}
    protected disconnectHandler?: DisconnectHandlerType
    protected readonly logger: ILogger
    protected abstract getRawProvider(): Promise<any>;

    protected initListeners(rawProvider: any) {

        this.logger.debug('initListeners')
        const that = this
        this.accountsChangedHandler = (accounts: Array<string>) => {
            this.logger.debug(`${this.name}.accountsChangedHandler`)
            that._externalAccountChangedHandlers.forEach(h => h(accounts));
        }

        this.chainChangedHandler = (chainId: string) => {
            this.logger.debug(`${this.name}.chainChangedHandler`)
            that._externalChainChangedHandlers.forEach(h => h(chainId));
        }

        this.disconnectHandler = (error: any) => {
            this.logger.debug(`${this.name}.disconnectHandler ${JSON.stringify(error)}`)
            that._externalDisconnectHandlers.forEach(h => h(error));
        }

        rawProvider.on('accountsChanged', this.accountsChangedHandler);
        rawProvider.on('chainChanged', this.chainChangedHandler);
        // use custom connection check by timer. See onDisconnect
        // rawProvider.on("disconnect", this.disconnectHandler);
    }

    private readonly _checkConnectionDelayMs : number = 500;
    private _timerId?: NodeJS.Timeout;
    
    private async CheckConnection(): Promise<void> {
        if(!await this.isConnected)
        {
            if(this._timerId) {
                clearInterval(this._timerId)
                this.logger.debug(`${this.name}Connector. CheckConnection stopped`)
            }

            this._externalDisconnectHandlers.forEach(h => h(undefined));
            this._externalDisconnectHandlers = [];
        }
    }

    private _externalAccountChangedHandlers: AccountChangedHandlerType[] = []
    private accountsChangedHandler?: AccountChangedHandlerType

    private _externalChainChangedHandlers: ChainChangedHandlerType[] = []
    private chainChangedHandler?: ChainChangedHandlerType

    private _externalDisconnectHandlers: DisconnectHandlerType[] = []

    private removeListeners(rawProvider: any) {
        rawProvider.removeListener('accountsChanged', this.accountsChangedHandler);
        rawProvider.removeListener('chainChanged', this.chainChangedHandler);
        // this.rawProvider.removeListener("disconnect", this.disconnectHandler);
        this._externalAccountChangedHandlers = []
        this._externalChainChangedHandlers = []
        this._externalDisconnectHandlers = []
    }
    
}