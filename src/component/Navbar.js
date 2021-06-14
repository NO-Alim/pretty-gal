import React, { useEffect, useRef, useState } from 'react'
import './sass/Navbar.scss'
import {NavLink} from 'react-router-dom'
import { FaUserAlt,FaShoppingBag} from 'react-icons/fa';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(true);
    const navRef = useRef(null);

    const handleToggleBtn = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleClick = (e) => {
        if (!navRef.current.contains(e.target)) {
            setToggleMenu(false);
        }
    }

    const handleScroll = () => {
        setToggleMenu(false);
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
                        <div className="cart">
                            <span><FaShoppingBag /></span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
