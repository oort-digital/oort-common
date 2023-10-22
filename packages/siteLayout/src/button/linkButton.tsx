import styles from "./linkButton.module.css"
import Link from "next/link"
import { CSSProperties } from "react";
import { Button, IButtonProps } from "./button"
import classNames from "classnames";

interface IProps extends IButtonProps {
    href: string
    buttonClassName?: string
    buttonStyle?: CSSProperties | undefined
}

export const LinkButton = (props: IProps) => {
    const { className, href, style, buttonClassName, buttonStyle } = props
    const btnProps = { ...props, ... { className: buttonClassName, style: buttonStyle } }

    return <Link style={style} className={classNames(className, styles.link_btn)} href={href}>
        <Button {...btnProps} />
    </Link>
}