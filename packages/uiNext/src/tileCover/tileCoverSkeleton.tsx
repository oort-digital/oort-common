import './tileCoverSkeleton.less'

interface IProps {
	className?: string
}

export const TileCoverSkeleton = ({ className}: IProps) => {
    const cssClass = `tile-cover-skeleton ${className || ''}`
    return <div className={cssClass}></div>
}
