import { CSSProperties } from "react";
import { ICommonProps } from "./typesAndInterfaces";
import { TooltipPlacement } from "antd/es/tooltip";
export interface ICollectionFilterProps extends ICommonProps {
    triggerBtnClassName?: string;
    popoverClassName?: string;
    popoverStyle?: CSSProperties | undefined;
    popoverTitle: string;
    visible?: boolean;
    showTriggerButton?: boolean;
    showClose?: boolean;
    showCancel?: boolean;
    showClear?: boolean;
    onVisibleChange?: (isVisible: boolean) => void;
    placement?: TooltipPlacement;
    calcOptimalListHeight?: boolean;
}
export declare const CollectionFilter: ({ title, popoverTitle, onChange, triggerBtnClassName, popoverClassName, popoverStyle, itemTitleMaxLen, calcOptimalListHeight, searchable, searchPlaceholder, filterStore, circleIcons, noClear, visible, showTriggerButton, showClose, onVisibleChange, showCancel, showClear, placement }: ICollectionFilterProps) => JSX.Element;
//# sourceMappingURL=collectionFilter.d.ts.map