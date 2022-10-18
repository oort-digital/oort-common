import { getCookie, setCookie } from 'typescript-cookie'

const DARK_MODE = "dark-mode";
export type ThemeSourceType = 'localstorage' | 'cookies'

export interface IThemeSource {
  get isDarkMode(): boolean
  setDarkMode: (isDark: boolean) => void
}

class LocalStorageSource implements IThemeSource {
  get isDarkMode(): boolean {
    const json = localStorage.getItem(DARK_MODE)
    if(!json) {
      return false
    }
  
    return JSON.parse(json) || false;
  }
  setDarkMode = (isDark: boolean) => {
    localStorage.setItem(DARK_MODE, isDark.toString());
  }
}


class CookiesSource implements IThemeSource {
    get isDarkMode(): boolean {
      const json = getCookie(DARK_MODE)
      if(!json) {
        return false
      }
    
      return JSON.parse(json) || false;
    }
    setDarkMode = (isDark: boolean) => {
        const domain = this.getCookieDomain()
        const expires = new Date()
        expires.setFullYear(expires.getFullYear() + 10)
        setCookie(DARK_MODE, isDark, { 
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
}

let cookiesSource: CookiesSource | undefined
let localStorageSource: LocalStorageSource | undefined

export function getThemeSource(sourceType: ThemeSourceType): IThemeSource {

  if(sourceType === "cookies") {
    if(!cookiesSource) { cookiesSource = new CookiesSource() }
    return cookiesSource
  }

  if(!localStorageSource) { localStorageSource = new LocalStorageSource() }

  return localStorageSource
}