import { observer } from "mobx-react-lite";
import { CSSProperties, useEffect, useState } from "react";
import {
  ICollectionFilterItem,
  ItemKeyType,
  SelectMode,
  StaticCollectionFilterStore,
} from "./stores";
import { CollectionFilterPopoverContent } from "./collectionFilterPopoverContent";

export interface IStaticCollectionFilterPopoverContentProps {
  popoverClassName?: string;
  popoverStyle?: CSSProperties | undefined;
  items: ICollectionFilterItem[];
  title: string;
  applied: ItemKeyType[];
  onChange: (collections: ICollectionFilterItem[]) => void;
  onCancel: () => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  circleIcons?: boolean;
  noClear?: boolean;
  popoverTitle: string;
  showClose?: boolean;
  showCancel?: boolean;
  showClear?: boolean;
  selectMode?: SelectMode;
}

const Impl = (props: IStaticCollectionFilterPopoverContentProps) => {
  const selectMode = props.selectMode ?? SelectMode.Multy;
  const [filterStore, setStore] = useState<StaticCollectionFilterStore>();
  useEffect(() => {
    setStore(new StaticCollectionFilterStore(selectMode, props.items));
  }, [props.items, selectMode]);

  useEffect(() => {
    if (filterStore) {
      filterStore.setApplied(props.applied);
    }
  }, [props.applied, filterStore]);

  if (!filterStore) {
    return null;
  }

  return (
    <CollectionFilterPopoverContent
      popoverClassName={props.popoverClassName}
      popoverStyle={props.popoverStyle}
      popoverTitle={props.popoverTitle}
      showClose={props.showClose}
      showCancel={props.showCancel}
      showClear={props.showClear}
      onChange={props.onChange}
      searchable={props.searchable}
      searchPlaceholder={props.searchPlaceholder}
      filterStore={filterStore}
      circleIcons={props.circleIcons}
      noClear={props.noClear}
      onCancel={props.onCancel}
    ></CollectionFilterPopoverContent>
  );
};

export const StaticCollectionFilterPopoverContent = observer(Impl);
