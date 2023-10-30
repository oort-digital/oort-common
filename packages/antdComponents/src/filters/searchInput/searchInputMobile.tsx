import { CSSProperties } from "react";
import { SearchInputSubmit } from "./searchInputSubmit"

interface IProps {
	style?: CSSProperties | undefined;
	className?: string
	title: string
	value?: string
	placeholder: string
	onChange: (term: string) => void
}

export const SearchInputMobile = ({ value, placeholder, onChange, style, className }: IProps) =>
	<SearchInputSubmit className={className} style={style} value={value} placeholder={placeholder} onSubmit={() => {}} onChange={onChange} />
