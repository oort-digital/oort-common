/// <reference types="react" />
interface IProps {
    isDarkMode: boolean;
    onChange: (isDarkMode: boolean) => void;
}
export declare const ThemeSwitch: ({ isDarkMode, onChange }: IProps) => JSX.Element;
export {};
