import React from "react";
import { ListGridType } from "antd/lib/list";
import { SizeType } from "antd/lib/config-provider/SizeContext";
export interface IProps<TItem> {
    items: TItem[];
    itemRenderer: (item: TItem) => React.ReactElement;
    loadMoreButtonRendered?: (isLoading: boolean, onLoadMore: () => void) => React.ReactElement;
    loadMoreButtonSize?: SizeType;
    onLoadMore?: () => void;
    hasLoadMore: boolean;
    loading: boolean;
    grid?: ListGridType;
    className?: string;
    style?: React.CSSProperties;
    noDataText?: string;
}
export declare const AsyncList: <TItem>({ hasLoadMore, itemRenderer, loadMoreButtonRendered, onLoadMore, items, loading, grid, className, style, noDataText, loadMoreButtonSize }: IProps<TItem>) => JSX.Element;
//# sourceMappingURL=asyncList.d.ts.map