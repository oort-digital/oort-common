/// <reference types="react" />
import { NumRange } from '../../typesAndInterfaces';
import { IMobileFilterItemProps } from '../layout/filterLayoutMobile';
interface IProps extends IMobileFilterItemProps {
    values: NumRange;
    min?: number;
    max?: number;
    onChange: (values: NumRange) => void;
}
export declare const RangeFilterMobile: ({ onChange, values, min, max }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=rangeFilterMobile.d.ts.map