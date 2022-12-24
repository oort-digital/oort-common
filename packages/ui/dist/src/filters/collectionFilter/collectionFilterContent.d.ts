import { ICollectionFilterStore } from "./stores";
interface IProps {
    itemTitleMaxLen: number;
    bottomSpaceHeight: number | undefined;
    calcOptimalListHeight: boolean;
    filterStore: ICollectionFilterStore;
    searchable: boolean;
    searchPlaceholder?: string;
    circleIcons: boolean;
}
export declare const CollectionFilterContent: ({ filterStore, searchable, searchPlaceholder, bottomSpaceHeight, circleIcons, itemTitleMaxLen, calcOptimalListHeight }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterContent.d.ts.map