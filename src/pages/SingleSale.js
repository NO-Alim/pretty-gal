import React from 'react'
import { useParams,NavLink,Link } from 'react-router-dom'
import './scss/SingleProduct.scss'
import Products from '../SaleData'
import SingelColor from '../component/SingelColor'
import SizeSelect from '../component/SizeSelect'
import Quantity from '../component/Quantity'
import {FaHeart,FaPlus,FaMinus,FaWhatsapp,FaFacebookF,FaTwitter,FaPinterestP} from 'react-icons/fa'
import { useState } from 'react'
import CarouselSlider from '../component/CarouselSlider'

const SingleSale = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(false);
    const [returnPolicy, setReturnPolicy] = useState(false);

    const ThisProduct = Products.filter(Product => Product.id == id);
    return (
        <>
            <div className="singleProduct-container">
                        {ThisProduct.map((item,ind) => {
                            const {name,price,priceTwo,images,color,discretion} = item;
                            return(
                            <div className="singleProduct" key={ind}>
                                <div className="top-container">
                                    <ul className="link-container">
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <NavLink to="/sale">Sale</NavLink>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <NavLink to="#" >Name</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-container">
                                    <div className="img-container">
                                        <CarouselSlider images={images}/>
                                        <p>{discretion}</p>
                                    </div>
                                    <div className="details">
                                        <h2>{name}</h2>
                                        <span className="id">{id}</span>
                                        <h4 className="price main-price">${price}</h4>
                                        <h4 className="price">${priceTwo}</h4>
                                        <div className="single-pro-color">
                                            <SingelColor color={color}/>
                                        </div>
                                        <div className="size">
                                            <div className="select-container">
                                                <SizeSelect />
                                            </div>
                                        </div>
                                        <div className="quantity">
                                            <Quantity />
                                        </div>
                                        <div className="main-btn-container">
                                            <div className="button-group">
                                                <button className="add-btn">Add Cart</button>
                                                <button className="like-btn"><FaHeart /></button>
                                            </div>
                                                <button className="buy">Buy Now</button>
                                        </div>
                                        <div className={`product-info accordion ${info ? 'active' : null}`}>
                                            <div className="top-container">
                                                <h4>Product Info</h4>
                                                <span onClick={() => setInfo(!info)}>{info ? <FaPlus /> : <FaMinus />}</span>
                                            </div>
                                            <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
                                        </div>
                                        <div className={`return-info accordion ${returnPolicy ? 'active' : null}`}>
                                            <div className="top-container">
                                                <h4>Return And Refund policy</h4>
                                                <span onClick={() => setReturnPolicy(!returnPolicy)}>{returnPolicy ? <FaPlus /> : <FaMinus />}</span>
                                            </div>
                                            <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
                                        </div>
                                        <div className="social-container">
                                            <ul>
                                                <li>
                                                    <Link to="#"><FaWhatsapp /></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><FaFacebookF /></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><FaTwitter /></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><FaPinterestP /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
            </div>
        </>
    )
}

export default SingleSale
