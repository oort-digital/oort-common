import { SearchInputSubmit } from "./searchInputSubmit"

interface IProps {
	title: string
	value?: string
	placeholder: string
	onChange: (term: string) => void
}

export const SearchInputMobile = ({ value, placeholder, onChange }: IProps) => <SearchInputSubmit value={value} placeholder={placeholder} onSubmit={() => {}} onChange={onChange} />
