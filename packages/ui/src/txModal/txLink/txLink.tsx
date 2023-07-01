import { addTrailingSlash, toMassked } from "@oort-digital/utils";
import { Spin, Typography } from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';
import styles from "./txLink.module.less"
import classNames from "classnames";

const { Link } = Typography;

export type TxStatus = 'pending' | 'completed'

export interface ITxLinkProps {
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
}: ITxLinkProps) {
    const url = `${addTrailingSlash(blockExplorer)}tx/${hash}`;

    return <div className={classNames(styles.tx_link, className)}>
      { status === 'pending' && <Spin className={styles.tx_indicator} size="small" />  }
      { status === 'completed' && <CheckCircleTwoTone className={styles.tx_indicator} twoToneColor="#2FB4AC" /> }
      <Link href={url} target="_blank">{toMassked(hash)}</Link>
    </div>
}

