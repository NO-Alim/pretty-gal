import React from 'react'
import './sass/Footer.scss'
import {Link} from 'react-router-dom'
import {FaFacebookF,FaTwitter,FaInstagram,FaPinterestP} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="social-container">
                        <p className="footer-para">STAY CONNECTED</p>
                        <div className="social-link">
                            <ul>
                                <li>
                                    <Link to="/"><FaFacebookF /></Link>
                                </li>
                                <li>
                                    <Link to="/"><FaTwitter /></Link>
                                </li>
                                <li>
                                    <Link to="/"><FaPinterestP /></Link>
                                </li>
                                <li>
                                    <Link to="/"><FaInstagram /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="subscribe-container">
                        <p className="footer-para">BE OUR FRIEND</p>
                        <form>
                            <input type="email" className="email" required placeholder="Enter Your Email Here"/>
                            <input type="submit" className="submit-btn" value="Subscribe Now" />
                        </form>
                    </div>
                    <div className="contact-container">
                        <p className="footer-para">NEED ASSISTANCE?</p>
                        <div className="contact">
                            <p>123-456-2345</p>
                            <p>info@mysite.com</p>
                        </div>
                    </div>
                </div>
                <p className="copy">© 2023 by PRETTY GAL. Proudly created with Abdul Alim</p>
            </footer>
        </>
    )
}

export default Footer
