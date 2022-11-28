import React, { ReactNode } from 'react'
import { InputNumber, Space } from "antd"
import "./rangeFilterContent.less"

export type RangeValue = number | undefined

interface IProps {
    values: [RangeValue, RangeValue]
    min?: number,
    max?: number
    rangeIcon?: ReactNode
    onMinValueChange: (value: RangeValue) => void
    onMaxValueChange: (value: RangeValue) => void
}

export const RangeFilterContent = ({ onMinValueChange, onMaxValueChange, values, min, max }: IProps) => <Space className='range-filter-content'>
    <span className='label'>From</span>
    <InputNumber
        className='from-input'
        size="large"
        min={min}
        max={values[1] || max}
        value={values[0]}
        onChange={value =>{
            if(value){
                onMinValueChange(value)
            }
        }} />

    <span className='label'>To</span>
    <InputNumber
        className='to-input'
        size="large"
        min={values[0] || min}
        max={max}
        value={values[1]}
        onChange={value =>{
            if(value){
                onMaxValueChange(value)
            }
        }}/>
</Space>
