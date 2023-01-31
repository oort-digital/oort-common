import { debounceFunction } from '@oort-digital/utils'
import { useRef } from 'react'
import { NumOrUndef, NumRange } from '../../typesAndInterfaces'
import { IMobileFilterItemProps } from '../layout/filterLayoutMobile'
import { RangeFilterContent } from './rangeFilterContent'


interface IProps extends IMobileFilterItemProps {
    values: NumRange
    min?: number
    max?: number
    onChange: (values: NumRange) => void;
}

export const RangeFilterMobile = ({ onChange, values, min, max }: IProps) => {
    
    const onChangeDebounced = useRef(debounceFunction(onChange, 300)).current;

    const onMinValueChange = (value: NumOrUndef) => {
        onChangeDebounced([value as NumOrUndef, values[1]])
    };

    const onMaxValueChange = (value: NumOrUndef) => {
        onChangeDebounced([values[0], value as NumOrUndef])
    };

    return <RangeFilterContent
            onMaxValueChange={onMaxValueChange}
            onMinValueChange={onMinValueChange}
            values={values}
            min={min}
            max={max} />
}
