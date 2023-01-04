import { IAsideProps } from "./typesAndInterfaces";
import { ReactNode } from "react";
interface IProps extends IAsideProps {
    className: string;
    logoLink?: ReactNode;
}
export declare const Aside: ({ className, navItems, web3, isActiveFunc, logoLink, testNfts }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=aside.d.ts.map