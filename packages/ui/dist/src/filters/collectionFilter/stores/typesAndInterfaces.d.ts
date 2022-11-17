import { ReactElement } from "react";
export declare enum SelectMode {
    Multy = 0,
    Single = 1,
    SingleRequired = 2
}
export declare type ItemKeyType = string | number;
export interface ICollectionFilterItem {
    key: ItemKeyType;
    icon: ReactElement | string;
    title: string;
    count?: number;
}
export interface ICollectionFilterStore {
    selectMode: SelectMode;
    all: ICollectionFilterItem[];
    recent?: ICollectionFilterItem[];
    favorites?: ICollectionFilterItem[];
    term: string;
    appliedItems: ICollectionFilterItem[];
    selected: ItemKeyType[];
    hasLoadMore: boolean;
    isLoading: boolean;
    clearNotApplied: () => void;
    copyNotAppliedToRecent?: () => void;
    setTerm: (term: string) => void;
    reset?: () => void;
    setFavorites?: (item: ICollectionFilterItem, checked: boolean) => void;
    loadNextPage?: (signal: AbortSignal) => Promise<void>;
    loadFavoritesFromCache?: () => void;
    loadRecentFromCache?: () => void;
    select: (key: ItemKeyType, checked: boolean) => void;
}
//# sourceMappingURL=typesAndInterfaces.d.ts.map