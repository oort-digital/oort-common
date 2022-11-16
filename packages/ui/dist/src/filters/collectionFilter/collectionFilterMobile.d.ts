/// <reference types="react" />
import { FilterListenerActionType, ICommonProps } from "./typesAndInterfaces";
export interface ICollectionFilterMobileProps extends ICommonProps {
    addFilterEventListeners?: FilterListenerActionType;
    removeFilterEventListeners?: FilterListenerActionType;
}
export declare const CollectionFilterMobile: ({ filterStore, searchable, searchPlaceholder, circleIcons, addFilterEventListeners, removeFilterEventListeners, onChange }: ICollectionFilterMobileProps) => JSX.Element;
//# sourceMappingURL=collectionFilterMobile.d.ts.map