import { getKey } from "./getKey"
import { ITokenStorage } from "./typesAndinterfaces"

export class LocalStorageTokenStorage implements ITokenStorage {
    clear = (address: string) => {
        const key = getKey(address)
        localStorage.removeItem(key)
    }
    
    setToken = (address: string, token: string) => {
        const key = getKey(address)
        localStorage.setItem(key, token)
    }

    getToken = (address: string): string | undefined => {

        const key = getKey(address)
        const itemStr: string | null = localStorage.getItem(key)

        if(!itemStr) {
            return undefined
        }

        return itemStr
    }
}