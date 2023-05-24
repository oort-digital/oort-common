import { Button } from "antd";
import { lazy, Suspense } from "react"
import { useTheme } from "../../effects"

const DarkTheme = lazy(() => import("../../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../../styles/theme/lightTheme"));

// use it on storybook page
export const ThemeLoader = () => {
    const [isDark, setDarkMode] = useTheme()



    const renderTheme = () => {

      let curName = 'Light'
      let setName = 'Dark'
      let themeElement = <LightTheme />

      if(isDark) {
        curName = 'Dark'
        setName = 'Light'
        themeElement = <DarkTheme />
      }

      const style = {
        marginRight: '10px'
      }

      return <>
          <span style={style}>Current: {curName}</span>
          <Button onClick={() => setDarkMode(!isDark)}>Set {setName}</Button>
          {themeElement}
        </>
    }

    return <>
      <Suspense fallback="loading..."> { renderTheme() } </Suspense>
    </>
}