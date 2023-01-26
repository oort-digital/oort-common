import { ILogger } from "@oort-digital/logger";
import { BaseConnector } from "./baseConnector";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";

const lsKey = 'cur_connector';

interface ICurConnector {
    chainId: number
    name: ConnectorNames
}

const readCurConnectorData = () : ICurConnector | undefined => {
    const jsonStr = localStorage.getItem(lsKey);
    return jsonStr ? JSON.parse(jsonStr) : undefined;
}

const saveCurConnectorData = (curConnector: ICurConnector) => localStorage.setItem(lsKey, JSON.stringify(curConnector));
const removeCurConnectorData = () => localStorage.removeItem(lsKey);


export class ConnectorProvider {
   
    public readonly connectorsByName: { [name: string]: BaseConnector} = {}
    public readonly WaitInitialisationAsync : Promise<void>

    async connect(chainId: number, connectorName: ConnectorNames): Promise<boolean> {
        await this.WaitInitialisationAsync
        const curConnector = this.connectorsByName[connectorName]
        if(await curConnector.connect(chainId)) {
            saveCurConnectorData({ chainId, name: connectorName})
            this.setCurConnector(curConnector)
            return true
        }
        return false
    }

    async switchChain(chainId: number): Promise<boolean> {
        await this.WaitInitialisationAsync
        if(this._curConnector) {
            if(await this._curConnector.switchChain(chainId)) {
                saveCurConnectorData({ chainId, name: this._curConnector.name})
            }
        }
        return false
    }

    get canSwitchChain(): boolean {
        return !!this._curConnector?.canSwitchChain
    }

    async disconnect(): Promise<void> {
        await this._curConnector?.disconnect()
        removeCurConnectorData()
        this._curConnector = undefined
    }

    public get CurConnector(): IConnector | undefined {
        return this._curConnector;
    }

    constructor(logger: ILogger, connectors: BaseConnector[]) {
        this._logger = logger
        this.WaitInitialisationAsync = this.InitAsync(connectors, readCurConnectorData());
    }

    private readonly _logger: ILogger
    private _curConnector: BaseConnector | undefined

    private onChainChanged(chainId: string) {
        saveCurConnectorData({ chainId: parseInt(chainId), name: this._curConnector!.name})
    }

    private setCurConnector(curConnector: BaseConnector) {
        this._curConnector = curConnector
        this._curConnector.onChainChanged(this.onChainChanged)
    }

    private async InitAsync(connectors: BaseConnector[], curConnectorData: ICurConnector | undefined): Promise<void> {
        let curConnector: BaseConnector | undefined = undefined
        for(let i = 0; i < connectors.length; i++) {
            const c = connectors[i]
            this.connectorsByName[c.name] = c
            if(c.name === curConnectorData?.name) {
                if(await c.isConnected) {
                    curConnector = c
                }
            }
        }

        if(curConnector) {
            if(await curConnector.connect(curConnectorData!.chainId)) {
                this.setCurConnector(curConnector)
                this._logger.debug(`Current connector is ${this._curConnector!.name}`)
            }
        }
    }
}