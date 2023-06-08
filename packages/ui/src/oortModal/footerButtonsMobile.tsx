import { Button} from 'antd'
import "./footerButtonsMobile.less"
import React from 'react'
import { ButtonType } from 'antd/lib/button';
import { IFooterBtn } from './footerButtons';


interface IProps extends IDepricatedProps {
    buttons?: IFooterBtn[]
    loading?: boolean
    className?: string
}

interface IDepricatedProps {
    /**
    * @deprecated Use Buttons
    */
    okBtn?: IFooterBtn
    /**
    * @deprecated Use Buttons
    */
    cancelBtn?: IFooterBtn
    /**
    * @deprecated Use IFooterBtn.onClick
    */
    onOk?: (e: React.MouseEvent<HTMLElement>) => void
    /**
    * @deprecated Use IFooterBtn.onClick
    */
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void
    /**
    * @deprecated Use Buttons
    */
    disable?: boolean
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

function FooterButtonsMobileDepricated({ okBtn, cancelBtn, onCancel, onOk, loading, className, disable }: IProps) {

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
    { cancelBtn ? renderButton('cancel-btn', cancelBtn, 'Cancel', disable || loading, false, cancelBtn.type ?? "default", onCancel) : null }
    { okBtn ? renderButton('ok-btn', okBtn, 'Ok', disable, loading, okBtn.type ?? "primary", onOk) : null }
    </div>
}

export function FooterButtonsMobile(props: IProps) {

    const {buttons = [], loading, className } = props

    if(buttons.length === 0) {
        return FooterButtonsMobileDepricated(props)
    }

    return FooterButtonsMobileDepricated(props)
}
