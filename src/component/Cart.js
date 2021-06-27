import React, { useEffect, useState } from 'react'
import './sass/Cart.scss'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
import { useHistory } from 'react-router-dom'

const Cart = () => {
    const {totalPrice,toggleCart, setToggleCart} = useGlobalContext();
    let history = useHistory();
    const handleClick = () => {
        history.push("/CartFullView");
        setToggleCart(false)
    }
    return (
        <>
            <div className="cart-items-container">
                <div className="items">
                    <CartItem />
                </div>
                <div className="subtotal-container">
                    <h2>Subtotal</h2>
                    <span>${totalPrice}</span>
                </div>
                <div className="button-container">
                    <button onClick={() => handleClick()}>Viwe cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart
