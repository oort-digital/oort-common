import { Avatar, Checkbox, Col, Radio, Row } from "antd"
import { cutLongString } from "../../utils"
import { FavoriteCheckBox } from "./favoriteCheckBox"
import { ICollectionFilterItem, ItemKeyType, SelectMode } from "./stores"

export interface ISelectedParameter {
	selected: Set<ItemKeyType>
	onChange: (item: ICollectionFilterItem, checked: boolean) => void
}

export const collectionItemRenderer = (selectMode: SelectMode, className: string, isMobile: boolean, selected: ISelectedParameter, favorite?: ISelectedParameter) => {

	const tokenNameMaxLen = isMobile ? 16 : 20

	return (item: ICollectionFilterItem) => {
		const { key, title, count, icon } = item
		const isSelected = selected.selected.has(key)
		

		let collectionName = `${cutLongString(title, tokenNameMaxLen)}`
		if(count) {
			collectionName = `${collectionName} (${count})`
		}

		const renderFavorite = () => {
			if(favorite) {
				const isFavorite = favorite && favorite.selected.has(key)
				return <Col><FavoriteCheckBox checked={isFavorite} onChange={checked => favorite.onChange(item, checked)} /></Col>
			}
			return null
		}

		const renderIcon  = () => {
			if(typeof(icon) === 'string') {
				return <img src={icon} />
			}

			return icon
		}

		return <Row gutter={[16, 0]} justify="space-between" align="middle" onClick={() => selected.onChange(item, !isSelected)} className={className}>
			<Col>
				{
					selectMode === SelectMode.Multy ? <Checkbox checked={isSelected}/> : <Radio checked={isSelected} />
				}
			</Col>
			<Col><Avatar size={32} icon={renderIcon()} /></Col>
			<Col flex="auto"><span className="collection-name">{collectionName}</span></Col>
			{renderFavorite()}
		</Row>
	}
}
