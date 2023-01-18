import { logger } from "@oort-digital/logger";
import React, { CSSProperties, useState } from "react";
import { Img } from "../img";
import './tileCoverAvg.less'

interface IProps {
	className?: string
	imgSrc: string
    href?: string
}

interface IRgb {
	r: number
	g: number
	b: number
}

const getAverageRGB = (imgEl: any): IRgb => {
    
    const blockSize = 5 // only visit every 5 pixels
	const defaultRGB: IRgb = {r:255,g:255,b:255} // for non-supporting envs

    const canvas = document.createElement('canvas');
	const context = canvas.getContext && canvas.getContext('2d')

    if (!context) {
        return defaultRGB;
    }
    
    const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
	imgEl.crossOrigin = "Anonymous";
    context.drawImage(imgEl, 0, 0);
    
	let data: ImageData
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
		logger.error(e)
        return defaultRGB;
    }
    
    const length = data.data.length
    let i = -4
	const rgb: IRgb = {r:0,g:0,b:0}
	let count = 0
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    return rgb;
}


export const TileCoverAvg = ({ className, imgSrc, href }: IProps) => {

	const [bgColor, setBgColor] = useState<string>()

	const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		const { r, g, b } = getAverageRGB(e.target)
		setBgColor(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`)
	}

	let style: CSSProperties | undefined;
	if(bgColor) {
		style = {
			backgroundColor: bgColor
		}
	}

    const body = <>
        <div style={style} className="asset-cover-background-container"/>
        <Img alt="img" size="md" src={imgSrc || ''} onLoad={onLoad} noText={false}/>
    </>

    const cssClass = `tile-cover-avg ${className || ''}`

    if(href) {
	    return <a href={href} target="_blank" rel="noreferrer" className={cssClass}>{body}</a>
    }

    return <div className={cssClass}>{body}</div>
}
