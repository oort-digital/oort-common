import { CSSProperties } from "react";
interface IProps {
    style?: CSSProperties | undefined;
    className?: string;
    title: string;
    value?: string;
    placeholder: string;
    onChange: (term: string) => void;
}
export declare const SearchInputMobile: ({ value, placeholder, onChange, style, className }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=searchInputMobile.d.ts.map