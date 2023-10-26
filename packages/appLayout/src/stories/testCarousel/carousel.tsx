import { ReactNode, useRef } from 'react'
import { Carousel as AntCarousel } from "antd"
import { PrevArrowIcon } from './prevArrow'
import { NextArrowIcon } from './nextArrow'
import styles from "./carousel.module.less"

interface IProps {
    className?: string
    slidesToShow?: number
    children: ReactNode[]
}

export const Carousel = ({ children, className, slidesToShow }: IProps) => {

    const carouseEL = useRef(null);

    const nextClick = () => {
        // @ts-ignore
        carouseEL.current!.next();
    }

    const previewClick = () => {
        // @ts-ignore
        carouseEL.current!.prev();
    }

    const _slidesToShow = slidesToShow ?? 1

    let cssClass = className ? `${styles.root} ${className}` : styles.root

    return <div className={cssClass}>
    <AntCarousel slidesToShow={_slidesToShow} ref={carouseEL} arrows={true} prevArrow={<PrevArrowIcon onClick={previewClick}/>} nextArrow={<NextArrowIcon onClick={nextClick}/>}>
        { children.map(c => c)}
    </AntCarousel>
</div>
};