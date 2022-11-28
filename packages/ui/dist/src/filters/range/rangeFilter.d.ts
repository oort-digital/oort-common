/// <reference types="react" />
export declare type RangeValue = number | undefined;
interface IProps {
    title: string;
    popoverTitle: string;
    values: [RangeValue, RangeValue];
    min?: number;
    max?: number;
    open?: boolean;
    showTriggerButton?: boolean;
    onChange: (values: [RangeValue, RangeValue]) => void;
    onVisibleChange?: (isVisible: boolean) => void;
}
export declare const RangeFilter: ({ title, popoverTitle, onChange, values, min, max, open, showTriggerButton, onVisibleChange }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=rangeFilter.d.ts.map