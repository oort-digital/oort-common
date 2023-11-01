import styles from "./oortModal.module.scss";
import { Modal } from "antd";
import React, { ReactNode } from "react";
import { CloseIcon } from "../icons";
import cn from "classnames";

export interface IOortModalClassNames {
  footer?: string;
}

export interface IModalProps {
  visible: boolean;
  title?: string;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  loading?: boolean;
  children: ReactNode;
  width?: string;
  className?: string;
  classNames?: IOortModalClassNames;
  footer?: ReactNode;
  closable?: boolean;
}

export function OortModal({
  className,
  classNames,
  title = "",
  onCancel,
  loading,
  children,
  visible,
  width,
  footer,
  closable = true,
}: IModalProps) {
  const _onCancel = (e: React.MouseEvent<HTMLElement>) => {
    if (!loading && onCancel) {
      //if loading === true, user can't close modal
      onCancel(e);
    }
  };

  return (
    <Modal
      classNames={{
        header: styles.header,
        content: styles.content,
        footer: cn(styles.footer, classNames?.footer),
        body: styles.body,
      }}
      className={cn(className, styles.modal)}
      width={width || "640px"}
      title={title}
      centered
      open={visible}
      closable={closable}
      closeIcon={<CloseIcon />}
      cancelText="Close"
      onCancel={_onCancel}
      maskClosable={false}
      confirmLoading={loading}
      footer={footer}
    >
      {children}
    </Modal>
  );
}
