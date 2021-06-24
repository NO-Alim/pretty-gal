import React, { useEffect } from 'react'
import './sass/Cart.scss'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'

const Cart = () => {
    const {totalPrice} = useGlobalContext();
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
                    <button>Viwe cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart
