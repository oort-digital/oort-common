import React, { ReactNode } from "react";
import { DashboardIcon, MintIcon, RentAppIcon } from "../icons";
import { Menu, MenuItemLink } from "./menu";
import { logger } from "@oort/logger";
import styles from './navMenu.module.css';

export enum MenuItemId {
    Dasboard = 'dasboard',
    Rent = 'rent',
    Mint = 'mint'
}

export interface IMenuItemHref {
    id: MenuItemId
    href: string
}

interface IProps {
    className?: string,
    menuHrefs: IMenuItemHref[]
}

interface IMenuItem {
    id: MenuItemId
    caption: string
    icon: ReactNode
}

var MenuItemsMap: { [id: string]: IMenuItem; } = { }

MenuItemsMap[MenuItemId.Dasboard] = {
    id: MenuItemId.Dasboard,
    caption: 'dashboard',
    icon: <DashboardIcon />
}

MenuItemsMap[MenuItemId.Rent] = {
    id: MenuItemId.Rent,
    caption: 'rent app',
    icon: <RentAppIcon />
}
MenuItemsMap[MenuItemId.Mint] = {
    id: MenuItemId.Mint,
    caption: 'mint',
    icon: <MintIcon />
}

const RenderMenuItem = (miHref: IMenuItemHref, curHost: string) => {

    debugger
    const { id, href } = miHref

    const item = MenuItemsMap[id]

    if(!item) {
        logger.warn(`Item ${id} not found`)
        return null
    }

    const url = new URL(href)

    const activeCss = url.hostname === curHost ? styles.active : ''

    const { caption, icon } = item

    const i = <span className={styles.icon}>{icon}</span>
    return <MenuItemLink key={caption} className={activeCss} href={href} caption={caption} icon={i} />
}

export const NavMenu = ({ className, menuHrefs }: IProps) => {

    const curHost = window.location.hostname
    return <Menu className={`${styles.root} ${className || ''}`}>
    {menuHrefs.map(it => RenderMenuItem(it, curHost))}
    </Menu>
}