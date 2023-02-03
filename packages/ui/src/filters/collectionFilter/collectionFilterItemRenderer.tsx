import { Checkbox, Col, Radio, Row } from "antd"
import { FavoriteCheckBox } from "./favoriteCheckBox"
import { ICollectionFilterItem, ItemKeyType, SelectMode } from "./stores"
import styles from "./collectionFilterContent.module.less"
import { cutLongString } from "@oort-digital/utils"

export interface ISelectedParameter {
	selected: Set<ItemKeyType>
	onChange: (item: ICollectionFilterItem, checked: boolean) => void
}

export const collectionItemRenderer = (selectMode: SelectMode, className: string, itemTitleMaxLen: number, selected: ISelectedParameter, favorite?: ISelectedParameter) => {

	return (item: ICollectionFilterItem) => {
		const { key, title, count, icon } = item
		const isSelected = selected.selected.has(key)
		

		let collectionName = `${cutLongString(title, itemTitleMaxLen)}`
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

		const renderIcon = () => {
			if(typeof(icon) === 'string') {
				return <img src={icon}/>
			}
			return icon
		}

		return <Row gutter={[16, 0]} justify="space-between" align="middle" onClick={() => selected.onChange(item, !isSelected)} className={className}>
			<Col>
				{
					selectMode === SelectMode.Multy ? <Checkbox checked={isSelected}/> : <Radio checked={isSelected} />
				}
			</Col>
			{ icon && <Col><div className="item-icon">{renderIcon()}</div></Col> }
			<Col flex="auto" className={styles.item_name}>{collectionName}</Col>
			{renderFavorite()}
		</Row>
	}
}
