import { ConnectorNames } from "./connectorNames";

const lsKey = 'cur_connector';

export interface ICurConnector {
    chainId: number
    name: ConnectorNames
}

class ConnectorStorage {
    read = () : ICurConnector | undefined => {
        const jsonStr = localStorage.getItem(lsKey);
        return jsonStr ? JSON.parse(jsonStr) : undefined;
    }
    save = (curConnector: ICurConnector) => localStorage.setItem(lsKey, JSON.stringify(curConnector));
    remove = () => localStorage.removeItem(lsKey);
}

export const connectorStorage = new ConnectorStorage()