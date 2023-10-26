import styles from './themeSwitch.module.css';
import { Switch } from 'antd';

interface IProps {
    isDarkMode: boolean
    onChange: (isDarkMode: boolean) => void
}

export const ThemeSwitch = ({ isDarkMode, onChange }: IProps) => {
    return <Switch
        className={styles.root}
        size="default"
        checked={isDarkMode}
        onChange={onChange} />
}