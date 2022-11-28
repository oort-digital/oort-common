import { ReactNode } from 'react';
import { TooltipPlacement } from 'antd/es/tooltip';
export declare type RangeValue = number | undefined;
interface IProps {
    title: ReactNode;
    subTitle?: ReactNode;
    triggerBtnClassName?: string;
    popoverClassName?: string;
    popoverTitleClassName?: string;
    applyButtonClassName?: string;
    cancelButtonClassName?: string;
    isClear?: boolean;
    onClear?: () => void;
    open?: boolean;
    showTriggerButton?: boolean;
    popoverTitle: string;
    children: ReactNode;
    onSubmit: () => void;
    submitDisabled?: boolean;
    onVisibleChange?: (isVisible: boolean) => void;
    onBottomSpaceHeightChange?: (heigth: number) => void;
    triggerElement?: JSX.Element;
    placement?: TooltipPlacement;
}
export declare const PopoverFilter: ({ title, subTitle, triggerBtnClassName, popoverTitle, popoverClassName, popoverTitleClassName, applyButtonClassName, cancelButtonClassName, isClear, onClear, children, onSubmit, onVisibleChange, submitDisabled, onBottomSpaceHeightChange, open, showTriggerButton, triggerElement, placement }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=popoverFilter.d.ts.map