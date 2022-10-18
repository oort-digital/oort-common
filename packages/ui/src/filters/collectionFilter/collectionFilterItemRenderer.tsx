import { Avatar, Checkbox, Col, Row } from "antd"
import { cutLongString } from "../../utils"
import { FavoriteCheckBox } from "./favoriteCheckBox"
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces"

export interface ISelectedParameter {
	selected: Set<ItemKeyType>
	onChange: (item: ICollectionFilterItem, checked: boolean) => void
}

export const collectionItemRenderer = (className: string, isMobile: boolean, selected: ISelectedParameter, favorite: ISelectedParameter) => {

	const tokenNameMaxLen = isMobile ? 16 : 20

	return (item: ICollectionFilterItem) => {
		const { key, title, count, iconUrl } = item
		const isSelected = selected.selected.has(key)
		const isFavorite = favorite.selected.has(key)

		let collectionName = `${cutLongString(title, tokenNameMaxLen)}`
		if(count) {
			collectionName = `${collectionName} (${count})`
		}

		return <Row gutter={[16, 0]} justify="space-between" align="middle" onClick={() => selected.onChange(item, !isSelected)} className={className}>
			<Col><Checkbox checked={isSelected}></Checkbox></Col>
			<Col><Avatar size={32} icon={<img src={iconUrl} /> } /></Col>
			<Col flex="auto"><span className="collection-name">{collectionName}</span></Col>
			<Col><FavoriteCheckBox checked={isFavorite} onChange={checked => favorite.onChange(item, checked)} /></Col>
		</Row>
	}
}
