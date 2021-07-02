import React, { useEffect, useRef, useState } from 'react'
import './sass/Navbar.scss'
import {NavLink} from 'react-router-dom'
import { FaUserAlt,FaShoppingBag, FaTimes} from 'react-icons/fa';
import Cart from './Cart';
import { useGlobalContext } from '../context';
import Modal from 'react-modal'
import ModalContent from './ModalContent';
import Headroom from 'react-headroom'

Modal.setAppElement("#root");


const Navbar = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navRef = useRef(null);
    const cartRef = useRef(null);
    const cartContentRef = useRef(null);
    const {refreshCart, setRefreshCart, toggleCart, setToggleCart} = useGlobalContext();
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var cartListLength = cartList.length;

    const handleToggleBtn = () => {
        setToggleMenu(!toggleMenu)
        setToggleCart(false)
        setIsModalOpen(false)
    }

    const handleCartBtn = () => {
        setToggleCart(!toggleCart);
        setRefreshCart(refreshCart + 1); 
        setIsModalOpen(false)
    }

    const handleClick = (e) => {
        if (!navRef.current.contains(e.target)) {
            setToggleMenu(false);
        }
        
        if (!cartRef.current.contains(e.target)) {
            
            if (!cartContentRef.current.contains(e.target)) {
                setToggleCart(false)
            }

            // else{
            //     setToggleCart(false)
            // }
        }
    }

    const handleScroll = () => {
        setToggleMenu(false);
        //setToggleCart(false)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setToggleMenu(false)
    }

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClick)

        return () =>{
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('click', handleClick)
        }
    })
    return (
        <>
        <Headroom>
            <nav   ref={navRef}>
                <div className="nav-container">
                    <div className="logo-container">
                        <NavLink to="/" exact={true} onClick={handleScroll}>
                            <h2 className="logo">PRETTY GAL</h2>
                        </NavLink>
                    </div>
                    <div className="menu-one-container">
                        <div className={`menus-one ${toggleMenu ? 'active': null}`} onClick={handleToggleBtn}>
                            <span className="menu-one"></span>
                            <span className="menu-one"></span>
                            <span className="menu-one"></span>
                        </div>
                    </div>
                    
                    {/* link container */}
                    <div className={`link-container ${toggleMenu ? 'active' : null}`}>
                        <ul>
                            <li className="side-nav-user">
                                <span onClick={toggleModal}><FaUserAlt /> User</span>
                            </li>
                            <li>
                                <NavLink to="/" exact={true} onClick={handleScroll}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" onClick={handleScroll}>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sale" onClick={handleScroll}>Sale</NavLink>
                            </li>
                            <li>
                                <NavLink to="/customercare" onClick={handleScroll}>Customer Care</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stockists" onClick={handleScroll}>Stockists</NavLink>
                            </li>
                        </ul>
                        <div className="menu-container">
                            <div className={`menus ${toggleMenu ? 'active' : null}`} onClick={handleToggleBtn}>
                                <span className="menu"></span>
                                <span className="menu"></span>
                                <span className="menu"></span>
                            </div>
                        </div>
                    </div>
                    <div className="user-container">
                        <div className="user-form">
                            <span onClick={toggleModal}><FaUserAlt /> User</span>
                            <Modal
                            isOpen={isModalOpen}
                            onRequestClose={toggleModal}
                            contentLabel="My dialog" className="modal">
                                <div>
                                    <div className="close-btn-container">
                                        <span onClick={toggleModal} className="modal-close"><FaTimes /></span>
                                    </div>
                                    <ModalContent />
                                </div>
                            </Modal>
                        </div>
                        <div className="cart cart-ref" ref={cartRef}>
                            <div onClick={handleCartBtn} className="cart-icon">
                                <FaShoppingBag />
                            </div>
                            <span className="item-number">{cartListLength}</span>
                    </div>
                </div>
                </div>
            </nav>
        </Headroom>

        <div>
        <div className="cart-container cart-ref" ref={cartContentRef}>              
            <div className={`cart-div ${toggleCart ? 'active' : null}`}>
                <div className="cart-title">
                <span onClick={handleCartBtn}></span>
                <h2>cart</h2>
                </div>
                <Cart />
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Navbar
