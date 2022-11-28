/// <reference types="react" />
import { TooltipPlacement } from 'antd/es/tooltip';
export declare type RangeValue = number | undefined;
export interface IRangeFilterProps {
    title: string;
    popoverTitle: string;
    values: [RangeValue, RangeValue];
    min?: number;
    max?: number;
    visible?: boolean;
    showTriggerButton?: boolean;
    showClose?: boolean;
    showCancel?: boolean;
    showClear?: boolean;
    onChange: (values: [RangeValue, RangeValue]) => void;
    onVisibleChange?: (isVisible: boolean) => void;
    placement?: TooltipPlacement;
}
export declare const RangeFilter: ({ placement, title, popoverTitle, onChange, values, min, max, visible: visible, showTriggerButton, showCancel, showClear, showClose, onVisibleChange }: IRangeFilterProps) => JSX.Element;
//# sourceMappingURL=rangeFilter.d.ts.map