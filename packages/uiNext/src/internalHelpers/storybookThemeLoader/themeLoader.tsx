import { Button } from "antd";
import { useTheme } from "../../effects"
import dynamic from "next/dynamic"


const dynamicOptions = {
  loading: () => <>...loading</>
}
const DarkTheme = dynamic(() => import("../../styles/theme/darkTheme"), dynamicOptions);
const LightTheme = dynamic(() => import("../../styles/theme/lightTheme"), dynamicOptions);

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

    return renderTheme()
}