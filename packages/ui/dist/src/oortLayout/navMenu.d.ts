/// <reference types="react" />
export declare enum MenuItemId {
    Dasboard = "dasboard",
    Rent = "rent",
    Minting = "minting"
}
export declare type NavItemType = string | {
    href: string;
    reactRouterLink: boolean;
};
export interface INavItems {
    dashboard: NavItemType;
    minting: {
        mutation: NavItemType;
        claim: NavItemType;
        faucet?: NavItemType;
    };
    rent: {
        lend: NavItemType;
        borrow: NavItemType;
        heroes: NavItemType;
        activity: NavItemType;
    };
    gameHub: {
        games: NavItemType;
        nfts: NavItemType;
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