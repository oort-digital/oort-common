/// <reference types="react" />
import { ICollectionFilterItem } from "./itemSource";
export interface ISelectedParameter {
    selected: Set<string>;
    onChange: (item: ICollectionFilterItem, checked: boolean) => void;
}
export declare const collectionItemRenderer: (isMobile: boolean, selected: ISelectedParameter, favorite: ISelectedParameter) => (item: ICollectionFilterItem) => JSX.Element;
//# sourceMappingURL=collectionFilterItemRenderer.d.ts.map