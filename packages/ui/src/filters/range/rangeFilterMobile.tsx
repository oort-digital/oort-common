import { useRef } from 'react'
import { debounceFunction } from '../../utils'
import { IMobileFilterItemProps } from '../layout/filterLayoutMobile'
import { RangeFilterContent, RangeValue } from './rangeFilterContent'


interface IProps extends IMobileFilterItemProps {
    values: [RangeValue, RangeValue]
    min?: number,
    max?: number
    onChange: (values: [RangeValue, RangeValue]) => void;
}

export const RangeFilterMobile = ({ onChange, values, min, max }: IProps) => {
    
    const onChangeDebounced = useRef(debounceFunction(onChange, 300)).current;

    const onMinValueChange = (value: RangeValue) => {
        onChangeDebounced([value as RangeValue, values[1]])
    };

    const onMaxValueChange = (value: RangeValue) => {
        onChangeDebounced([values[0], value as RangeValue])
    };

    return <RangeFilterContent
            onMaxValueChange={onMaxValueChange}
            onMinValueChange={onMinValueChange}
            values={values}
            min={min}
            max={max} />
}
