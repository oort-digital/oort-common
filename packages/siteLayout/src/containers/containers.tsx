import { ReactNode } from "react"
import styles from "./containers.module.scss"
import classNames from "classnames"

interface IProps {
    className?: string
    children: ReactNode
}

export function Contaner10({ className, children }: IProps) {
    return <div className={classNames(styles.container_10, className)}>{children}</div>
}
