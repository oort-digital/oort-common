import { toMasked } from "@oort-digital/utils";
import { ReactNode } from "react";
import styles from "./connectButton.module.less";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface IProps {
  account?: string;
  loading?: boolean;
  disabled?: boolean;
  walletIcon: ReactNode;
  walletName: string;
  labelText?: string;
  onClick?: () => void;
}

const spinner = (
  <Spin
    className={styles.spinner}
    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
  />
);

export const ConnectButton = ({
  account,
  onClick,
  walletIcon,
  walletName,
  labelText,
  loading,
  disabled,
}: IProps) => {
  let label: ReactNode;
  let className = styles.button;

  if (account) {
    label = <span className={styles.acc}>{toMasked(account)}</span>;
    className = `${className} ${styles.active}`;
  } else if (loading) {
    label = spinner;
    className = `${className} ${styles.loading}`;
  } else if (disabled) {
    label = <span className={styles.cnn}>{labelText}</span>;
    className = `${className} ${styles.disabled}`;
  } else {
    label = <span className={styles.cnn}>{labelText}</span>;
  }

  let _onClick = onClick;

  if (account || loading || disabled) {
    _onClick = undefined;
  }

  return (
    <div onClick={_onClick} className={className}>
      {walletIcon}
      <span className={styles.wallet_name}>{walletName}</span>
      {label}
    </div>
  );
};
