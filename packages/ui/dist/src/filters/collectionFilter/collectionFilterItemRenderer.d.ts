/// <reference types="react" />
import { ICollectionFilterItem, ItemKeyType } from "./stores";
export interface ISelectedParameter {
    selected: Set<ItemKeyType>;
    onChange: (item: ICollectionFilterItem, checked: boolean) => void;
}
export declare const collectionItemRenderer: (className: string, isMobile: boolean, selected: ISelectedParameter, favorite?: ISelectedParameter | undefined) => (item: ICollectionFilterItem) => JSX.Element;
//# sourceMappingURL=collectionFilterItemRenderer.d.ts.map