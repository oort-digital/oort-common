import { getCookie, removeCookie, setCookie } from "typescript-cookie";

export interface ITokenStorage {
    setToken: (address: string, token: string) => void
    getToken: (address: string) => string | undefined
    clear: (address: string) => void
}

export type TokenStorageType = 'cookies' | 'fake'

class CookieTokenStorage implements ITokenStorage {
    
    clear = (address: string) => {
        const domain = this.getCookieDomain()
        removeCookie(this.getKey(address), { 
            domain: domain,
            path: '/'
        })
    }

    getToken = (address: string): string | undefined => {
        return getCookie(this.getKey(address))
    }

    setToken = (address: string, token: string) => {
        const domain = this.getCookieDomain()
        const expires = new Date()
        expires.setFullYear(expires.getFullYear() + 10)
        setCookie(this.getKey(address), token, { 
            domain: domain,
            expires: expires,
            path: '/'
        })
    }
  
    private getCookieDomain = (): string | undefined => {
        const host = window.location.hostname;
        const arr = host.split('.')

        if(arr.length === 3) {
            return `${arr[1]}.${arr[2]}`
        }

        return undefined
    }

    private getKey = (account:string) => {
        return `oort_token_${account.toLowerCase()}`;
    }
}

class FakeStorage implements ITokenStorage {
    clear = (_address: string) => { }
    setToken = (_address: string, _token: string) => {

    }
    getToken = (address: string) => `fake_token_${address}`
}

let cookiesStorage: CookieTokenStorage | undefined
let fakeStorage: FakeStorage | undefined

export function getTokenStorage(storageType: TokenStorageType): ITokenStorage {

  if(storageType === "cookies") {
    if(!cookiesStorage) { cookiesStorage = new CookieTokenStorage() }
    return cookiesStorage
  }
  else if(storageType === "fake") {
    if(!fakeStorage) { fakeStorage = new FakeStorage() }
    return fakeStorage
  }

  throw new Error(`Unknown storage type: ${storageType}`)
}