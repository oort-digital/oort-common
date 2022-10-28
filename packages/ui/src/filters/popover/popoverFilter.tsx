import { ReactNode, useState } from 'react'
import styles from "./popoverFilter.module.less"
import { Button, Popover } from "antd"
import { ChevronDownOutlineIcon, CloseIcon } from '../../icons'
import { logger } from '@oort/logger'

export type RangeValue = number | undefined

interface IProps {
    title: ReactNode
    subTitle?: ReactNode
    triggerBtnClassName?: string
    popoverClassName?: string
    popoverTitleClassName?: string
    applyButtonClassName?: string
    cancelButtonClassName?: string
    isClear: boolean
    onClear: () => void
    popoverTitle: string
    children: ReactNode
    onSubmit: () => void
    submitDisabled?: boolean
    onVisibleChange?: (isVisible: boolean) => void
    //returns space between bottom of button and bottom of the window then
    onBottomSpaceHeightChange?: (heigth: number) => void
}

export const PopoverFilter = ({
    title, subTitle, triggerBtnClassName, popoverTitle, popoverClassName,
    popoverTitleClassName, applyButtonClassName, cancelButtonClassName,
    isClear, onClear, children, onSubmit, onVisibleChange, submitDisabled,
    onBottomSpaceHeightChange}: IProps) => {

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
        <div className={`${styles.title} ${popoverTitleClassName}`}>{popoverTitle}</div>
        {children}
        <div>
            <Button className={`${styles.cancel} ${cancelButtonClassName}`} onClick={() => setVisible(false)}>Cancel</Button>
            <Button className={`${styles.apply} ${applyButtonClassName}`} onClick={submit} disabled={submitDisabled} type='primary'>Apply</Button>
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

    const setBtnRef = (btnElement: HTMLElement | null) => {
        if(btnElement && onBottomSpaceHeightChange) {
            //calculate space between bottom of button and bottom of the window
            const rect = btnElement.getBoundingClientRect()
            var bottomSpaceHeight = window.innerHeight - rect.top + btnElement.offsetHeight
            logger.debug(`Popover filter. BottomSpaceHeight: ${bottomSpaceHeight}`)
            onBottomSpaceHeightChange(bottomSpaceHeight)
        }
    }

    return <Popover
        style={{"backgroundColor":"#11151A"}}
        onOpenChange={onVisibleChange_}
        open={visible}
        placement="bottomRight"
        content={renderContent}
        trigger="click">
        <Button ref={setBtnRef} className={btnClassName} size="large">
            {subTitle ? renderTitleAndSubTitle() : renderSingleTitle() }
        </Button>
  </Popover>
}
