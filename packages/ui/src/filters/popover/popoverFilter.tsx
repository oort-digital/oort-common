import { ReactNode, useState } from 'react'
import styles from "./popoverFilter.module.less"
import { Button, Popover } from "antd"
import { ChevronDownOutlineIcon, CloseIcon } from '../../icons'

export type RangeValue = number | undefined

interface IProps {
    title: ReactNode
    subTitle?: ReactNode
    triggerBtnClassName?: string
    popoverClassName?: string
    isClear: boolean
    onClear: () => void
    popoverTitle: string
    children: ReactNode
    onSubmit: () => void
    submitDisabled?: boolean
    onVisibleChange?: (isVisible: boolean) => void
}

export const PopoverFilter = ({title, subTitle, triggerBtnClassName, popoverTitle, popoverClassName, isClear, onClear, children, onSubmit, onVisibleChange, submitDisabled}: IProps) => {

    const [visible, setVisible] = useState(false)

    const submit = () => {
        onSubmit()
        setVisible(false)
    }

    const onVisibleChange_ = (isVisible: boolean) => {
        setVisible(isVisible)
        if(onVisibleChange) {
            onVisibleChange(isVisible)
        }
    }

    const renderContent = () => <div className={`${styles.popover_content} ${popoverClassName || ''}`}>
        <div className={styles.title}>{popoverTitle}</div>
        {children}
        <div>
            <Button className={styles.cancel} onClick={() => setVisible(false)}>Cancel</Button>
            <Button className={styles.apply} onClick={submit} disabled={submitDisabled} type='primary'>Apply</Button>
        </div>
    </div>

    const btnIcons = <>
        {
            isClear ? null :
            <span className='icon' onClick={(e) =>{ e.stopPropagation(); onClear();}}>
                <CloseIcon size={8} />
            </span>
        }
        <ChevronDownOutlineIcon size={16} className='icon' />
    </>


    const renderTitleAndSubTitle = () => <>
        <div className={styles.title_outer}>{title}</div>
        <div className={styles.sub_title_outer}>{subTitle}{btnIcons}</div>
    </>

    const renderSingleTitle = () => <>
        <span className={styles.single_title}>{title}</span>
        {btnIcons}
    </>

    let btnClassName = `${styles.trigger_btn} ${triggerBtnClassName ?? ''}`
    btnClassName = `${btnClassName} ${isClear ? '' : 'filled'}`

    return <Popover
        style={{"backgroundColor":"#11151A"}}
        onOpenChange={onVisibleChange_}
        open={visible}
        placement="bottomRight"
        content={renderContent}
        trigger="click">
        <Button className={btnClassName} size="large">
            {subTitle ? renderTitleAndSubTitle() : renderSingleTitle() }
        </Button>
  </Popover>
}
