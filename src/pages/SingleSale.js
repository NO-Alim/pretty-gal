import React, {useState, useEffect } from 'react'
import { useParams,NavLink,Link,useHistory } from 'react-router-dom'
import './scss/SingleProduct.scss'
import SingelColor from '../component/SingelColor'
import SizeSelect from '../component/SizeSelect'
import Quantity from '../component/Quantity'
import {FaHeart,FaPlus,FaMinus,FaWhatsapp,FaFacebookF,FaTwitter,FaPinterestP} from 'react-icons/fa'
import CarouselSlider from '../component/CarouselSlider'
import { useGlobalContext } from '../context'

const SingleSale = () => {
    let history = useHistory();
    const {saleData,cartItem, setCartItem,itemSize,setItemSize,itemQuantity,cartList, setCartList,setSelectWarning} = useGlobalContext();


    const {id} = useParams();
    const [info, setInfo] = useState(false);
    const [returnPolicy, setReturnPolicy] = useState(false);

    const ThisProduct = saleData.filter(Product => Product.id == id);

    const localData = JSON.parse(localStorage.getItem('cartList'));

    //this append func for concat 
    const appendToStorage = (name, data) => {
        var prevItems = localStorage.getItem(name)
        try{
            prevItems = JSON.parse(prevItems);
        } catch (e){
            prevItems = []
        }
        localStorage.setItem(name, JSON.stringify(prevItems.concat(data)))
    }


    const handleAddCart = () => {
        if (localStorage.getItem('cartList') === null) {
            localStorage.setItem('cartList',JSON.stringify(cartList))
        }
        if (cartItem.size && cartItem.quantity) {
            //here condation && this condation work help to skip duplicate store
            if (!localData) {
                appendToStorage('cartList', cartItem)
            }else if (localData.some((item) => item.cartId === cartItem.cartId)) {
                var sameItem = JSON.parse(localStorage.cartList);
                for(var i = 0;i < sameItem.length; i++){
                    if (cartItem.cartId === sameItem[i].cartId) {
                        sameItem[i].quantity += cartItem.quantity;
                        break;
                    }
                }
                localStorage.setItem('cartList',JSON.stringify(sameItem))
            } else {
                appendToStorage('cartList', cartItem)
            }
            //end
            console.log(cartItem.cartId);
            //appendToStorage('cartList', cartItem)
            history.push('/sale')
            setItemSize(null)
            setSelectWarning(false)
        } else{
            setSelectWarning(true)
        }
        //setCartList(cartList.concat(cartItem));
        const storageCart = localStorage.getItem('cartList');
    }



    useEffect(() => {
        const itemName = ThisProduct.map((item) =>{
            return item
        });
        setCartItem({
            name: itemName[0].name,
            cartId: `sale${itemName[0].id}`,
            type: 'sale',
            typeId: itemName[0].id,
            price: itemName[0].price,
            size: itemSize,
            quantity: itemQuantity,
            img: itemName[0].images[0]
        })
    },[itemSize, itemQuantity,]);
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
                                                <button className="add-btn" onClick={() => {handleAddCart();setCartItem({name: name})}}>Add Cart</button>
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
