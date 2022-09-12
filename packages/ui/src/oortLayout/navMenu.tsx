import { ReactNode } from "react";
import { DashboardIcon, GameHubIcon, MintIcon, RentAppIcon } from "../icons";
import { Menu, MenuItemLink } from "./menu";
import styles from './navMenu.module.less';

export enum MenuItemId {
    Dasboard = 'dasboard',
    Rent = 'rent',
    Mint = 'mint'
}

export interface INavItem {
    href: string
    isActive?: boolean
}

interface INavItemInternal {
    caption: string
    icon: ReactNode
}

export interface INavItems {
    dashboard: INavItem
    rent: INavItem
    mint: INavItem
    gameHub: INavItem
}

interface IProps {
    className?: string,
    navItems: INavItems
}

var navItemsInternal = {
    dashboard: {
        caption: 'dashboard',
        icon: <DashboardIcon />
    },
    rent: {
        caption: 'rent app',
        icon: <RentAppIcon />
    },
    mint: {
        caption: 'mint',
        icon: <MintIcon />
    },
    gameHub: {
        caption: 'game hub',
        icon: <GameHubIcon />
    }
}

const RenderMenuItem = ({ href, isActive }: INavItem, { caption, icon }: INavItemInternal) => {
    const activeCss = isActive ? styles.active : ''
    const i = <span className={styles.icon}>{icon}</span>
    return <MenuItemLink key={caption} className={activeCss} href={href} caption={caption} icon={i} />
}

export const NavMenu = ({ className, navItems }: IProps) => <Menu className={`${styles.root} ${className || ''}`}>
    {RenderMenuItem(navItems.dashboard, navItemsInternal.dashboard)}
    {RenderMenuItem(navItems.rent, navItemsInternal.rent)}
    {RenderMenuItem(navItems.gameHub, navItemsInternal.gameHub)}
    {RenderMenuItem(navItems.mint, navItemsInternal.mint)}
</Menu>
