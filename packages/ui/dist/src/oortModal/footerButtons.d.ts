import React from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ButtonType } from 'antd/lib/button';
export interface IFooterBtn {
    text: string;
    size?: SizeType;
    type?: ButtonType;
    icon?: React.ReactNode;
}
interface IProps {
    okBtn?: IFooterBtn;
    firstBtn?: IFooterBtn;
    secondBtn?: IFooterBtn;
    cancelBtn?: IFooterBtn;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
    onFistOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onSecondOk?: (e: React.MouseEvent<HTMLElement>) => void;
    loading?: boolean;
    className?: string;
}
export declare function FooterButtons({ okBtn, cancelBtn, onCancel, onOk, loading, className, firstBtn, secondBtn, onFistOk, onSecondOk }: IProps): JSX.Element;
export {};
//# sourceMappingURL=footerButtons.d.ts.map