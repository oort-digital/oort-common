import React, { ReactNode } from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ButtonType } from 'antd/lib/button';
export interface IBtn {
    text: string;
    size?: SizeType;
    type?: ButtonType;
    icon?: React.ReactNode;
}
interface IProps {
    visible: boolean;
    title: string;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
    loading?: boolean;
    children: ReactNode;
    width?: string;
    className?: string;
    footer?: ReactNode;
}
export declare function OortModal({ className, title, onCancel, loading, children, visible, width, footer }: IProps): JSX.Element;
export {};
