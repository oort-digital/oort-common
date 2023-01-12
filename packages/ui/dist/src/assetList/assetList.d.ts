import React from "react";
import { ListGridType } from "antd/lib/list";
import { IScreenBrakepoints } from "../effects";
export interface IAssetListProps<TItem> {
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
export declare const AssetList: <TItem>({ hasLoadMore, itemRenderer, onLoadMore, items, loading, className }: IAssetListProps<TItem>) => JSX.Element;
//# sourceMappingURL=assetList.d.ts.map