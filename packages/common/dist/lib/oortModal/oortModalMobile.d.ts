import { ReactNode } from "react";
interface IModalTitle {
    txt: string;
    underHeader: boolean;
}
declare type TitleType = string | ReactNode | IModalTitle;
interface IProps {
    visible: boolean;
    title?: TitleType;
    onCancel?: () => void;
    loading?: boolean;
    children: ReactNode;
    className?: string;
    footer?: ReactNode;
    viewMode?: 'fullScreen' | 'topGap';
}
export declare const OortModalMobile: ({ children, visible, footer, onCancel, loading, title, className, viewMode }: IProps) => JSX.Element;
export {};
