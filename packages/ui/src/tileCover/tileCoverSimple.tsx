
import { Link } from 'react-router-dom'
import { Img } from '../img'
import './tileCoverSimple.less'

interface IProps {
	className?: string
	imgSrc: string | undefined
    href?: string
    reactRouterLink?: string
    onClick?: () => void
    size: 'sm' | 'md'
    noText: boolean
}

export const TileCoverSimple = ({ className, imgSrc, href, reactRouterLink, size, noText, onClick }: IProps) => {

    const body = <Img size={size} alt="img" src={imgSrc || ''} noText={noText}/>

    const cssClass = `tile-cover-simple ${className || ''}`

    if(reactRouterLink) {
        return <Link to={reactRouterLink} className={cssClass}>{body}</Link>
    }
    if(href) {
	    return <a href={href}  rel="noreferrer" className={cssClass}>{body}</a>
    }

    return <div onClick={onClick} className={cssClass}>{body}</div>
}
