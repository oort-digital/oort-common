import { ReactElement, ReactNode } from "react";
export interface IMobileFilterItemProps {
    title: string;
}
interface IProps {
    activeFiltersCounter: number;
    sortBy?: ReactNode;
    children: ReactElement | ReactElement[];
    onApply: () => void;
    onClearAll: () => void;
    onCancel?: () => void;
}
export declare const FilterLayoutMobile: ({ children, sortBy, onApply, onClearAll, activeFiltersCounter, onCancel }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=filterLayoutMobile.d.ts.map