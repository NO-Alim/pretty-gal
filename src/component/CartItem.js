import React,{useEffect, useState} from 'react'
import { useGlobalContext } from '../context'
import {FaTimes} from 'react-icons/fa'

const CartItem = () => {
    const [pordeuctItems, setPordeuctItems] = useState([]);
    //this counter is dome. there is no uses in the component. it's only use for page refresh and update all cart data.
    const [counter, setCounter] = useState(1);

    const {setTotalPrice,refreshCart} = useGlobalContext();
    const deleteCartItem = (cartId) => {
        //var index = -1;
        var obj = JSON.parse(localStorage.getItem("cartList"));
        for (var i = 0; i < obj.length; i++) { //loop over the collection
          if (obj[i].cartId === cartId) { //see if ids match
            obj.splice(i, 1); //remove item from array
            break; //exit loop
          }
        }
        localStorage.setItem("cartList", JSON.stringify(obj));
        setCounter(counter + 1)
    }

    const incrementQuantity = (cartId) => {
        var sameItem = JSON.parse(localStorage.cartList);
                for(var i = 0;i < sameItem.length; i++){
                    if (cartId === sameItem[i].cartId) {
                        sameItem[i].quantity += 1;
                        break;
                    }
                }
                localStorage.setItem('cartList',JSON.stringify(sameItem))
            setCounter(counter + 1)
    }

    const decrementQuantity = (cartId) => {
        var sameItem = JSON.parse(localStorage.cartList);
                for(var i = 0;i < sameItem.length; i++){
                    if (cartId === sameItem[i].cartId) {
                        if (sameItem[i].quantity <= 1) {
                            sameItem[i].quantity = 1;
                        } else {
                            sameItem[i].quantity -= 1;
                        }
                        break;
                    }
                }
                localStorage.setItem('cartList',JSON.stringify(sameItem))
            setCounter(counter - 1)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cartList'));
        setPordeuctItems(data);
    },[counter,refreshCart])
    

    //setprice
    if (pordeuctItems) {
        if (pordeuctItems.length < 1) {
            setTotalPrice(0)
        }
        else {
            const getTotalPrice = pordeuctItems.map(item => item.price * item.quantity).reduce((prev, next) => prev + next);
            setTotalPrice(getTotalPrice);
        }
        
    }
    //if no product 
    if (!pordeuctItems || pordeuctItems.length < 1) {
        return(
            <h4>Not a Single Item Add Yet!!!</h4>
        )
    }

    return (
        <div>
            {pordeuctItems.map((item,ind) =>{
                const {name,img, price, quantity,cartId} = item;
                return(
                    <div className="item" key={ind}>
                        <div className="cart-img-container">
                            <img src={img} alt="" />
                        </div>
                        <div className="cart-details">
                            <h3 className="name">{name}</h3>
                            <strong>${price}</strong>
                            <div className="item-quantity">
                                <span className="increment count-btn" onClick={() => decrementQuantity(cartId)}>-</span>
                                <span className="quantity">{quantity}</span>
                                <span className="decrement count-btn" onClick={() => incrementQuantity(cartId)}>+</span>
                            </div>
                        </div>
                        <button className="cart-delete" onClick={() => {deleteCartItem(cartId)}}><FaTimes /></button>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItem
