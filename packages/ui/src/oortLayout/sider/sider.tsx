import { ReactNode, useState } from "react"
import { Drawer } from "antd"
import { CloseCircleIcon } from "../../icons"
import styles from "./sider.module.less"
import { BurgerMenuIcon } from "./burgerMenuIcon"

interface IProps {
    children: ReactNode
}

export const Sider = ({ children }: IProps) => {

    const [ isMenuVisible, setMenuVisible ] = useState(false)

    const RenderDrawer = () => {
        return <Drawer
            title="Menu"
            className={styles.top_header_menu}
            closeIcon={<CloseCircleIcon />}
            placement='left'
            onClose={() => setMenuVisible(false)}
            open={isMenuVisible}
          >
             {children}
          </Drawer>
    }

    return <>
        {RenderDrawer()}
        <div onClick={() => setMenuVisible(true)}><BurgerMenuIcon className={styles.burger_icon}/></div>
    </>
}