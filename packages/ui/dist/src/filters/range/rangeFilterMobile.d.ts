/// <reference types="react" />
import { IMobileFilterItemProps } from '../layout/filterLayoutMobile';
import { RangeValue } from './rangeFilterContent';
interface IProps extends IMobileFilterItemProps {
    values: [RangeValue, RangeValue];
    min?: number;
    max?: number;
    onChange: (values: [RangeValue, RangeValue]) => void;
}
export declare const RangeFilterMobile: ({ onChange, values, min, max }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=rangeFilterMobile.d.ts.map