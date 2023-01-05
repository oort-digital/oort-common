import { IWeb3 } from "../../connectModal"
import { INavItems } from "../navMenu"

export interface IAsideProps {
    navItems: INavItems
    web3?: IWeb3
    isDev?: boolean
    //for testing
    isActiveFunc?: (href: string) => boolean
}