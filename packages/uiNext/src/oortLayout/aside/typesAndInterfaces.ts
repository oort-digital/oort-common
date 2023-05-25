import { ConnectorNames } from "@oort-digital/web3-connectors"
import { IWeb3 } from "../../connectModal"
import { INavItems } from "../navMenu"

export interface IAsideProps {
    supportedWallets: ConnectorNames[]
    navItems: INavItems
    web3?: IWeb3
    isDev?: boolean
    //for testing
    isActiveFunc?: (href: string) => boolean
}