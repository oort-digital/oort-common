import React, { CSSProperties } from "react";
interface IProps {
    size: 'sm' | 'md';
    src?: string;
    alt?: string;
    style?: CSSProperties;
    className?: string;
    onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    noText: boolean;
}
export declare const Img: ({ src, alt, style, className, onLoad, size, noText }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=img.d.ts.map