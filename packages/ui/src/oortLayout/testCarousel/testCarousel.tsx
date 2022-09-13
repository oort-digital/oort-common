import imgSrc from "./topRatedImage.png"

import { Carousel } from "./carousel"

// const style={width: '15%'}
const style={ }
export const TestCarousel = () => <Carousel slidesToShow={6} >
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
<div><img style={style} src={imgSrc}></img></div>
</Carousel>
