import { Button } from "antd";
import styles from "./footerButtonsMobile.module.scss";
import React from "react";
import { ButtonType } from "antd/lib/button";
import { useFooterButtons } from "./useFooterButtons";
import { IFooterBtn, IFooterProps } from "./typesAndInterfaces";

export interface IFooterButtonsMobileProps
  extends IDepricatedProps,
    IFooterProps {}

interface IDepricatedProps {
  /**
   * @deprecated Use Buttons
   */
  okBtn?: IFooterBtn;
  /**
   * @deprecated Use Buttons
   */
  cancelBtn?: IFooterBtn;
  /**
   * @deprecated Use IFooterBtn.onClick
   */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * @deprecated Use IFooterBtn.onClick
   */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * @deprecated Use Buttons
   */
  disable?: boolean;
}

function renderButton(
  className: string,
  footerBtn: IFooterBtn,
  defaultText: string,
  disabled?: boolean,
  loading?: boolean,
  type?: ButtonType,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
) {
  const { size, text, href } = footerBtn;

  const renderedBtn = (
    <Button
      className={className}
      disabled={disabled}
      loading={loading}
      size={size ?? "large"}
      type={type}
      onClick={onClick}
    >
      {text || defaultText}
    </Button>
  );

  if (href) {
    return <a href={href}>{renderedBtn}</a>;
  }

  return renderedBtn;
}

function FooterButtonsMobileDepricated({
  okBtn,
  cancelBtn,
  onCancel,
  onOk,
  loading,
  className,
  disable,
}: IFooterButtonsMobileProps) {
  let cssClass = styles.footer_buttons_depricated;
  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  if (cancelBtn && okBtn) {
    cssClass = `${cssClass} ${styles.two_buttons}`;
  } else {
    cssClass = `${cssClass} ${styles.single_button}`;
  }

  return (
    <div className={cssClass}>
      {cancelBtn
        ? renderButton(
            styles.cancel_btn,
            cancelBtn,
            "Cancel",
            disable || loading,
            false,
            cancelBtn.type ?? "default",
            onCancel
          )
        : null}
      {okBtn
        ? renderButton(
            styles.ok_btn,
            okBtn,
            "Ok",
            disable,
            loading,
            okBtn.type ?? "primary",
            onOk
          )
        : null}
    </div>
  );
}

export function FooterButtonsMobile(props: IProps) {
  const { buttons = [] } = props;

  if (buttons.length === 0) {
    return FooterButtonsMobileDepricated(props);
  }

  return useFooterButtons(props, styles);
}
