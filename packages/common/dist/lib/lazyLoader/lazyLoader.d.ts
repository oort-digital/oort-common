import { ReactNode } from "react";
interface IProps {
    desktop: ReactNode;
    mobile: ReactNode;
    tablet: ReactNode;
}
export declare const LazyLoader: ({ desktop, mobile, tablet }: IProps) => JSX.Element;
export {};
