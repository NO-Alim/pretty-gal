import React,{useState} from 'react'

const CartItem = () => {
    const [itemQuantity, setItemQuantity] = useState(1)

    const decrement = () => {
        if(itemQuantity > 1){
            setItemQuantity(itemQuantity - 1)
        }
    }

    // const onChange = (e) => {
    //     if (quantity < 1) {
    //         setQuantity(1)
    //     } else {
    //         setQuantity(e.target.value)
    //     }
    // }
    return (
        <div>
            <div className="item">
                <div className="cart-img-container">
                    <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_96,h_96,q_85,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp" alt="" />
                </div>
                <div className="cart-details">
                    <h3 className="name">Product Name</h3>
                    <strong>$33.00</strong>
                    <div className="item-quantity">
                        <span className="increment count-btn" onClick={decrement}>-</span>
                        <input type="number" value={itemQuantity} />
                        <span className="decrement count-btn" onClick={() => setItemQuantity(itemQuantity + 1)}>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
