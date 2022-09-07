import { ILogger } from "../logger";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";

const lsKey = 'cur_connector';

const getCurConnectorName = () : ConnectorNames | undefined => {
    const curCnnNameStr = localStorage.getItem(lsKey);
    return curCnnNameStr ? curCnnNameStr as ConnectorNames : undefined;
}

const setCurConnectorName = (connectorName: ConnectorNames) => localStorage.setItem(lsKey, connectorName);
const removeCurConnectorName = () => localStorage.removeItem(lsKey);


export class ConnectorProvider
{
    private readonly _logger: ILogger
    public readonly connectorsByName: { [name: string]: IConnector } = {}
    private _curConnector: IConnector | undefined
    public readonly WaitInitialisationAsync : Promise<void>

    private async InitAsync(connectors: IConnector[], curConnectorName?: ConnectorNames): Promise<void> {
        let curConnector: IConnector | undefined = undefined
        for(let i = 0; i < connectors.length; i++) {
            const c = connectors[i]
            this.connectorsByName[c.name] = c
            if(c.name === curConnectorName) {
                if(await c.isConnected) {
                    curConnector = c
                }
            }
        }

        if(curConnector) {
            if(await curConnector.enable()) {
                this._curConnector = curConnector
                this._logger.debug(`Current connector is ${this._curConnector.name}`)
            }
        }
    }

    constructor(logger: ILogger, connectors: IConnector[]) {
        this._logger = logger
        this.WaitInitialisationAsync = this.InitAsync(connectors, getCurConnectorName());
    }

    public get CurConnector(): IConnector | undefined {
        return this._curConnector;
    }

    async EnableAsync(connectorName: ConnectorNames): Promise<any> {
        await this.WaitInitialisationAsync
        const curConnector = this.connectorsByName[connectorName]
        if(await curConnector.enable()) {
            setCurConnectorName(connectorName)
            this._curConnector = curConnector
        }
    }

    async disconnect(): Promise<void> {
        await this._curConnector?.disconnect()
        removeCurConnectorName()
        this._curConnector = undefined
    }
}