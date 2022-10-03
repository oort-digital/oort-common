import { ReactNode } from "react";
import styles from './menu.module.less';
import { Link } from "react-router-dom";

interface IMenuItemBtnProps {
    className?: string
    onClick?: () => void
    key: string
    caption: string
    iconBefore: ReactNode
    iconAfter: ReactNode
}

export const MenuItemBtn = ({ className, onClick, caption, iconBefore, iconAfter }: IMenuItemBtnProps) => <li onClick={onClick} className={className}>
    {iconBefore}
    <span className={styles.btn_caption}>{caption}</span>
    <span className={styles.btn_icon_after}>{iconAfter}</span>
</li>

interface IMenuItemLinkProps {
    className?: string
    href: string
    key: string
    caption: string
    icon: ReactNode
    reactRouterLink: boolean
}

export const MenuItemLink = ({ className, href, caption, icon, reactRouterLink }: IMenuItemLinkProps) => {

    const captionElement = <>{icon}<span>{caption}</span></>

    return <li className={className}>
        {
            reactRouterLink ? 
                <Link to={href}>{captionElement}</Link> :
                <a href={href}>{captionElement}</a>
        }
    </li>
}

interface IMenuItemProps {
    className?: string
    children: ReactNode
    key: string
}

export const MenuItem = ({ className, children }: IMenuItemProps) => <li className={className}>{children}</li>

interface IProps {
    className?: string
    children: ReactNode[]
}

export const Menu = ({ children, className }: IProps) => {
    const cssClass = className ? `${styles.menu} ${className}` : styles.menu
    return <ul className={cssClass}>
        {children.map(c => c)}
    </ul>
}