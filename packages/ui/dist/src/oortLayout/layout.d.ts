import { ReactNode } from "react";
import { IWeb3 } from "./footerMenu";
import { INavItems } from "./navMenu";
interface IProps {
    children: ReactNode;
    navItems: INavItems;
    web3?: IWeb3;
}
export declare const Layout: ({ navItems, children, web3 }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=layout.d.ts.map