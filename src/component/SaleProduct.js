import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './sass/Product.scss'
import './sass/SaleProduct.scss'

const SaleProduct = ({product}) => {
    const {id,price,priceTwo,name,images} = product
    const location = useHistory();

    return (
        <>
            <div className="product" onClick={() => location.push(`/sale-product/${id}`)}>
                <div className="img-container">
                <img src={images[0]} alt="" />
                <div className="view">
                    <Link to={`/sale-product/${id}`}>Quick View</Link>
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
