import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { INavItems } from "./navMenu";
interface IProps {
    children: ReactNode;
    navItems: INavItems;
    web3?: IWeb3;
    isActiveFunc?: (href: string) => boolean;
}
export declare const Layout: ({ navItems, children, web3, isActiveFunc }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=layout.d.ts.map