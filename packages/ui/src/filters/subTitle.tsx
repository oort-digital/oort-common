interface IProps {
	names: string[]
	len?: number
}

export const SubTitle = ({ names, len = 20 }: IProps) => {
	
	let subTitleText = ''
	let hidenCount = names.length;
	for(let i = 0; i < names.length; i++) {
		subTitleText = `${subTitleText}${names[i]}, `
		hidenCount--
		if(subTitleText.length > len) {
			subTitleText = subTitleText.cutLongString(len)
			break;
		}
	}

	if(subTitleText[subTitleText.length - 1] === ' ' && subTitleText[subTitleText.length - 2] === ',') {
		subTitleText = subTitleText.substring(0, subTitleText.length - 2)
	}

	const hidenTag = hidenCount ? <span className="tag">+{hidenCount}</span> : null

	return <span className="sub-title">{subTitleText}{hidenTag}</span>
}