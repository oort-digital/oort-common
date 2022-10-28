/// <reference types="react" />
import { ICollectionFilterItem, ItemKeyType } from "./typesAndInterfaces";
export interface ISelectedParameter {
    selected: Set<ItemKeyType>;
    onChange: (item: ICollectionFilterItem, checked: boolean) => void;
}
export declare const collectionItemRenderer: (className: string, isMobile: boolean, selected: ISelectedParameter, favorite: ISelectedParameter) => (item: ICollectionFilterItem) => JSX.Element;
//# sourceMappingURL=collectionFilterItemRenderer.d.ts.map