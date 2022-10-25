import { ReactNode } from "react"
import { IWeb3 } from "../connectModal"
import { INavItems } from "./navMenu"

export interface ILayoutProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
    testNfts?: ITestNfts
    className?: string
    //for testing
    isActiveFunc?: (href: string) => boolean
}

export interface ITestNfts {
    mintErc721: () => void
    mintErc1155: () => void
    isEnabled: boolean
    isLoading: boolean
}