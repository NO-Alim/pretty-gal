import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSlider = ({images}) => {
    return (
        <div>
            <Carousel showStatus={false} showArrows={false}>
                {images.map((item,ind) =>{
                    return(
                        <div key={ind}>
                            <img src={item} alt="" />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default CarouselSlider
