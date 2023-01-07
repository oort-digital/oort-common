import { ILogger } from "@oort/logger";
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
    connect(chainId: number, connectorName: ConnectorNames): Promise<void>;
    disconnect(): Promise<void>;
}
//# sourceMappingURL=connectorProvider.d.ts.map