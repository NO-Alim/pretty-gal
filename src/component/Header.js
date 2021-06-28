import React from 'react'
import './sass/Header.scss'
import {Link} from 'react-router-dom'


const img1 = 'https://cdn.pixabay.com/photo/2015/07/27/20/21/woman-863439_960_720.jpg';
const img2 = 'https://cdn.pixabay.com/photo/2016/11/29/10/10/girl-1868930_960_720.jpg';
//original from wix 
const img3 = 'https://static.wixstatic.com/media/84770f_b5b78cd83b6342199b7370a2ba6b9e06.jpg/v1/fill/w_1349,h_601,al_c,q_85,usm_0.66_1.00_0.01/84770f_b5b78cd83b6342199b7370a2ba6b9e06.webp'


const Header = () => {
    return (
        <>
        <div className="header">
            <div className="header-container">
                <div className="img-container">
                    <img src={img1} alt="" />
                    <div className="content">
                        <h1>Winter Is Coming</h1>
                        <Link to="/shop" className="shop-btn btn">Shop Now</Link>
                    </div>
                </div>
                <div className="free-shipping">
                    <p>FREE SHIPPING WORLWIDE</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
