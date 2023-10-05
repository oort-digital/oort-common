import classNames from "classnames";
import { CSSProperties, LegacyRef, ReactNode } from "react"
import styles from "./button.module.scss"

export interface IButtonProps {
    innerRef?: LegacyRef<HTMLButtonElement> | undefined;
    style?: CSSProperties
    children: ReactNode,
    className?: string
    onClick?: () => void
}

export const Button = ({ innerRef, onClick, className, children, style }: IButtonProps) => {
    const cssClass = classNames(className, styles.btn, styles.hover)
    return <button ref={innerRef} onClick={onClick} style={style} className={cssClass}><span>{children}</span></button>
}