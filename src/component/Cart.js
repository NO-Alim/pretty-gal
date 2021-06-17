import React from 'react'
import './sass/Cart.scss'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <>
            <div className="cart-items-container">
                <div className="items">
                    <CartItem />
                </div>
                <div className="subtotal-container">
                    <h2>Subtotal</h2>
                    <span>$4524</span>
                </div>
                <div className="button-container">
                    <button>Viwe cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart
