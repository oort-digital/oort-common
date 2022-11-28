import { TooltipPlacement } from 'antd/es/tooltip'
import { useState } from 'react'
import { PopoverFilter } from "../popover"
import "./rangeFilter.less"
import { RangeFilterContent } from './rangeFilterContent'

export type RangeValue = number | undefined

export interface IRangeFilterProps {
    title: string
    popoverTitle: string
    values: [RangeValue, RangeValue]
    min?: number
    max?: number
    visible?: boolean
    showTriggerButton?: boolean
    showClose?: boolean
    showCancel?: boolean
    showClear?: boolean
    onChange: (values: [RangeValue, RangeValue]) => void
    onVisibleChange?: (isVisible: boolean) => void
    placement?: TooltipPlacement
}

export const RangeFilter = ({placement, title, popoverTitle,
    onChange, values, min, max,
    visible: visible,
    showTriggerButton, showCancel,
    showClear, showClose, onVisibleChange }: IRangeFilterProps) => {
    
    const [intrenalValues, setInternalValues] = useState<[RangeValue, RangeValue]>(values)

    const isClear = values[0] === undefined && values[1] === undefined

    const onMinValueChange = (value: RangeValue) => {
        setInternalValues([value as RangeValue, intrenalValues[1]])
    };

    const onMaxValueChange = (value: RangeValue) => {
        setInternalValues([intrenalValues[0], value as RangeValue])
    };

    const onSubmit = () => {
        onChange(intrenalValues)
    }

    const renderTitleVal = (label: string, value: RangeValue) => {
        if(value === undefined){
            return null
        }
        return <>
                <span className='label'>{label}</span>
                <span className='value'>{value}</span>
            </>
    }

    const subTitle = isClear ? null : <span className='sub-title'>
        {renderTitleVal('From', values[0])}
        {renderTitleVal('To', values[1])}
    </span>

    return <PopoverFilter
        triggerBtnClassName='range-trigger-btn'
        onSubmit={onSubmit}
        title={title}
        subTitle={subTitle}
        popoverTitle={popoverTitle}
        isClear={isClear}
        visible={visible}
        showTriggerButton={showTriggerButton}
        showClose={showClose}
        showCancel={showCancel}
        showClear={showClear}
        onVisibleChange={onVisibleChange}
        placement={placement}
        onClear={() => onChange([undefined, undefined])}>
        <RangeFilterContent
            onMaxValueChange={onMaxValueChange}
            onMinValueChange={onMinValueChange}
            values={intrenalValues}
            min={min}
            max={max}/>
    </PopoverFilter>
    
}
