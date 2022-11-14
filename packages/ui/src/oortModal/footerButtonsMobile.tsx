import { Button} from 'antd'
import "./footerButtonsMobile.less"
import React from 'react'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { ButtonType } from 'antd/lib/button';

export interface IFooterBtn {
    text: string | undefined
    size?: SizeType
    type?: ButtonType
    icon?: React.ReactNode
    href?: string
}

interface IProps {
    okBtn?: IFooterBtn
    cancelBtn?: IFooterBtn
    onOk?: (e: React.MouseEvent<HTMLElement>) => void
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void
    loading?: boolean
    className?: string
    disable?:boolean
}

function renderButton(
    className: string,
    footerBtn: IFooterBtn,
    defaultText: string,
    disabled?: boolean,
    loading?: boolean,
    type?: ButtonType,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void) {

    const { size, text, href } = footerBtn

    const renderedBtn = <Button
        className={className}
        disabled={disabled}
        loading={loading}
        size={size ?? 'large'}
        type={type}
        onClick={onClick}>{text || defaultText}</Button>

    if(href) {
        return <a href={href}>{renderedBtn}</a>
    }

    return renderedBtn

}

export function FooterButtonsMobile({okBtn, cancelBtn, onCancel, onOk, loading, className,disable }: IProps) {

    let cssClass = 'footer-buttons-mobile'
    if(className) {
        cssClass = `${cssClass} ${className}`
    }

    if(cancelBtn && okBtn) {
        cssClass = `${cssClass} two-buttons`
    }
    else {
        cssClass = `${cssClass} single-button`
    }

    return <div className={cssClass}>
    { cancelBtn ? renderButton('cancel-btn', cancelBtn, 'Cancel',disable , loading, cancelBtn.type ?? "default", onCancel) : null }
    { okBtn ? renderButton('ok-btn', okBtn, 'Ok', disable, loading, okBtn.type ?? "primary", onOk) : null }
    </div>
}
