export interface IScreenBrakepoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}
export declare const defaultScreenBrakepoints: IScreenBrakepoints;
export declare enum ScreenSize {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    xxl = "xxl"
}
export declare function useScreenSize(brakepoints?: IScreenBrakepoints): [number, ScreenSize];
