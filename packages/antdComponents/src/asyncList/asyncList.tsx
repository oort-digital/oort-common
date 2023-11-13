import React, { ReactNode } from "react";
import { Button, List, ConfigProvider } from "antd";
import { ListGridType } from "antd/lib/list";
import styles from "./asyncList.module.scss";
import { ArrowDownIcon, NoDataIcon } from "../icons";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import classNames from "classnames";

export interface IProps<TItem> {
  items: TItem[];
  itemRenderer: (item: TItem) => React.ReactElement;
  loadMoreButtonRendered?: (
    isLoading: boolean,
    onLoadMore: () => void
  ) => React.ReactElement;
  loadMoreButtonSize?: SizeType;
  onLoadMore?: () => void;
  hasLoadMore: boolean;
  loading: boolean;
  grid?: ListGridType;
  className?: string;
  style?: React.CSSProperties;
  noDataText?: string;
  noDataHint?: ReactNode;
}

export const AsyncList = <TItem,>({
  hasLoadMore,
  itemRenderer,
  loadMoreButtonRendered,
  onLoadMore,
  items,
  loading,
  grid,
  className,
  style,
  noDataHint,
  noDataText,
  loadMoreButtonSize = "large",
}: IProps<TItem>) => {
  const loadFirstPage = loading && items.length === 0;
  const renderLoadMoreBtn = () => {
    if (!onLoadMore || !hasLoadMore || !items.length) {
      return null;
    }
    return (
      <div className={styles.load_more_btn_container}>
        {loadMoreButtonRendered ? (
          loadMoreButtonRendered(loading, onLoadMore)
        ) : (
          <Button
            className={styles.load_more_btn}
            loading={loading}
            size={loadMoreButtonSize}
            onClick={onLoadMore}
          >
            More <ArrowDownIcon />
          </Button>
        )}
      </div>
    );
  };

  const customizeRenderEmpty = () => {
    if (noDataHint) {
      return noDataHint;
    }

    return (
      <div className={styles.empty_hint}>
        <NoDataIcon></NoDataIcon>
        <div>{noDataText || "No data"}</div>
      </div>
    );
  };

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <List
        style={style}
        className={classNames(styles.async_list, className)}
        // if set loading=true, Ant List hide already loaded items, until loading not finished
        // thats why set loading only for first page
        loading={loadFirstPage}
        loadMore={renderLoadMoreBtn()}
        grid={grid}
        dataSource={items}
        renderItem={(item) => (
          <List.Item className={styles.item}>{itemRenderer(item)}</List.Item>
        )}
      ></List>
    </ConfigProvider>
  );
};
