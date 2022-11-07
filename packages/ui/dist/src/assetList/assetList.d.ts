import React from "react";
import { ListGridType } from "antd/lib/list";
import { IScreenBrakepoints } from "../effects";
interface IProps<TItem> {
    items: TItem[];
    itemRenderer: (item: TItem) => React.ReactElement;
    onLoadMore?: () => void;
    hasLoadMore: boolean;
    loading: boolean;
    className?: string;
}
export interface IAssetListGrid {
    xs: ListGridType;
    sm: ListGridType;
    md: ListGridType;
    lg: ListGridType;
    xl: ListGridType;
    xxl: ListGridType;
}
export declare const AssetListGrid: IAssetListGrid;
export declare const AssetListBrakepoints: IScreenBrakepoints;
export declare const AssetList: <TItem>({ hasLoadMore, itemRenderer, onLoadMore, items, loading, className }: IProps<TItem>) => JSX.Element;
export {};
//# sourceMappingURL=assetList.d.ts.map