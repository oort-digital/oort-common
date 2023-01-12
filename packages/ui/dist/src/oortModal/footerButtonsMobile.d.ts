import React from 'react';
import { IFooterBtn } from './footerButtons';
interface IProps {
    okBtn?: IFooterBtn;
    cancelBtn?: IFooterBtn;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
    loading?: boolean;
    className?: string;
    disable?: boolean;
}
export declare function FooterButtonsMobile({ okBtn, cancelBtn, onCancel, onOk, loading, className, disable }: IProps): JSX.Element;
export {};
//# sourceMappingURL=footerButtonsMobile.d.ts.map