import styles from "./oortModal.module.scss";
import { Modal } from "antd";
import React, { ReactNode } from "react";
import { CloseIcon } from "../icons";
import classNames from "classnames";

export interface IModalProps {
  visible: boolean;
  title?: string;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  loading?: boolean;
  children: ReactNode;
  width?: string;
  className?: string;
  footer?: ReactNode;
  closable?: boolean;
}

export function OortModal({
  className,
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
        footer: styles.footer,
        body: styles.body,
      }}
      className={classNames(className, styles.modal)}
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
