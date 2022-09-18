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
    dashboard: string;
    mint: string;
    rent: {
        lend: string;
        borrow: string;
        heroes: string;
        activity: string;
    };
    gameHub: {
        games: string;
        nfts: string;
    };
}
interface IProps {
    isActiveFunc?: (href: string) => boolean;
    className?: string;
    navItems: INavItems;
}
export declare const NavMenu: ({ className, navItems, isActiveFunc }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=navMenu.d.ts.map