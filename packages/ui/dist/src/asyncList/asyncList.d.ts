import React from "react";
import { ListGridType } from "antd/lib/list";
interface IProps<TItem> {
    items: TItem[];
    itemRenderer: (item: TItem) => React.ReactElement;
    onLoadMore?: () => void;
    hasLoadMore: boolean;
    loading: boolean;
    grid?: ListGridType;
    className?: string;
    noDataText?: string;
}
export declare const AsyncList: <TItem>({ hasLoadMore, itemRenderer, onLoadMore, items, loading, grid, className, noDataText }: IProps<TItem>) => JSX.Element;
export {};
//# sourceMappingURL=asyncList.d.ts.map