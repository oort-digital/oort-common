import { ReactNode, useState } from 'react'
import styles from "./popoverFilter.module.less"
import { Button, Popover } from "antd"
import { ChevronDownOutlineIcon, CloseIconOld } from '../../icons'
import { logger } from '@oort/logger'
import { TooltipPlacement } from 'antd/es/tooltip'

export type RangeValue = number | undefined

interface IProps {
    title: ReactNode
    subTitle?: ReactNode
    triggerBtnClassName?: string
    popoverClassName?: string
    popoverTitleClassName?: string
    applyButtonClassName?: string
    cancelButtonClassName?: string
    isClear?: boolean
    onClear?: () => void
    open?: boolean
    showTriggerButton?: boolean
    popoverTitle: string
    children: ReactNode
    onSubmit: () => void
    submitDisabled?: boolean
    onVisibleChange?: (isVisible: boolean) => void
    //returns space between bottom of button and bottom of the window then
    onBottomSpaceHeightChange?: (heigth: number) => void
    triggerElement?: JSX.Element
    placement?: TooltipPlacement
}

export const PopoverFilter = ({
    title, subTitle, triggerBtnClassName, popoverTitle, popoverClassName,
    popoverTitleClassName, applyButtonClassName, cancelButtonClassName,
    isClear, onClear, children, onSubmit, onVisibleChange, submitDisabled,
    onBottomSpaceHeightChange, open, showTriggerButton = true, triggerElement,
    placement = "bottomRight"}: IProps) => {
    
    const [visible, setVisible] = useState(!!open)

    if(open !== undefined && visible !== open) {
        setVisible(open)
    }

    const submit = () => {
        onSubmit()
        onVisibleChange_(false)
    }

    const cancel = () => {
        onVisibleChange_(false)
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
            <Button className={`${styles.cancel} ${cancelButtonClassName}`} onClick={cancel}>Cancel</Button>
            <Button className={`${styles.apply} ${applyButtonClassName}`} onClick={submit} disabled={submitDisabled} type='primary'>Apply</Button>
        </div>
    </div>

    const renderClose = () => {
        if(isClear || !onClear) {
            return null
        }
        return <span className='icon' onClick={(e) =>{ e.stopPropagation(); onClear();}}>
            <CloseIconOld size={8} />
        </span>
    }

    const btnIcons = <>
        { renderClose() }
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

    const renderTriggerBtn = () => {
        if(!showTriggerButton) {
            return null
        }

        if(triggerElement) {
            return triggerElement
        }

        return <Button ref={setBtnRef} className={btnClassName} size="large">
            {subTitle ? renderTitleAndSubTitle() : renderSingleTitle() }
        </Button>
    }

    return <Popover
        style={{"backgroundColor":"#11151A"}}
        onOpenChange={onVisibleChange_}
        open={visible}
        placement={placement}
        content={renderContent}
        trigger="click">
        {renderTriggerBtn()}
  </Popover>
}
