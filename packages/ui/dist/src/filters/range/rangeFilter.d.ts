/// <reference types="react" />
import { TooltipPlacement } from 'antd/es/tooltip';
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
    triggerElement?: JSX.Element;
    placement?: TooltipPlacement;
}
export declare const RangeFilter: ({ placement, title, popoverTitle, onChange, values, min, max, open, showTriggerButton, onVisibleChange, triggerElement }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=rangeFilter.d.ts.map