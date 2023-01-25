import { ILogger } from "@oort-digital/logger";
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
const removeCurConnectorName = () => localStorage.removeItem(lsKey);


export class ConnectorProvider
{
    private readonly _logger: ILogger
    public readonly connectorsByName: { [name: string]: IConnector } = {}
    private _curConnector: IConnector | undefined
    public readonly WaitInitialisationAsync : Promise<void>

    private async InitAsync(connectors: IConnector[], curConnectorData: ICurConnector | undefined): Promise<void> {
        let curConnector: IConnector | undefined = undefined
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
                this._curConnector = curConnector
                this._logger.debug(`Current connector is ${this._curConnector.name}`)
            }
        }
    }

    constructor(logger: ILogger, connectors: IConnector[]) {
        this._logger = logger
        this.WaitInitialisationAsync = this.InitAsync(connectors, readCurConnectorData());
    }

    public get CurConnector(): IConnector | undefined {
        return this._curConnector;
    }

    async connect(chainId: number, connectorName: ConnectorNames): Promise<void> {
        await this.WaitInitialisationAsync
        const curConnector = this.connectorsByName[connectorName]
        if(await curConnector.connect(chainId)) {
            saveCurConnectorData({ chainId, name: connectorName})
            this._curConnector = curConnector
        }
    }

    async disconnect(): Promise<void> {
        await this._curConnector?.disconnect()
        removeCurConnectorName()
        this._curConnector = undefined
    }
}