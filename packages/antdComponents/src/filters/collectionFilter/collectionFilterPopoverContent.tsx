import styles from "./collectionFilter.module.scss";
import { PopoverFilterContent } from "../popover";
import { observer } from "mobx-react-lite";
import { CollectionFilterContent } from "./collectionFilterContent";
import { CSSProperties } from "react";
import classNames from "classnames";
import { ICollectionFilterItem, ICollectionFilterStore } from "./stores";

export interface ICollectionFilterPopoverContentProps {
  popoverClassName?: string;
  popoverStyle?: CSSProperties | undefined;
  popoverTitle: string;
  showClose?: boolean;
  showCancel?: boolean;
  showClear?: boolean;
  itemTitleMaxLen?: number;
  onChange: (collections: ICollectionFilterItem[]) => void;
  onCancel: () => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  filterStore: ICollectionFilterStore;
  circleIcons?: boolean;
  noClear?: boolean;
}

function Impl({
  popoverTitle,
  onChange,
  onCancel,
  popoverClassName,
  popoverStyle,
  itemTitleMaxLen = 20,
  searchable = true,
  searchPlaceholder,
  filterStore,
  circleIcons = true,
  noClear = false,
  showClose,
  showCancel,
  showClear,
}: ICollectionFilterPopoverContentProps) {
  const onSubmit = () => {
    filterStore.copyNotAppliedToRecent && filterStore.copyNotAppliedToRecent();
    const selectedItems = filterStore.all.filter((x) =>
      filterStore.selected.some((s) => s === x.key)
    );
    onChange(selectedItems);
    filterStore.clearNotApplied();
  };

  const onClear = () => {
    onChange([]);
    filterStore.clearNotApplied();
  };

  return (
    <PopoverFilterContent
      popoverClassName={classNames(
        popoverClassName,
        styles.collection_popover_content
      )}
      popoverStyle={popoverStyle}
      popoverTitleClassName={styles.title}
      onSubmit={onSubmit}
      popoverTitle={popoverTitle}
      showClose={showClose}
      showCancel={showCancel}
      showClear={showClear}
      // submitDisabled={!notSubmited.length}
      onClear={noClear ? () => {} : onClear}
      onCancel={onCancel}
    >
      <CollectionFilterContent
        calcOptimalListHeight={false}
        itemTitleMaxLen={itemTitleMaxLen}
        circleIcons={circleIcons}
        bottomSpaceHeight={undefined}
        searchPlaceholder={searchPlaceholder}
        searchable={searchable}
        filterStore={filterStore}
      />
    </PopoverFilterContent>
  );
}

export const CollectionFilterPopoverContent = observer(Impl);
