import './tileCoverBlur.less'
import { Img } from '../img';
import { useTheme } from '../effects';


const GREY_00 = "#d8d8d8";

interface IProps {
	className?: string
	imgSrc: string
}

export const TileCoverBlur = ({ className, imgSrc }: IProps) => {
	const [dark] = useTheme()
	const theme = dark ? 'dark' : 'light'
	return <div className={`tile-cover-blur ${className}`}>
	<div
		className={`asset-cover-background-image ${theme}`}
		style={{ background: GREY_00 }}>
		<Img size="md" alt="img-background" src={imgSrc} noText={false}/>
	</div>
	<div className={`asset-cover-background-container ${theme}`}/>
	
	<Img size="md" alt="img"  src={imgSrc || ''} noText={false}/>
</div>
}

