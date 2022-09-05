import React, { ReactNode } from "react";
import { DashboardIcon, MintIcon, RentAppIcon } from "../icons";
import { Menu, MenuItemLink } from "./menu";
import styles from './navMenu.module.css';

interface IProps {
    className?: string
}

interface IMenuItem {
    href: string
    caption: string
    icon: ReactNode
}

const MenuItems: IMenuItem[] = [
{
    href: 'https://test-minting.netlify.app',
    caption: 'dashboard',
    icon: <DashboardIcon />
},
{
    href: 'https://test-minting.netlify.app',
    caption: 'rent app',
    icon: <RentAppIcon />
},
{
    href: 'https://test-minting.netlify.app',
    caption: 'mint',
    icon: <MintIcon />
},
{
    href: '',
    caption: 'menu Item 1',
    icon: <RentAppIcon />
},
{
    href: '',
    caption: 'Menu Item 2',
    icon: <RentAppIcon />
},
{
    href: '',
    caption: 'Menu Item 3',
    icon: <RentAppIcon />
}]



const RenderMenuItem = (item: IMenuItem, isActive: boolean) => {
    const { caption, href } = item

    const activeCss = isActive ? styles.active : ''

    const icon = <span className={styles.icon}>{item.icon}</span>
    return <MenuItemLink key={caption} className={activeCss} href={href} caption={caption} icon={icon} />
}

export const NavMenu = ({ className }: IProps) => <Menu className={`${styles.root} ${className || ''}`}>
{MenuItems.map((it, i) => RenderMenuItem(it, i === 0))}
</Menu>