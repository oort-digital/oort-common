import { useState } from 'react'
import { PopoverFilter } from "oort/packages/ui"
import "./rangeFilter.less"
import { RangeFilterContent } from './rangeFilterContent'

export type RangeValue = number | undefined

interface IProps {
    title: string
    popoverTitle: string
    values: [RangeValue, RangeValue]
    min?: number,
    max?: number
    onChange: (values: [RangeValue, RangeValue]) => void;
}

export const RangeFilter = ({title, popoverTitle, onChange, values, min, max }: IProps) => {
    
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
        onClear={() => onChange([undefined, undefined])}>
        <RangeFilterContent
            onMaxValueChange={onMaxValueChange}
            onMinValueChange={onMinValueChange}
            values={intrenalValues}
            min={min}
            max={max}/>
    </PopoverFilter>
    
}
