/// <reference types="react" />
import { ICollectionFilterStore } from "./stores";
interface IProps {
    bottomSpaceHeight?: number;
    filterStore: ICollectionFilterStore;
    searchable: boolean;
    selectSingle: boolean;
    searchPlaceholder: string;
}
export declare const CollectionFilterContent: ({ filterStore, searchable, selectSingle, searchPlaceholder, bottomSpaceHeight }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilterContent.d.ts.map