import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { ITokenStorage } from "./typesAndinterfaces";
    
export class CookieTokenStorage implements ITokenStorage {
    
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