import styles from "./collectionFilter.module.less";
import { PopoverFilter } from "../popover";
import { observer } from "mobx-react-lite";
import { CollectionFilterContent } from "./collectionFilterContent";
import { SubTitle } from "../subTitle";
import { CSSProperties, useState } from "react";
import { ICommonProps } from "./typesAndInterfaces";
import { TooltipPlacement } from "antd/es/tooltip";

export interface ICollectionFilterProps extends ICommonProps {
  triggerBtnClassName?: string;
  popoverClassName?: string;
  popoverStyle?: CSSProperties | undefined;
  popoverTitle: string;
  visible?: boolean;
  showTriggerButton?: boolean;
  showClose?: boolean;
  showCancel?: boolean;
  showClear?: boolean;
  onVisibleChange?: (isVisible: boolean) => void;
  placement?: TooltipPlacement;
  calcOptimalListHeight?: boolean;
}

const Impl = ({
  title,
  popoverTitle,
  onChange,
  triggerBtnClassName,
  popoverClassName,
  popoverStyle,
  itemTitleMaxLen = 20,
  calcOptimalListHeight = true,
  searchable = true,
  searchPlaceholder,
  filterStore,
  circleIcons = true,
  noClear = false,
  visible,
  showTriggerButton,
  showClose,
  onVisibleChange,
  showCancel,
  showClear,
  placement,
}: ICollectionFilterProps) => {
  const [bottomSpaceHeight, setBottomSpaceHeight] = useState<number>();

  const isClear = !filterStore.appliedItems.length;
  const renderSubTitle = () => {
    if (isClear) {
      return null;
    }
    return <SubTitle names={filterStore.appliedItems.map((x) => x.title)} />;
  };

  const onSubmit = () => {
    filterStore.copyNotAppliedToRecent && filterStore.copyNotAppliedToRecent();
    const selectedItems = filterStore.all.filter((x) =>
      filterStore.selected.some((s) => s === x.key)
    );
    onChange(selectedItems);
    filterStore.clearNotApplied();
  };

  const _onVisibleChange = (isVisible: boolean) => {
    if (!isVisible) {
      filterStore.clearNotApplied();
    }
    onVisibleChange && onVisibleChange(isVisible);
  };

  const onClear = () => {
    onChange([]);
    filterStore.clearNotApplied();
  };

  const onBottomSpaceHeightChange = (h: number) => {
    setBottomSpaceHeight(h);
  };

  const triggerBtnCss = triggerBtnClassName
    ? `${triggerBtnClassName} ${styles.collection_trigger_btn}`
    : styles.collection_trigger_btn;
  const popoverCss = popoverClassName
    ? `${popoverClassName} ${styles.collection_popover_content}`
    : styles.collection_popover_content;

  return (
    <PopoverFilter
      onBottomSpaceHeightChange={onBottomSpaceHeightChange}
      triggerBtnClassName={triggerBtnCss}
      popoverClassName={popoverCss}
      popoverStyle={popoverStyle}
      popoverTitleClassName={styles.title}
      // applyButtonClassName={styles.apply}
      onVisibleChange={_onVisibleChange}
      onSubmit={onSubmit}
      title={title}
      subTitle={renderSubTitle()}
      popoverTitle={popoverTitle}
      visible={visible}
      showTriggerButton={showTriggerButton}
      showClose={showClose}
      showCancel={showCancel}
      showClear={showClear}
      // submitDisabled={!notSubmited.length}
      isClear={isClear}
      onClear={noClear ? undefined : onClear}
      placement={placement}
    >
      <CollectionFilterContent
        calcOptimalListHeight={calcOptimalListHeight}
        itemTitleMaxLen={itemTitleMaxLen}
        circleIcons={circleIcons}
        bottomSpaceHeight={bottomSpaceHeight}
        searchPlaceholder={searchPlaceholder}
        searchable={searchable}
        filterStore={filterStore}
      />
    </PopoverFilter>
  );
};

export const CollectionFilter = observer(Impl);
