export type ItemKeyType = string | number

export interface ICollectionFilterItem {
	key: ItemKeyType
	iconUrl: string,
	title: string
	count?: number
}