import React,{useState} from 'react'
import './sass/Quantity.scss'

const Quantity = () => {
    const [quantity, setQuantity] = useState(1)

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
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
        <>
            <div className="quantity-container">
                <p>Quantity</p>
                <div className="quantity-form">
                    <input type="number" value={quantity}/>
                    <div className="btn-container">
                        <span className="up" onClick={() => setQuantity(quantity + 1)}></span>
                        <span className="down" onClick={decrement}></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quantity
