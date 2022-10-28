import { CSSProperties } from "react";
interface IProps {
    style?: CSSProperties | undefined;
    className?: string;
    value?: string;
    placeholder: string;
    onChange: (term: string) => void;
    onSubmit: () => void;
}
export declare const SearchInputSubmit: ({ value, placeholder, onChange, onSubmit, style, className }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=searchInputSubmit.d.ts.map