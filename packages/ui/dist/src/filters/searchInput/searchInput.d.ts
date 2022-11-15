import { CSSProperties } from "react";
interface IProps {
    style?: CSSProperties | undefined;
    className?: string;
    value?: string;
    placeholder?: string;
    onChange: (term: string) => void;
}
export declare const SearchInput: ({ value, placeholder, onChange, style, className }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=searchInput.d.ts.map