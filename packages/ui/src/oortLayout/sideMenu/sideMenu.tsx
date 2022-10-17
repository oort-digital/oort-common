import { ReactNode, useState } from "react"
import { Drawer } from "antd"
import { CloseCircleIcon } from "../../icons"
import "./sideMenu.less"
import { BurgerMenuIcon } from "./burgerMenuIcon"

interface IProps {
    children: ReactNode
}

export const SideMenu = ({ children }: IProps) => {

    const [ isMenuVisible, setMenuVisible ] = useState(false)

    const RenderDrawer = () => {
        return <Drawer
            title="Menu"
            className='top-header-menu'
            closeIcon={<CloseCircleIcon />}
            placement='left'
            onClose={() => setMenuVisible(false)}
            visible={isMenuVisible}
          >
             {children}
          </Drawer>
    }

    return <>
        {RenderDrawer()}
        <div onClick={() => setMenuVisible(true)}><BurgerMenuIcon className='burger-icon'/></div>
    </>
}