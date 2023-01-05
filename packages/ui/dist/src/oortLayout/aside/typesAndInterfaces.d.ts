import { IWeb3 } from "../../connectModal";
import { INavItems } from "../navMenu";
export interface IAsideProps {
    navItems: INavItems;
    web3?: IWeb3;
    isDev?: boolean;
    isActiveFunc?: (href: string) => boolean;
}
//# sourceMappingURL=typesAndInterfaces.d.ts.map