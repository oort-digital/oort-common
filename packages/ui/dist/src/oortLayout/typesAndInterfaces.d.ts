import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { INavItems } from "./navMenu";
export interface ILayoutProps {
    children: ReactNode;
    navItems: INavItems;
    web3?: IWeb3;
    className?: string;
    isActiveFunc?: (href: string) => boolean;
}
//# sourceMappingURL=typesAndInterfaces.d.ts.map