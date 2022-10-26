import { IWeb3 } from "../../connectModal"
import { INavItems } from "../navMenu"
import { ITestNfts } from "../typesAndInterfaces"

export interface IAsideProps {
    navItems: INavItems
    web3?: IWeb3
    testNfts?: ITestNfts
    //for testing
    isActiveFunc?: (href: string) => boolean
}