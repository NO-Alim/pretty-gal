import React from 'react'
import './sass/Product.scss'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../redux/action/allAction'

const Product = ({product}) => {
    const {id,price,name,images} = product
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(deleteTodo(e.target.id));
    }
    return (
        <>
            <div className="product">
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
                <button id={id} onClick={handleClick}>delete</button>
            </div>
        </>
    )
}

export default Product
