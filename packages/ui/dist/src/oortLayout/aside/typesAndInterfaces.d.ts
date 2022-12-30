import { IWeb3 } from "../../connectModal";
import { INavItems } from "../navMenu";
import { ITestNfts } from "../typesAndInterfaces";
export interface IAsideProps {
    navItems: INavItems;
    web3?: IWeb3;
    testNfts?: ITestNfts;
    isDev?: boolean;
    isActiveFunc?: (href: string) => boolean;
}
//# sourceMappingURL=typesAndInterfaces.d.ts.map