import { CSSProperties, ReactNode, useState } from "react";
import styles from "./popoverFilter.module.scss";
import { ChevronDownOutlineIconSvg, CloseIcon } from "../../icons";
import { TooltipPlacement } from "antd/es/tooltip";
import { Button } from "../../button";
import { Popover } from "../../popover";

export type RangeValue = number | undefined;

interface IProps {
  title: ReactNode;
  subTitle?: ReactNode;
  triggerBtnClassName?: string;
  popoverClassName?: string;
  popoverStyle?: CSSProperties | undefined;
  popoverTitleClassName?: string;
  applyButtonClassName?: string;
  cancelButtonClassName?: string;
  isClear?: boolean;
  onClear?: () => void;
  visible?: boolean;
  showTriggerButton?: boolean;
  // show X icon in top right corner
  showClose?: boolean;
  showCancel?: boolean;
  showClear?: boolean;
  popoverTitle: string;
  children: ReactNode;
  onSubmit: () => void;
  submitDisabled?: boolean;
  onVisibleChange?: (isVisible: boolean) => void;
  //returns space between bottom of button and bottom of the window then
  onBottomSpaceHeightChange?: (heigth: number) => void;
  placement?: TooltipPlacement;
}

export const PopoverFilter = ({
  title,
  subTitle,
  triggerBtnClassName,
  popoverTitle,
  popoverClassName,
  popoverStyle,
  popoverTitleClassName,
  applyButtonClassName,
  cancelButtonClassName,
  isClear,
  onClear,
  children,
  onSubmit,
  onVisibleChange,
  submitDisabled,
  onBottomSpaceHeightChange,
  visible,
  showTriggerButton = true,
  showClose = false,
  showCancel = true,
  showClear = false,
  placement = "bottomRight",
}: IProps) => {
  const [visibleInternal, setVisible] = useState(!!visible);

  if (visible !== undefined && visibleInternal !== visible) {
    setVisible(visible);
  }

  const submit = () => {
    onSubmit();
    onVisibleChange_(false);
  };

  const cancel = () => {
    onVisibleChange_(false);
  };

  const clear = () => {
    if (onClear) {
      onClear();
    }
    onVisibleChange_(false);
  };

  const onVisibleChange_ = (isVisible: boolean) => {
    setVisible(isVisible);
    if (onVisibleChange) {
      onVisibleChange(isVisible);
    }
  };

  const renderContent = () => {
    return (
      <div
        style={popoverStyle}
        className={`${styles.popover_content} ${popoverClassName || ""}`}
      >
        {showClose && (
          <div onClick={cancel} className={styles.close_icon_wrap}>
            <CloseIcon />
          </div>
        )}
        <div className={`${styles.title} ${popoverTitleClassName}`}>
          {popoverTitle}
        </div>
        {children}
        <div className={styles.buttons}>
          {showClear && (
            <Button
              className={`${styles.cancel} ${cancelButtonClassName}`}
              onClick={clear}
            >
              Clear
            </Button>
          )}
          {showCancel && (
            <Button
              className={`${styles.cancel} ${cancelButtonClassName}`}
              onClick={cancel}
            >
              Cancel
            </Button>
          )}
          <Button
            className={`${styles.apply} ${applyButtonClassName}`}
            onClick={submit}
            disabled={submitDisabled}
            type="primary"
          >
            Apply
          </Button>
        </div>
      </div>
    );
  };

  const renderClose = () => {
    if (isClear || !onClear) {
      return null;
    }
    return (
      <span
        className={`${styles.icon} ${styles.close}`}
        onClick={(e) => {
          e.stopPropagation();
          onClear();
        }}
      >
        <CloseIcon />
      </span>
    );
  };

  const btnIcons = (
    <>
      {renderClose()}
      <span className={styles.icon}>
        <ChevronDownOutlineIconSvg />
      </span>
    </>
  );

  const renderTitleAndSubTitle = () => (
    <>
      <div className={styles.title_outer}>{title}</div>
      <div className={styles.sub_title_outer}>
        {subTitle}
        {btnIcons}
      </div>
    </>
  );

  const renderSingleTitle = () => (
    <>
      <span className={styles.single_title}>{title}</span>
      {btnIcons}
    </>
  );

  let btnClassName = `${styles.trigger_btn} ${triggerBtnClassName ?? ""}`;
  btnClassName = `${btnClassName} ${isClear ? "" : "filled"}`;

  const setBtnRef = (btnElement: HTMLElement | null) => {
    if (btnElement && onBottomSpaceHeightChange) {
      //calculate space between bottom of button and bottom of the window
      const rect = btnElement.getBoundingClientRect();
      var bottomSpaceHeight =
        window.innerHeight - rect.top + btnElement.offsetHeight;
      onBottomSpaceHeightChange(bottomSpaceHeight);
    }
  };

  return (
    <Popover
      arrow={false}
      overlayClassName={styles.overlay}
      onOpenChange={onVisibleChange_}
      open={visibleInternal}
      placement={placement}
      content={renderContent}
      trigger="click"
    >
      {showTriggerButton && (
        <Button className={btnClassName} size="large">
          {subTitle ? renderTitleAndSubTitle() : renderSingleTitle()}
        </Button>
      )}
    </Popover>
  );
};
