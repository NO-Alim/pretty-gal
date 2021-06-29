import React from 'react'
import './sass/Product.scss'
import {Link, useHistory} from 'react-router-dom'

const Product = ({product}) => {
    const {id,price,name,images} = product;
    const location = useHistory();
    return (
        <>
            <div className="product" onClick={() => location.push(`/product/${id}`)}>
                <div className="img-container">
                <img src={images[0]} alt="" />
                <div className="view">
                    <Link to={`/product/${id}`}>Quick View</Link>
                </div>
                </div>
                <div className="content">
                    <h4>{name}</h4>
                    <span>${price}</span>
                </div>
            </div>
        </>
    )
}

export default Product
