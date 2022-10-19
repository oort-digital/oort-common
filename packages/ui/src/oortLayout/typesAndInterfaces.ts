import { ReactNode } from "react"
import { IWeb3 } from "../connectModal"
import { INavItems } from "./navMenu"

export interface ILayoutProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
    className?: string
    //for testing
    isActiveFunc?: (href: string) => boolean
}