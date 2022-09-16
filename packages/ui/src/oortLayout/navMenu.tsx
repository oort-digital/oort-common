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
    //for testing
    isActiveFunc?: (href: string) => boolean
    className?: string,
    navItems: INavItems
}

interface INavItemInternal {
    caption: string
    icon?: ReactNode
}

const dashboardInternal = {
    caption: 'dashboard',
    icon: <DashboardIcon />,
}

const rentInternal = {
    caption: 'rent app',
    icon: <RentAppIcon />
}

const mintInternal = {
    caption: 'mint',
    icon: <MintIcon />
}

const gameHubInternal = {
    caption: 'game hub',
    icon: <GameHubIcon />,
    games: {
        caption: 'games'
    },
    nfts: {
        caption: 'Nfts'
    }
}

const isHrefActive = (href: string) => {
    return true
}

const RenderPanelHeader = ({ caption, icon }: INavItemInternal) => {
    const i = <span className={styles.icon}>{icon}</span>
    return <div className={styles.header}>{i}{caption}</div>
}

export const NavMenu = ({ className, navItems, isActiveFunc }: IProps) => {

    const isActive = isActiveFunc || isHrefActive;

    const getPanelClass = (hrefs: string[]): string => {
        
        if(hrefs.some(isActive)) {
            return `${styles.collapse_panel} ${styles.active}`
        }

        return styles.collapse_panel
        
    }

    const RenderItem = (href: string, { caption, icon }: INavItemInternal) => {
        const activeCss = isActive(href) ? styles.active : ''
        const i = <span className={styles.icon}>{icon}</span>
        return <MenuItemLink key={caption} className={activeCss} href={href} caption={caption} icon={i} />
    }

    const { dashboard, gameHub } = navItems

    return <Menu className={`${styles.root} ${className || ''}`}>
        {RenderItem(dashboard, dashboardInternal)}
        {/* {RenderMenuItem(navItems.rent, navItemsInternal.rent)} */}
            <Collapse ghost expandIconPosition="right">
                <Panel key="1" className={getPanelClass([gameHub.games, gameHub.nfts])} header={RenderPanelHeader(gameHubInternal)}>
                    <Menu>
                        {RenderItem(gameHub.games, gameHubInternal.games)}
                        {RenderItem(gameHub.nfts, gameHubInternal.nfts)}
                    </Menu>
                </Panel>
            </Collapse>

        {/* {RenderMenuItem(navItems.mint, navItemsInternal.mint)} */}
    </Menu>
}
