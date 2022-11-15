/// <reference types="react" />
import { ICollectionFilterStore } from "./stores";
interface IProps {
    bottomSpaceHeight?: number;
    filterStore: ICollectionFilterStore;
    searchable: boolean;
    searchPlaceholder?: string;
}
export declare const CollectionFilterContent: ({ filterStore, searchable, searchPlaceholder, bottomSpaceHeight }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterContent.d.ts.map