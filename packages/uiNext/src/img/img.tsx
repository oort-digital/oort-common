import React, { CSSProperties, useState } from "react";
import { ImgFallback } from "./imgFallback";

interface IProps {
    size: 'sm' | 'md'
    src?: string
    alt?: string
    style?: CSSProperties
    className?: string
    onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
    noText: boolean;
}

export const Img = ({src, alt, style, className, onLoad, size, noText }: IProps) => {

    const [ noImage, setNoImage ] = useState(!src)

    const cssClass = `image ${className || ''}`

    if(noImage) {
        return <ImgFallback size={size} className={cssClass} noText={noText}/>
    }

    return <img alt={alt} onLoad={onLoad} src={src} style={style} className={cssClass} onError={() => setNoImage(true)}/>

}