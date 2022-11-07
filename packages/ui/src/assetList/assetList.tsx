import React from "react";

import {ListGridType} from "antd/lib/list"
import { defaultScreenBrakepoints, IScreenBrakepoints, ScreenSize, useScreenSize } from "../effects";
import { AsyncList } from "../asyncList";

interface IProps<TItem> {
	items: TItem[]
	itemRenderer: (item: TItem) => React.ReactElement
	onLoadMore?: () => void
	hasLoadMore: boolean
	loading: boolean
	className?: string
}

export interface IAssetListGrid {
	xs: ListGridType
	sm: ListGridType
	md: ListGridType
	lg: ListGridType
	xl: ListGridType
	xxl: ListGridType
}

export const AssetListGrid: IAssetListGrid = {
	xs:  { column: 1 },
	sm:  { column: 2, gutter: 12 },
	md:  { column: 3, gutter: 12 },
	lg:  { column: 4, gutter: 12 },
	xl:  { column: 4, gutter: 16 },
	xxl: { column: 5, gutter: 16 }
}

const overridedBrakepoints = {
	sm: 520,
	md: 782,
	lg: 1280,
	xl: 1440,
	xxl: 1680
}

export const AssetListBrakepoints: IScreenBrakepoints = {...defaultScreenBrakepoints, ...overridedBrakepoints}

const toGrid = (screenSize: ScreenSize): ListGridType => {
	switch(screenSize) {
		case ScreenSize.xs:
			return AssetListGrid.xs
		case ScreenSize.sm:
			return AssetListGrid.sm
		case ScreenSize.md:
			return AssetListGrid.md
		case ScreenSize.lg:
			return AssetListGrid.lg
		case ScreenSize.xl:
			return AssetListGrid.xl
	}

	return AssetListGrid.xxl
}

export const AssetList = <TItem, >({ hasLoadMore, itemRenderer, onLoadMore, items, loading, className }: IProps<TItem>) => {

	const [, screenSize] = useScreenSize(AssetListBrakepoints)

	// overriding default screen brakepoints not working for Antd List controll
	// to calculate column number call toColumn(screenSize)
	return <AsyncList
		grid={toGrid(screenSize)}
		items={items}
		itemRenderer={itemRenderer}
		onLoadMore={onLoadMore}
		loading={loading}
		className={className}
		hasLoadMore={hasLoadMore} />
}
