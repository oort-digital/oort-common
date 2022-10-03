import { useTheme } from "../../effects"
import DarkTheme from "../../styles/theme/darkTheme"
import LightTheme from "../../styles/theme/lightTheme"


// use it on storybook page
export const ThemeLoader = () => {
    const [isDark, setDarkMode] = useTheme()
    return <>
      Current: { isDark ? <>Dark <DarkTheme /> </> : <>Light <LightTheme /></> }

      <button onClick={() => setDarkMode(true)}>Dark</button>
      <button onClick={() => setDarkMode(false)}>Light</button>
    </>
}