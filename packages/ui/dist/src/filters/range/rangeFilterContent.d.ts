import { ReactNode } from 'react';
import { NumOrUndef, NumRange } from '../../typesAndInterfaces';
interface IProps {
    values: NumRange;
    min?: number;
    max?: number;
    rangeIcon?: ReactNode;
    onMinValueChange: (value: NumOrUndef) => void;
    onMaxValueChange: (value: NumOrUndef) => void;
}
export declare const RangeFilterContent: ({ onMinValueChange, onMaxValueChange, values, min, max }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=rangeFilterContent.d.ts.map