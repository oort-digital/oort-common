import React from 'react'
import "./searchInput.less"
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

interface IProps {
	value?: string
	placeholder: string
	onChange: (term: string) => void
	onSubmit: () => void
}

export const SearchInputSubmit = ({ value, placeholder, onChange, onSubmit }: IProps) => <Input
	className="search-input"
	value={value}
	onPressEnter={onSubmit}
	onChange={e => onChange(e.target.value)}
	prefix={<SearchOutlined />}
	placeholder={placeholder}
	allowClear
	size="large" />
