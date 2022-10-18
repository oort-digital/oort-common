import { NoDataIcon } from "../icons"
import styles from "./noDataHint.module.less"

interface IProps {
    className?: string
    text?: string
}

export const NoDataHint = ({className, text}: IProps) => <div className={`${styles.empty_hint} ${className}`}>
    <NoDataIcon />
    {`${text ?? 'No data'}`}
</div>