import { Collapse } from "antd";
import { DashboardIcon, GameHubIcon, MintIcon, RentAppIcon } from "../icons";
import { Menu, MenuItemLink } from "./menu";
import styles from './navMenu.module.less';

const { Panel } = Collapse;

export enum MenuItemId {
    Dasboard = 'dasboard',
    Rent = 'rent',
    Mint = 'mint'
}

export type NavItemType = string | {
    href: string
    reactRouterLink: boolean
}

export interface INavItems {
    dashboard: NavItemType
    mint: NavItemType
    rent: {
        lend: NavItemType
        borrow: NavItemType
        heroes: NavItemType
        activity: NavItemType
    }
    gameHub: {
        games: NavItemType
        nfts: NavItemType
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
    icon?: JSX.Element
}

const dashboardInternal = {
    caption: 'dashboard',
    icon: <DashboardIcon />,
}

const rentInternal = {
    caption: 'rent app',
    icon: <RentAppIcon />,
    lend: 'Lend',
    borrow: 'Borrow',
    heroes: 'Our own NFTs',
    activity: 'Activity'

}

const mintInternal = {
    caption: 'mint',
    icon: <MintIcon />
}

const gameHubInternal = {
    caption: 'game hub',
    icon: <GameHubIcon />,
    games: 'Games',
    nfts: "NFTs"
}

type StringMap = { [id: string]: string; }
type NavItemMap = { [id: string]: NavItemType; }

const getChildCaptions = (item: INavItemInternal): StringMap => {

    const map: StringMap = {}

    Object.entries(item).forEach(kvp => {

        const [ key, value ] = kvp

        if(key !== 'caption' || kvp[0] !== 'icon') {
            map[key] = value
        }
    })

    return map
}

const isHrefActive = (href: string) => {
    const curLocation = window.location
    const location = new URL(href)

    if(curLocation.origin === location.origin) {
        if(curLocation.pathname === '/' || curLocation.pathname === location.pathname) {
            return true
        }
    }

    return false
}

const RenderPanelHeader = ({ caption, icon }: INavItemInternal) => {
    const i = <span className={styles.icon}>{icon}</span>
    return <div className={styles.header}>{i}{caption}</div>
}

export const NavMenu = ({ className, navItems, isActiveFunc }: IProps) => {

    const isActive = isActiveFunc || isHrefActive;

    const getPanelActive = (hrefs: string[]): boolean => hrefs.some(isActive)

    const getHRef = (it: NavItemType) => typeof it  === 'string' ? it : it.href

    const RenderItem = (it: NavItemType, { caption, icon }: INavItemInternal) => {

        let href 
        let reactRouterLink = false

        if(typeof it === 'string') {
            href = it
        }
        else {
            href = it.href
            reactRouterLink = it.reactRouterLink
        }

        const activeCss = isActive(href) ? styles.active : ''
        const i = <span className={styles.icon}>{icon}</span>
        return <MenuItemLink reactRouterLink={reactRouterLink || false} key={caption} className={activeCss} href={href} caption={caption} icon={i} />
    }

    const RenderCollapse = (rootItem: INavItemInternal, navItemMap: NavItemMap) => {
        const key = 1;
        const childCaptionsMap = getChildCaptions(rootItem)
        const hrefEntries = Object.entries(navItemMap)
        const hrefs = hrefEntries.map(kvp => getHRef(kvp[1]))

        const isPanelActive = getPanelActive(hrefs)

        let defaultActiveKey: number | undefined
        let panelClass = styles.collapse_panel
        
        if(isPanelActive) {
            panelClass = `${styles.active_header} ${panelClass}`
            defaultActiveKey = key
        }

        return <Collapse defaultActiveKey={defaultActiveKey} ghost expandIconPosition="end">
                <Panel key={key} className={panelClass} header={RenderPanelHeader(rootItem)}>
                    <Menu>
                        {
                            hrefEntries.map(kvp => {
                                const [key, navItem] = kvp
                                return RenderItem(navItem, { caption: childCaptionsMap[key] } )
                            })
                        }
                    </Menu>
                </Panel>
            </Collapse>
    }

    const { dashboard, rent, gameHub, mint } = navItems

    return <Menu className={`${styles.root} ${className || ''}`}>
        {RenderItem(dashboard, dashboardInternal)}
        {RenderCollapse(rentInternal, rent)}
        {RenderCollapse(gameHubInternal, gameHub)}
        {RenderItem(mint, mintInternal)}
    </Menu>
}
