import { CSSProperties, useRef, useState } from "react"
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { debounceFunction } from "../../utils"

interface IProps {
	style?: CSSProperties | undefined;
	className?: string
	value?: string
	placeholder: string
	onChange: (term: string) => void
}

export const SearchInput = ({ value, placeholder, onChange, style, className }: IProps) => {

	const [internalVal, setInternalVal] = useState(value)
	const onChangeDebounced = useRef(debounceFunction(onChange, 300)).current;

	const onChangeInternal = (term: string) => {
		setInternalVal(term)
		onChangeDebounced(term)
	} 

	return <Input
		style={style}
		className={className}
		value={internalVal}
		onChange={e => onChangeInternal(e.target.value)}
		prefix={<SearchOutlined />}
		placeholder={placeholder}
		allowClear
		size="large" />
}
