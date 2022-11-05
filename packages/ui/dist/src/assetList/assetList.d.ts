import React from "react";
interface IProps<TItem> {
    items: TItem[];
    itemRenderer: (item: TItem) => React.ReactElement;
    onLoadMore?: () => void;
    hasLoadMore: boolean;
    loading: boolean;
    className?: string;
}
export declare const AssetList: <TItem>({ hasLoadMore, itemRenderer, onLoadMore, items, loading, className }: IProps<TItem>) => JSX.Element;
export {};
//# sourceMappingURL=assetList.d.ts.map