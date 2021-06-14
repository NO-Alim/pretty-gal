import React, { useState } from 'react'
import './sass/YearRound.scss'
import {Link} from 'react-router-dom'

const img1 = "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_298,h_353,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"
const img2 = "https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp"
const img3 = "https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp"


const YearRound = () => {
    const [data, setData] = useState([img1,img2,img3])
    return (
        <>
            <div className="year-round-container">
                <div className="year-round">
                    <h1>YEAR ROUND</h1>
                    <p className="semi-heading">Must Have Items</p>
                    <div className="items">
                        {data.map((item,ind) => {
                            return (
                                <article key={ind}>
                                    <img src={item} alt="item" />
                                    <Link to="/">Item tag</Link>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default YearRound
