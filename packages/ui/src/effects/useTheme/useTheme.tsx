import { useEffect, useState } from "react";
import { getThemeSource, IThemeSource, ThemeSourceType } from "./themeSource";


type SetFuncType = (isDark: boolean) => void

export const useTheme = (sourceType: ThemeSourceType = 'cookies'): [boolean, SetFuncType] => {
  const themeSource: IThemeSource = getThemeSource(sourceType)
  const [darkMode, setDarkMode] = useState(themeSource.isDarkMode);

  useEffect(() => {
    const initialValue = themeSource.isDarkMode;
    if (initialValue !== darkMode) {
      themeSource.setDarkMode(darkMode)
      window.location.reload()
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};