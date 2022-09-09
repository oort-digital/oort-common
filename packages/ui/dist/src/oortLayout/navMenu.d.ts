/// <reference types="react" />
export declare enum MenuItemId {
    Dasboard = "dasboard",
    Rent = "rent",
    Mint = "mint"
}
export interface INavItem {
    href: string;
    isActive?: boolean;
}
export interface INavItems {
    dashboard: INavItem;
    rent: INavItem;
    mint: INavItem;
}
interface IProps {
    className?: string;
    navItems: INavItems;
}
export declare const NavMenu: ({ className, navItems }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=navMenu.d.ts.map