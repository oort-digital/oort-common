import { useRef, useState } from "react"
import styles from "./searchInput.module.less"
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { debounceFunction } from "../../utils"


interface IProps {
	value?: string
	placeholder: string
	onChange: (term: string) => void
}

export const SearchInput = ({ value, placeholder, onChange }: IProps) => {

	const [internalVal, setInternalVal] = useState(value)
	const onChangeDebounced = useRef(debounceFunction(onChange, 300)).current;

	const onChangeInternal = (term: string) => {
		setInternalVal(term)
		onChangeDebounced(term)
	} 

	return <Input
		className={styles.search_input}
		value={internalVal}
		onChange={e => onChangeInternal(e.target.value)}
		prefix={<SearchOutlined />}
		placeholder={placeholder}
		allowClear
		size="large" />
}
