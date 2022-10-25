import { ReactNode } from "react";
interface IMenuItemBtnProps {
    className?: string;
    onClick?: () => void;
    key?: string;
    caption: string;
    iconBefore: ReactNode;
    iconAfter: ReactNode;
}
export declare const MenuItemBtn: ({ className, onClick, caption, iconBefore, iconAfter }: IMenuItemBtnProps) => JSX.Element;
interface IMenuItemLinkProps {
    className?: string;
    href: string;
    key: string;
    caption: string;
    icon: ReactNode;
    reactRouterLink: boolean;
}
export declare const MenuItemLink: ({ className, href, caption, icon, reactRouterLink }: IMenuItemLinkProps) => JSX.Element;
interface IMenuItemProps {
    className?: string;
    children: ReactNode;
    key: string;
}
export declare const MenuItem: ({ className, children }: IMenuItemProps) => JSX.Element;
interface IProps {
    className?: string;
    children: ReactNode[];
}
export declare const Menu: ({ children, className }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=menu.d.ts.map