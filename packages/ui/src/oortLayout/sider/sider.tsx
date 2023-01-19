import { ReactNode, useEffect, useState } from "react"
import { Drawer } from "antd"
import { CloseCircleIcon } from "../../icons"
import styles from "./sider.module.less"
import { BurgerMenuIcon } from "./burgerMenuIcon"
import { logger } from "@oort-digital/logger"

interface IProps {
    children: ReactNode
}

const debug = (msg: string) => logger.debug(`Sider. ${msg}`)

export const Sider = ({ children }: IProps) => {

    const [ isMenuVisible, setMenuVisible ] = useState(false)

    const closeMenu = () => setMenuVisible(false)

    const RenderDrawer = () => <Drawer
            title="Menu"
            className={styles.top_header_menu}
            closeIcon={<CloseCircleIcon />}
            placement='left'
            onClose={closeMenu}
            open={isMenuVisible}>
        {children}
    </Drawer>

    useEffect(() => {
            
        var pushState = window.history.pushState;
        var replaceState = window.history.replaceState;

        window.history.pushState = function(data: any, unused: string, url?: string | URL | null | undefined) {
            closeMenu()
            debug('history.pushState')
            pushState.apply(window.history, [data, unused, url]);
        };

        window.history.replaceState = function(data: any, unused: string, url?: string | URL | null | undefined) {
            closeMenu()
            debug('history.replaceState')
            replaceState.apply(window.history, [data, unused, url]);
            closeMenu()
        };

        /*
        window.addEventListener('popstate', function() {
            debugger
            debug('popstate')
            // window.dispatchEvent(new Event('locationchange'))
        });
        */

        window.addEventListener('beforeunload', function() {                 //   8   - Window onload
            debug('beforeunload')
            closeMenu()
        });
    }, [])
        

    return <>
        {RenderDrawer()}
        <div className={styles.burger_icon} onClick={() => setMenuVisible(true)}><BurgerMenuIcon /></div>
    </>
}