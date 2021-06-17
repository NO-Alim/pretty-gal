import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const CarouselSlider = ({images}) => {
    return (
        <div>
            <Carousel showStatus={false} showArrows={false}>
                {images.map((item,ind) =>{
                    return(
                        <div key={ind}>
                            <img  src={item} alt={item} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default CarouselSlider
