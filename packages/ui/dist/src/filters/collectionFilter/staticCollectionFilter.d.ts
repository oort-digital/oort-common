import { CSSProperties } from "react";
import { TooltipPlacement } from "antd/es/tooltip";
import { ICollectionFilterItem, ItemKeyType, SelectMode } from "./stores";
interface IProps {
    triggerBtnClassName?: string;
    popoverClassName?: string;
    popoverStyle?: CSSProperties | undefined;
    items: ICollectionFilterItem[];
    title: string;
    applied: ItemKeyType[];
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable?: boolean;
    searchPlaceholder?: string;
    circleIcons?: boolean;
    noClear?: boolean;
    popoverTitle: string;
    visible?: boolean;
    showTriggerButton?: boolean;
    showClose?: boolean;
    showCancel?: boolean;
    showClear?: boolean;
    onVisibleChange?: (isVisible: boolean) => void;
    placement?: TooltipPlacement;
    selectMode?: SelectMode;
    calcOptimalListHeight?: boolean;
}
export declare const StaticCollectionFilter: (props: IProps) => JSX.Element | null;
export {};
//# sourceMappingURL=staticCollectionFilter.d.ts.map