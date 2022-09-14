
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