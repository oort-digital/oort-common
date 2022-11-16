import { ICollectionFilterItem, ICollectionFilterStore } from "./stores";
export interface IFilterListeners {
    submit: () => void;
    close: () => void;
    clear?: () => void;
}
export declare type FilterListenerActionType = (listeners: IFilterListeners) => void;
export interface ICommonProps {
    title: string;
    onChange: (collections: ICollectionFilterItem[]) => void;
    searchable: boolean;
    searchPlaceholder?: string;
    filterStore: ICollectionFilterStore;
    circleIcons: boolean;
    noClear: boolean;
}
//# sourceMappingURL=typesAndInterfaces.d.ts.map