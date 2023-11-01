import { CSSProperties, ReactNode } from "react";
import styles from "./popoverFilter.module.scss";
import { CloseIcon } from "../../icons";
import { Button } from "../../button";

export interface IPopoverFilterContentProps {
  popoverClassName?: string;
  popoverStyle?: CSSProperties | undefined;
  popoverTitleClassName?: string;
  applyButtonClassName;
  cancelButtonClassName;
  showClose?: boolean;
  showCancel?: boolean;
  showClear?: boolean;
  popoverTitle: string;
  children: ReactNode;
  onCancel: () => void;
  onClear: () => void;
  onSubmit: () => void;
  submitDisabled?: boolean;
}

export function PopoverFilterContent({
  popoverClassName,
  popoverStyle,
  popoverTitleClassName,
  cancelButtonClassName,
  applyButtonClassName,
  showCancel,
  showClear,
  showClose,
  children,
  popoverTitle,
  onCancel,
  onClear,
  onSubmit,
  submitDisabled,
}: IPopoverFilterContentProps) {
  return (
    <div
      style={popoverStyle}
      className={`${styles.popover_content} ${popoverClassName || ""}`}
    >
      {showClose && (
        <div onClick={onCancel} className={styles.close_icon_wrap}>
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
            onClick={onClear}
          >
            Clear
          </Button>
        )}
        {showCancel && (
          <Button
            className={`${styles.cancel} ${cancelButtonClassName}`}
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
        <Button
          className={`${styles.apply} ${applyButtonClassName}`}
          onClick={onSubmit}
          disabled={submitDisabled}
          type="primary"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
