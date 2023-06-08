import { Button} from 'antd'
import classNames from 'classnames';
import { IFooterBtn } from './footerButtons';

interface IProps {
    buttons?: IFooterBtn[]
    loading?: boolean
    className?: string
}

export function useFooterButtons(props: IProps, styles: any): JSX.Element {

    const {buttons = [], loading, className } = props

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

    return <div className={cssClass}>{buttons.map(renderBtn)}</div>
}
