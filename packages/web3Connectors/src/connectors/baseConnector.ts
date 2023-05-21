import { providers, Signer } from "ethers";
import { ILogger } from "@oort-digital/logger";
import { ConnectorNames } from "./connectorNames";
import { IChainInfo } from "../internalTypesAndInterfaces";

type AccountChangedHandlerType = (accounts: Array<string>) => void
type ChainChangedHandlerType = (chainId: string) => void
type DisconnectHandlerType = (error: any) => void

export interface IChainMap {
    [chainId: number]: IChainInfo
}

export interface IExternalHandlers {
    accountChangedHandlers: AccountChangedHandlerType[]
    chainChangedHandlers: ChainChangedHandlerType[]
    disconnectHandlers: DisconnectHandlerType[]
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

    public onAccountsChanged(handler: AccountChangedHandlerType) {
        this._externalAccountChangedHandlers.push(handler)
    }

    public onChainChanged(handler: ChainChangedHandlerType): void {
        this._externalChainChangedHandlers.push(handler)
    }

    public onDisconnect(handler: (error: any) => void): void {
        this.runCheckConnection()
        this._externalDisconnectHandlers.push(handler);
    }

    public async disconnect(): Promise<void> {

        if(this._checkConnectionPromise) {
            await this._checkConnectionPromise
            this._checkConnectionPromise = null
        }

        this.clearExternalHandlers()
        return Promise.resolve()
    }

    constructor(logger: ILogger, name: ConnectorNames, chains: IChainInfo[]) {
        this.name = name
        this.logger = logger
        chains.forEach(x => this._chains[x.chainId] = x)
    }

    protected readonly _chains: IChainMap = {}
    protected readonly logger: ILogger
    protected abstract getRawProvider(): Promise<any>;

    private readonly _checkConnectionDelayMs : number = 500;
    private _timerId?: NodeJS.Timeout;
    private _checkConnectionPromise: Promise<void> | null = null

    protected runCheckConnection() {
        if(!this._timerId) {
            // run check connection cycle
            const self = this;
            this._checkConnectionPromise = new Promise<void>(resolve => {
                this._timerId = setInterval(() => self.CheckConnection(resolve), this._checkConnectionDelayMs)
            })
        }
    }

    protected clearExternalHandlers() {
        this._externalAccountChangedHandlers = []
        this._externalChainChangedHandlers = []
        this._externalDisconnectHandlers = []
    }
    
    private async CheckConnection(resolve: () => void): Promise<void> {
        if(!await this.isConnected)
        {
            //do disconnect
            if(this._timerId) {
                clearInterval(this._timerId)
                this._timerId = undefined
            }
            this.disconnectHandler(undefined)
            resolve()
            await this.disconnect()
            this.logger.debug(`${this.name}Connector. CheckConnection stopped`)
        }
    }

    private _externalAccountChangedHandlers: AccountChangedHandlerType[] = []
    protected accountsChangedHandler: AccountChangedHandlerType = (accounts: Array<string>) => {
        this.logger.debug(`${this.name}.accountsChangedHandler`)
        this._externalAccountChangedHandlers.forEach(h => h(accounts));
    }

    private _externalChainChangedHandlers: ChainChangedHandlerType[] = []
    protected chainChangedHandler: ChainChangedHandlerType =  (chainId: string) => {
        this.logger.debug(`${this.name}.chainChangedHandler`)
        this._externalChainChangedHandlers.forEach(h => h(chainId));
    }

    private _externalDisconnectHandlers: DisconnectHandlerType[] = []
    protected disconnectHandler: DisconnectHandlerType = (error: any) => {
        this.logger.debug(`${this.name}.disconnectHandler ${JSON.stringify(error)}`)
        this._externalDisconnectHandlers.forEach(h => h(error));
    }

    protected getExternalHandlers(): IExternalHandlers {
        return {
            accountChangedHandlers: this._externalAccountChangedHandlers,
            chainChangedHandlers: this._externalChainChangedHandlers,
            disconnectHandlers: this._externalDisconnectHandlers
        }
    }

    protected setExternalHandlers(handlers: IExternalHandlers) {
        this._externalAccountChangedHandlers = handlers.accountChangedHandlers
        this._externalChainChangedHandlers = handlers.chainChangedHandlers
        this._externalDisconnectHandlers = handlers.disconnectHandlers
    }
}