import { ReactNode } from "react"
import { NoDataIcon } from "../icons"
import styles from "./noDataHint.module.less"

interface IProps {
    className?: string
    text?: string
    icon?: ReactNode
}

export const NoDataHint = ({className, text = 'No data', icon = <NoDataIcon /> }: IProps) => <div className={`${styles.empty_hint} ${className}`}>
    {icon}
    {text}
</div>