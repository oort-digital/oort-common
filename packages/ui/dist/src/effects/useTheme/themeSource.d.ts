export declare type ThemeSourceType = 'localstorage' | 'cookies';
export interface IThemeSource {
    get isDarkMode(): boolean;
    setDarkMode: (isDark: boolean) => void;
}
export declare function getThemeSource(sourceType: ThemeSourceType): IThemeSource;
//# sourceMappingURL=themeSource.d.ts.map