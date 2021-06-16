import React from 'react'
import {Link} from 'react-router-dom'
import './sass/Product.scss'
import './sass/SaleProduct.scss'

const SaleProduct = ({product}) => {
    const {id,imageOne,imageTwo,price,name,discretion,priceTwo} = product
    return (
        <>
            <div className="product">
                <div className="img-container">
                <img src={imageOne} alt="" />
                <div className="view">
                    <Link to="*">Quick View</Link>
                </div>
                </div>
                <div className="content">
                    <h4>{name}</h4>
                    <span className="main-price">${price}</span>
                    <span className="discount-price">${priceTwo}</span>
                </div> 
            </div>
        </>
    )
}

export default SaleProduct
