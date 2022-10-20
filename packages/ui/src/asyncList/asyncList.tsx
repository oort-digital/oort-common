import React from "react"
import {Button, List, ConfigProvider} from "antd"
import {ListGridType} from "antd/lib/list"
import styles from "./asyncList.module.less"
import {ArrowDownIcon, NoDataIcon} from "../icons"

interface IProps<TItem> {
    items: TItem[]
    itemRenderer: (item: TItem) => React.ReactElement
    onLoadMore?: () => void
    hasLoadMore: boolean
    loading: boolean
    grid?: ListGridType
    className?: string
    style?: React.CSSProperties
    noDataText?: string
}

export const AsyncList = <TItem, >({hasLoadMore, itemRenderer, onLoadMore, items, loading, grid, className, style, noDataText}: IProps<TItem>) => {

    const loadFirstPage = loading && items.length === 0
    const renderLoadMoreBtn = () => {
        if (!hasLoadMore || !items.length) {
            return null
        }
        return <div className={styles.load_more_btn_container}>
            <Button className={styles.load_more_btn} loading={loading} size="large" onClick={onLoadMore}>
                More <ArrowDownIcon />
            </Button>
        </div>
    }

    const customizeRenderEmpty = () => (
        <div className={styles.empty_hint}>
			<NoDataIcon></NoDataIcon>
			<div>{ noDataText || 'No data' }</div>
        </div>
    );

    return (
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
            <List
                style={style}
                className={`${styles.async_list} ${className || ''}`}
                // if set loading=true, Ant List hide already loaded items, until loading not finished
                // thats why set loading only for first page
                loading={loadFirstPage}
                loadMore={renderLoadMoreBtn()}
                grid={grid}
                dataSource={items}
                renderItem={item => (
                    <List.Item>
                        {itemRenderer(item)}
                    </List.Item>
                )}
            >
            </List>
        </ConfigProvider>
    )
}
