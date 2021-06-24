import React,{useEffect, useState} from 'react'
import { useGlobalContext } from '../context'
import {FaTimes} from 'react-icons/fa'

const CartItem = () => {
    const xyz = JSON.parse(localStorage.getItem('cartList'))
    const {setTotalPrice} = useGlobalContext();
    const [mycart, setMycart] = useState(xyz)
    const [trigger, setTrigger] = useState(1)
    //delete button
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
        setTrigger(2);
    }
    useEffect(() =>{
        const localData = JSON.parse(localStorage.getItem('cartList'))
        setMycart(localData);
        console.log("hello");
        setTrigger(1)
    },[trigger])

    

    //increment decrement must be work with localstorage not context itemquentity.

    //for skip duplicates
    //here don't need UniqList bcs of our localstore is already Uniq.
    // const getUniqueListBy =(arr, key)=> {
    //     return [...new Map(arr.map(item => [item[key], item])).values()]
    // }
    // const cartList = getUniqueListBy(localData, 'cartId');
    
    
    
    //if no product 
    if (mycart.length < 1) {
        return(
            <h4>nothing is added to cart.</h4>
        )
    }

    return (
        <div>
            {mycart.map((item,ind) =>{
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
                                <span className="increment count-btn">-</span>
                                <input type="number" value={quantity} />
                                <span className="decrement count-btn">+</span>
                            </div>
                        </div>
                        <button className="cart-delete" onClick={() => deleteCartItem(cartId)}><FaTimes /></button>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItem
