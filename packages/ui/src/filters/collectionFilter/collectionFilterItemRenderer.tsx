import { Avatar, Checkbox, Col, Row } from "antd"
import { BlockieAddress } from "../../blockieAddress"
import { cutLongString } from "../../utils"
import { FavoriteCheckBox } from "./favoriteCheckBox"
import { ICollectionFilterItem } from "./itemSource"

export interface ISelectedParameter {
	selected: Set<string>
	onChange: (item: ICollectionFilterItem, checked: boolean) => void
}

export const collectionItemRenderer = (isMobile: boolean, selected: ISelectedParameter, favorite: ISelectedParameter) => {

	const tokenNameMaxLen = isMobile ? 16 : 20

	return (item: ICollectionFilterItem) => {
		const { tokenAddress, tokenName, count } = item
		const isSelected = selected.selected.has(tokenAddress)
		const isFavorite = favorite.selected.has(tokenAddress)

		let collectionName = `${cutLongString(tokenName, tokenNameMaxLen)}`
		if(count) {
			collectionName = `${collectionName} (${count})`
		}

		return <Row gutter={[16, 0]} justify="space-between" align="middle" onClick={() => selected.onChange(item, !isSelected)} className="collection-list-item">
			<Col><Checkbox checked={isSelected}></Checkbox></Col>
			<Col><Avatar size={32} icon={<BlockieAddress address={tokenAddress}/>} /></Col>
			<Col flex="auto"><span className="collection-name">{collectionName}</span></Col>
			<Col><FavoriteCheckBox checked={isFavorite} onChange={checked => favorite.onChange(item, checked)} /></Col>
		</Row>
	}
}
