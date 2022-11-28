import { useState } from 'react'
import { PopoverFilter } from "../popover"
import "./rangeFilter.less"
import { RangeFilterContent } from './rangeFilterContent'

export type RangeValue = number | undefined

interface IProps {
    title: string
    popoverTitle: string
    values: [RangeValue, RangeValue]
    min?: number
    max?: number
    open?: boolean
    showTriggerButton?: boolean
    onChange: (values: [RangeValue, RangeValue]) => void
    onVisibleChange?: (isVisible: boolean) => void
    triggerElement?: JSX.Element
}

export const RangeFilter = ({title, popoverTitle, onChange, values, min, max, open, showTriggerButton, onVisibleChange, triggerElement }: IProps) => {
    
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
        open={open}
        showTriggerButton={showTriggerButton}
        onVisibleChange={onVisibleChange}
        triggerElement={triggerElement}
        onClear={() => onChange([undefined, undefined])}>
        <RangeFilterContent
            onMaxValueChange={onMaxValueChange}
            onMinValueChange={onMinValueChange}
            values={intrenalValues}
            min={min}
            max={max}/>
    </PopoverFilter>
    
}
