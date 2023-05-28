import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { CSSProperties } from "react";

interface IProps {
	style?: CSSProperties | undefined;
	className?: string
	value?: string
	placeholder: string
	onChange: (term: string) => void
	onSubmit: () => void
}

export const SearchInputSubmit = ({ value, placeholder, onChange, onSubmit, style, className }: IProps) => <Input
	className={className}
	style={style}
	value={value}
	onPressEnter={onSubmit}
	onChange={e => onChange(e.target.value)}
	prefix={<SearchOutlined />}
	placeholder={placeholder}
	allowClear
	size="large" />
