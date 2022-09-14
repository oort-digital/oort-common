
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


export function getThemeSource(sourceType: ThemeSourceType): IThemeSource {

  if(sourceType === "cookies") {

  }

  return new LocalStorageSource()
}