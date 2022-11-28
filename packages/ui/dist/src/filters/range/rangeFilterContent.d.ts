import { ReactNode } from 'react';
export declare type RangeValue = number | undefined;
interface IProps {
    values: [RangeValue, RangeValue];
    min?: number;
    max?: number;
    rangeIcon?: ReactNode;
    onMinValueChange: (value: RangeValue) => void;
    onMaxValueChange: (value: RangeValue) => void;
}
export declare const RangeFilterContent: ({ onMinValueChange, onMaxValueChange, values, min, max }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=rangeFilterContent.d.ts.map