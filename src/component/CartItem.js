import React,{useState} from 'react'

const CartItem = () => {
    const [itemQuantity, setItemQuantity] = useState(1)

    const decrement = () => {
        if(itemQuantity > 1){
            setItemQuantity(itemQuantity - 1)
        }
    }
    const localData = JSON.parse(localStorage.getItem('cartList'))
    //if no product 
    if (!localData) {
        return(
            <h4>nothing is added to cart.</h4>
        )
    }

    //for skip duplicates
    const getUniqueListBy =(arr, key)=> {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const cartList = getUniqueListBy(localData, 'cartId');
    return (
        <div>
            {cartList.map((item,ind) =>{
                const {name,cartId,price,type,typeId,img} = item;
                return(
                    <div className="item" key={ind}>
                        <div className="cart-img-container">
                            <img src={img} alt="" />
                        </div>
                        <div className="cart-details">
                            <h3 className="name">{name}</h3>
                            <strong>${price}</strong>
                            <div className="item-quantity">
                                <span className="increment count-btn" onClick={decrement}>-</span>
                                <input type="number" value={itemQuantity} />
                                <span className="decrement count-btn" onClick={() => setItemQuantity(itemQuantity + 1)}>+</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItem
