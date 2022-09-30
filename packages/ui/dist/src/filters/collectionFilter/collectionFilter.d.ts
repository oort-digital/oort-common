/// <reference types="react" />
import { CollectionFilterStore } from "./collectionFilterStore";
import { ICollection } from "./collectionFilterContent";
interface IProps {
    chainId: number;
    title: string;
    popoverTitle: string;
    applied: ICollection[];
    collectionFilterStore: CollectionFilterStore;
    onChange: (collections: ICollection[]) => void;
    searchable: boolean;
    selectSingle: boolean;
}
export declare const CollectionFilter: ({ chainId, title, popoverTitle, collectionFilterStore, onChange, applied, searchable, selectSingle }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=collectionFilter.d.ts.map