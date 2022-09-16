import { Collapse } from "antd";
import { ReactNode } from "react";
import { DashboardIcon, GameHubIcon, MintIcon, RentAppIcon } from "../icons";
import { Menu, MenuItemLink } from "./menu";
import styles from './navMenu.module.less';

const { Panel } = Collapse;

export enum MenuItemId {
    Dasboard = 'dasboard',
    Rent = 'rent',
    Mint = 'mint'
}

export interface INavItem {
    href: string
    isActive?: boolean
}

export interface IRentNav {
    lend: string
    borrow: string
    heroes: string
    activities: string
}

export interface IGameHubNav {
    games: string
    nfts: string
}

export interface INavItems {
    dashboard: string
    rent: IRentNav
    mint: string
    gameHub: {
        games: string
        nfts: string
    }
}

interface IProps {
    className?: string,
    navItems: INavItems
}

interface INavItemInternal {
    caption: string
    icon?: ReactNode
}

var navItemsInternal = {
    dashboard: {
        caption: 'dashboard',
        icon: <DashboardIcon />,
    },
    rent: {
        caption: 'rent app',
        icon: <RentAppIcon />,
        subItems: []
    },
    mint: {
        caption: 'mint',
        icon: <MintIcon />
    },
    gameHub: {
        caption: 'game hub',
        icon: <GameHubIcon />,
        games: {
            caption: 'games'
        },
        nfts: {
            caption: 'Nfts'
        }
        
    }
}

const isHrefActive = (href: string) => {
    return false
}

const RenderItem = (href: string, { caption, icon }: INavItemInternal) => {
    const activeCss = isHrefActive(href) ? styles.active : ''
    const i = <span className={styles.icon}>{icon}</span>
    return <MenuItemLink key={caption} className={activeCss} href={href} caption={caption} icon={i} />
}

const RenderPanelHeader = ({ caption, icon }: INavItemInternal) => {
    const i = <span className={styles.icon}>{icon}</span>
    return <div className={styles.header}>{i}{caption}</div>
}

export const NavMenu = ({ className, navItems }: IProps) => {

    return <Menu className={`${styles.root} ${className || ''}`}>
        {RenderItem(navItems.dashboard, navItemsInternal.dashboard)}
        {/* {RenderMenuItem(navItems.rent, navItemsInternal.rent)} */}
            <Collapse ghost expandIconPosition="right">
                <Panel key="1" className={styles.collapse_panel} header={RenderPanelHeader(navItemsInternal.gameHub)}>
                    <Menu isSubMenu={true}>
                        {RenderItem(navItems.gameHub.games, navItemsInternal.gameHub.games)}
                        {RenderItem(navItems.gameHub.nfts, navItemsInternal.gameHub.nfts)}
                    </Menu>
                </Panel>
            </Collapse>

        {/* {RenderMenuItem(navItems.mint, navItemsInternal.mint)} */}
    </Menu>
}
