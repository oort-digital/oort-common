/// <reference types="react" />
import { ICollectionFilterItem, ItemKeyType, SelectMode } from "./stores";
export interface ISelectedParameter {
    selected: Set<ItemKeyType>;
    onChange: (item: ICollectionFilterItem, checked: boolean) => void;
}
export declare const collectionItemRenderer: (selectMode: SelectMode, className: string, itemTitleMaxLen: number, selected: ISelectedParameter, favorite?: ISelectedParameter | undefined) => (item: ICollectionFilterItem) => JSX.Element;
//# sourceMappingURL=collectionFilterItemRenderer.d.ts.map