import { ReactNode } from 'react';
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
    popoverTitle: string;
    children: ReactNode;
    onSubmit: () => void;
    submitDisabled?: boolean;
    onVisibleChange?: (isVisible: boolean) => void;
    onBottomSpaceHeightChange?: (heigth: number) => void;
}
export declare const PopoverFilter: ({ title, subTitle, triggerBtnClassName, popoverTitle, popoverClassName, popoverTitleClassName, applyButtonClassName, cancelButtonClassName, isClear, onClear, children, onSubmit, onVisibleChange, submitDisabled, onBottomSpaceHeightChange }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=popoverFilter.d.ts.map