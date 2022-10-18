import { lazy, Suspense } from "react"
import { useTheme } from "../../effects"

const DarkTheme = lazy(() => import("../../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../../styles/theme/lightTheme"));

// use it on storybook page
export const ThemeLoader = () => {
    const [isDark, setDarkMode] = useTheme()

    const renderTheme = () => {
        if(isDark) {return <>Current: Dark <button onClick={() => setDarkMode(false)}>Set Light Theme</button> <DarkTheme /> </>}
        return <>Current: Light <button onClick={() => setDarkMode(true)}>Set Dark Theme</button> <LightTheme /> </>
    }

    return <>
      <Suspense fallback="loading..."> { renderTheme() } </Suspense>
    </>
}