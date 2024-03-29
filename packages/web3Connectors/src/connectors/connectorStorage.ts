import { ConnectorNames } from "./connectorNames";

const lsKey = 'cur_connector';

export interface ICurConnector {
    chainId: number
    name: ConnectorNames
}

class ConnectorStorage {
    read = () : ICurConnector | undefined => {
        // nextjs ssr
        if (typeof localStorage === "undefined") {
            return undefined
        }
        
        const jsonStr = localStorage.getItem(lsKey);

        if(!jsonStr) {
            return undefined
        }

        try {
            return JSON.parse(jsonStr)
        }
        catch { }

        return undefined
    }
    save = (curConnector: ICurConnector) => {
        // nextjs ssr
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(lsKey, JSON.stringify(curConnector));
        }
    }
    remove = () => {
        // nextjs ssr
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem(lsKey);
        }
    }
}

export const connectorStorage = new ConnectorStorage()