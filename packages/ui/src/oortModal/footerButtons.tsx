import { Button} from 'antd'
import styles from "./footerButtons.module.less"
import React from 'react'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { ButtonType } from 'antd/lib/button';

export interface IFooterBtn {
    text: string
    size?: SizeType
    type?: ButtonType
    icon?: React.ReactNode
}

interface IProps {
    okBtn?: IFooterBtn
    firstBtn?: IFooterBtn
    secondBtn?: IFooterBtn
    cancelBtn?: IFooterBtn
    onOk?: (e: React.MouseEvent<HTMLElement>) => void
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void
    onFistOk?: (e: React.MouseEvent<HTMLElement>) => void
    onSecondOk?: (e: React.MouseEvent<HTMLElement>) => void
    loading?: boolean
    className?: string
}

export function FooterButtons({okBtn, cancelBtn, onCancel, onOk, loading, className, firstBtn, secondBtn, onFistOk, onSecondOk }: IProps) {

    let cssClass = `${styles.footer_buttons} footer-buttons`
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
