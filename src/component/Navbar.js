import React, { useEffect, useRef, useState } from 'react'
import './sass/Navbar.scss'
import {NavLink} from 'react-router-dom'
import { FaUserAlt,FaShoppingBag} from 'react-icons/fa';
import Cart from './Cart';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCart, setToggleCart] = useState(false)
    const navRef = useRef(null);
    const cartRef = useRef(null);

    const handleToggleBtn = () => {
        setToggleMenu(!toggleMenu)
        setToggleCart(false)
    }

    const handleCartBtn = () => {
        setToggleCart(!toggleCart);
    }

    const handleClick = (e) => {
        if (!navRef.current.contains(e.target)) {
            setToggleMenu(false);
        }
        if (!cartRef.current.contains(e.target)) {
            setToggleCart(false);
        }
    }

    const handleScroll = () => {
        setToggleMenu(false);
        //setToggleCart(false)
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
                            <span><FaUserAlt /> User</span>
                            
                        </div>
                        <div className="cart" ref={cartRef}>
                            <span onClick={handleCartBtn}><FaShoppingBag /></span>
                            <div className="cart-container">
                                <div className={`cart-div ${toggleCart ? 'active' : null}`}>
                                    <div className="cart-title">
                                    <span onClick={handleCartBtn}></span>
                                    <h2>cart</h2>
                                    </div>
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
