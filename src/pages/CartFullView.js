import React,{useState} from 'react'
import CartItem from '../component/CartItem'
import { useGlobalContext } from '../context'
import './scss/CartFullView.scss'
import {FaAmazonPay} from 'react-icons/fa'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'


Modal.setAppElement("#root");

const CartFullView = () => {
    const {totalPrice} = useGlobalContext();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <div className="full-cart">
                <div className="full-cart-container">
                        <div className="cart-item-container">
                            <CartItem />
                        </div>
                        <div className="subtotal-container">
                            <h3>Order Summary</h3>
                            <div className="order-details">
                                <div className="total">
                                    <span>subtotal</span>
                                    <span>${totalPrice}</span>
                                </div>
                                <div className="total">
                                    <span>shipping</span>
                                    <span>free</span>
                                </div>
                                <div className="total">
                                    <span className="country">Bangladesh</span>
                                </div>
                            </div>
                            <div className="total-price">
                                <span>Total</span>
                                <span>${totalPrice}</span>
                            </div>
                            <button onClick={toggleModal}><FaAmazonPay/>Checkout</button>
                            <Modal
                            isOpen={isModalOpen}
                            onRequestClose={toggleModal}
                            contentLabel="My dialog" className="modal">
                                <div>
                                    <div className="close-btn-container">
                                        <span onClick={toggleModal} className="modal-close"><FaTimes /></span>
                                    </div>
                                    <div className="modal-content">
                                        <h2>Opps!!!</h2>
                                        <h4>we are working this section. Please keep support us.</h4>
                                        <Link to="/">Home</Link>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                </div>
            </div>

    
        </>
    )
}

export default CartFullView
