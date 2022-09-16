import { ReactNode } from "react";
import styles from './menu.module.less';


interface IMenuItemBtnProps {
    className?: string
    onClick?: () => void
    key: string
    caption: string
    iconBefore: ReactNode
    iconAfter: ReactNode
}

export const MenuItemBtn = ({ className, onClick, caption, iconBefore, iconAfter }: IMenuItemBtnProps) => {


    return <li onClick={onClick} className={className}>
            {iconBefore}
            <span className={styles.btn_caption}>{caption}</span>
            <span className={styles.btn_icon_after}>{iconAfter}</span>
            
    </li>
}

interface IMenuItemLinkProps {
    className?: string
    href: string
    key: string
    caption: string
    icon: ReactNode
}

export const MenuItemLink = ({ className, href, caption, icon }: IMenuItemLinkProps) => {

    return <li className={className}>
        <a href={href}>
            {icon}
            <span>{caption}</span>
        </a>
    </li>
}

interface IMenuItemProps {
    className?: string
    children: ReactNode
    key: string
}

export const MenuItem = ({ className, children }: IMenuItemProps) => {

    return <li className={className}>
        {children}
    </li>
}

interface IProps {
    className?: string
    children: ReactNode[]
    isSubMenu: boolean
}

export const Menu = ({ children, className, isSubMenu = false }: IProps) => {
    const rootClass = isSubMenu ? styles.sub_menu : styles.menu
    const cssClass = className ? `${rootClass} ${className}` : rootClass
    return <ul className={cssClass}>
        {children.map(c => c)}
    </ul>
}