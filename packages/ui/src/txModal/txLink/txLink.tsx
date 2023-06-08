/* eslint-disable import/no-cycle */
import { toMasskedAddress } from "@oort-digital/utils";
import { Spin, Typography } from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';
import styles from "./txLink.module.less"
import classNames from "classnames";

const { Link } = Typography;

export const addTralingSlash = (url: string) => {
  if (url.substring(-1) !== '/') url += '/'
  return url
}

export type TxStatus = 'pending' | 'completed'

interface IProps {
  hash: string
  blockExplorer: string
  status: TxStatus
  className?: string
}

export function TxLink({
  hash,
  blockExplorer,
  status,
  className
}: IProps) {
    const url = `${addTralingSlash(blockExplorer)}tx/${hash}`;

    return <div className={classNames(styles.tx_link, className)}>
      { status === 'pending' && <Spin className={styles.tx_indicator} size="small" />  }
      { status === 'completed' && <CheckCircleTwoTone className={styles.tx_indicator} twoToneColor="#2FB4AC" /> }
      <Link href={url} target="_blank">{toMasskedAddress(hash)}</Link>
    </div>
}

