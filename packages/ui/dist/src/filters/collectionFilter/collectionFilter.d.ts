/// <reference types="react" />
import { ICommonProps } from "./typesAndInterfaces";
import { TooltipPlacement } from "antd/es/tooltip";
export interface ICollectionFilterProps extends ICommonProps {
    popoverTitle: string;
    visible?: boolean;
    showTriggerButton?: boolean;
    showClose?: boolean;
    showCancel?: boolean;
    showClear?: boolean;
    onVisibleChange?: (isVisible: boolean) => void;
    placement?: TooltipPlacement;
}
export declare const CollectionFilter: ({ title, popoverTitle, onChange, searchable, searchPlaceholder, filterStore, circleIcons, noClear, visible, showTriggerButton, showClose, onVisibleChange, showCancel, showClear, placement }: ICollectionFilterProps) => JSX.Element;
//# sourceMappingURL=collectionFilter.d.ts.map