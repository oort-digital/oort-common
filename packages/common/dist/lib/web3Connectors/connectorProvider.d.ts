import { ILogger } from "../logger";
import { ConnectorNames } from "./connectorNames";
import { IConnector } from "./iConnector";
export declare class ConnectorProvider {
    private readonly _logger;
    readonly connectorsByName: {
        [name: string]: IConnector;
    };
    private _curConnector;
    readonly WaitInitialisationAsync: Promise<void>;
    private InitAsync;
    constructor(logger: ILogger, connectors: IConnector[]);
    get CurConnector(): IConnector | undefined;
    EnableAsync(connectorName: ConnectorNames): Promise<any>;
    disconnect(): Promise<void>;
}
