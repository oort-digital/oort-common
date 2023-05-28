import { NoImageIcon } from "../icons"
import "./imgFallback.less"

interface IProps {
        className?: string
        size: 'sm' | 'md'
        noText: boolean
}

export const ImgFallback = ({className, size, noText} : IProps) => <div className={`img-fallback ${size} ${className || ''}`}>
        <NoImageIcon />
        {!noText && <div className="txt">No Content</div>}
</div>


