/// <reference types="react" />
import { TooltipPlacement } from 'antd/es/tooltip';
import { NumRange } from '../../typesAndInterfaces';
export interface IRangeFilterProps {
    title: string;
    popoverTitle: string;
    values: NumRange;
    min?: number;
    max?: number;
    visible?: boolean;
    showTriggerButton?: boolean;
    showClose?: boolean;
    showCancel?: boolean;
    showClear?: boolean;
    onChange: (values: NumRange) => void;
    onVisibleChange?: (isVisible: boolean) => void;
    placement?: TooltipPlacement;
}
export declare const RangeFilter: ({ placement, title, popoverTitle, onChange, values, min, max, visible: visible, showTriggerButton, showCancel, showClear, showClose, onVisibleChange }: IRangeFilterProps) => JSX.Element;
//# sourceMappingURL=rangeFilter.d.ts.map