import { Button} from 'antd'
import styles from "./footerButtons.module.less"
import React from 'react'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { ButtonType } from 'antd/lib/button';
import classNames from 'classnames';

export interface IFooterBtn {
    className?: string
    text: string | undefined
    size?: SizeType
    type?: ButtonType
    icon?: React.ReactNode
    href?: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    isMainButton?: boolean
    /**
    * @deprecated Use showLoadingIcon
    */
    loading?: boolean
    disabled?: boolean
}

interface IDepricatedProps {
    /**
    * @deprecated Use Buttons
    */
    okBtn?: IFooterBtn
    /**
    * @deprecated Use Buttons
    */
    firstBtn?: IFooterBtn
    /**
    * @deprecated Use Buttons
    */
    secondBtn?: IFooterBtn
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
    * @deprecated Use IFooterBtn.onClick
    */
    onFistOk?: (e: React.MouseEvent<HTMLElement>) => void
    /**
    * @deprecated Use IFooterBtn.onClick
    */
    onSecondOk?: (e: React.MouseEvent<HTMLElement>) => void
}

interface IProps extends IDepricatedProps {
    buttons?: IFooterBtn[]
    loading?: boolean
    className?: string
}

function DepricatedFooterButtons({okBtn, cancelBtn, onCancel, onOk, loading, className, firstBtn, secondBtn, onFistOk, onSecondOk }: IProps) {

    let cssClass = styles.footer_buttons_depricated
    if(className) {
        cssClass = `${cssClass} ${className}`
    }

    if(cancelBtn && okBtn) {
        cssClass = `${cssClass} ${styles.two_buttons}`
    }
    else {
        cssClass = `${cssClass} ${styles.single_button}`
    }

    if (firstBtn && secondBtn) {
        cssClass = `${cssClass} ${styles.two_buttons}`
    }

    return <div className={cssClass}>
    { cancelBtn ? <Button className={styles.cancel_btn} disabled={loading}  size={cancelBtn.size ?? 'large'} type={cancelBtn.type} onClick={onCancel}>{cancelBtn.text}</Button> : null }
    { okBtn     ? <Button className={styles.ok_btn}     loading={loading}   size={okBtn.size ?? 'large'} type={okBtn.type ?? "primary"} onClick={onOk}>{okBtn.text}</Button> : null }
    { firstBtn  ? <Button className={styles.first_btn}  loading={loading}   size={firstBtn.size ?? 'large'} type={firstBtn.type ?? "primary"} onClick={onFistOk}>{firstBtn.text}</Button> : null }
    { secondBtn ? <Button className={styles.second_btn} loading={loading}   size={secondBtn.size ?? 'large'} type={secondBtn.type ?? "primary"} onClick={onSecondOk}>{secondBtn.text}</Button> : null }
    </div>
}

export function FooterButtons(props: IProps) {

    const {buttons = [], loading, className } = props

    if(buttons.length === 0) {
        return DepricatedFooterButtons(props)
    }

    const renderBtn = (btn: IFooterBtn) => {

        const { size, type, onClick, text } = btn

        const className = btn.isMainButton ? styles.main_btn : styles.btn

        let btnLoading = loading && !!btn.isMainButton
        let btnDisabled = btn.disabled
        
        if(loading && !btnLoading) {
            btnDisabled = true
        }

        return <Button key={btn.text} className={classNames(btn.className, className)} loading={btnLoading} disabled={btnDisabled} size={size ?? 'large'} type={type} onClick={onClick}>{text}</Button>
    }

    const cssClass = classNames(
        className,
        styles.footer_buttons,
        { [`${styles.single_button}`]: buttons.length === 1 },
        { [`${styles.two_buttons}`]: buttons.length === 2 })


    return <div className={cssClass}>
        {
            buttons.map(renderBtn)
        }
    </div>
}
