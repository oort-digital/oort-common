import React from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ButtonType } from 'antd/lib/button';
export interface IFooterBtn {
    text: string | undefined;
    size?: SizeType;
    type?: ButtonType;
    icon?: React.ReactNode;
    href?: string;
}
interface IProps {
    okBtn?: IFooterBtn;
    cancelBtn?: IFooterBtn;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
    loading?: boolean;
    className?: string;
}
export declare function FooterButtonsMobile({ okBtn, cancelBtn, onCancel, onOk, loading, className }: IProps): JSX.Element;
export {};
//# sourceMappingURL=footerButtonsMobile.d.ts.map