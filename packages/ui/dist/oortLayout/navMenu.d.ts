/// <reference types="react" />
export declare enum MenuItemId {
    Dasboard = "dasboard",
    Rent = "rent",
    Mint = "mint"
}
export interface IMenuItemHref {
    id: MenuItemId;
    href: string;
    isActive?: boolean;
}
interface IProps {
    className?: string;
    menuHrefs: IMenuItemHref[];
}
export declare const NavMenu: ({ className, menuHrefs }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=navMenu.d.ts.map