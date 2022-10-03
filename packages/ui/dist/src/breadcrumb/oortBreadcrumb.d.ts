/// <reference types="react" />
export interface IBreadcrumbItem {
    path?: string;
    name: string;
}
interface IPros {
    items: IBreadcrumbItem[];
    className?: string;
}
export declare const OortBreadcrumb: ({ items, className }: IPros) => JSX.Element;
export {};
//# sourceMappingURL=oortBreadcrumb.d.ts.map