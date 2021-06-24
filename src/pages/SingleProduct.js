import React, {useState, useEffect } from 'react'
import { useParams,NavLink,Link,useHistory } from 'react-router-dom'
import './scss/SingleProduct.scss'
import SingelColor from '../component/SingelColor'
import SizeSelect from '../component/SizeSelect'
import Quantity from '../component/Quantity'
import {FaHeart,FaPlus,FaMinus,FaWhatsapp,FaFacebookF,FaTwitter,FaPinterestP} from 'react-icons/fa'
import CarouselSlider from '../component/CarouselSlider'
import { useGlobalContext } from '../context'
//import { logDOM } from '@testing-library/react'
//import loader from 'sass-loader'

const SingleProduct = () => {
    let history = useHistory();
    const {shopData,cartItem, setCartItem,itemSize,setItemSize,itemQuantity,cartList,setSelectWarning} = useGlobalContext();
    const {id} = useParams();
    const [info, setInfo] = useState(false);
    const [returnPolicy, setReturnPolicy] = useState(false);
    const ThisProduct = shopData.filter(Product => Product.id == id);

    const localData = JSON.parse(localStorage.getItem('cartList'));


    //this append function for concat 
    const appendToStorage = (name, data) => {
        var prevItems = localStorage.getItem(name)
        try{
            prevItems = JSON.parse(prevItems);
        } catch (e){
            prevItems = []
        }
        localStorage.setItem(name, JSON.stringify(prevItems.concat(data)))
    }

    // const updateStorage =(keyName, newkeypairs=[]) =>{
    //     const obj = JSON.parse(localStorage.getItem(keyName));
    //     newkeypairs.map(n => obj[Object.keys(n)] = Object.values(n)[0]);
    //     localStorage.setItem(keyName,JSON.stringify(obj));
    // }




    const handleAddCart = () => {
        //when there is no array stored
        if (localStorage.getItem('cartList') === null) {
            localStorage.setItem('cartList',JSON.stringify(cartList))
        }
        if (cartItem.size && cartItem.quantity) {
            //1st when there is no array
            if (!localData) {
                appendToStorage('cartList', cartItem)
            } else if (localData.some((item) => item.cartId === cartItem.cartId)) {
                //when array contain same object
                var itemPrice = localData.find((item) => item.cartId === cartItem.cartId);
                
                //updateStorage('cartList',[{quantity: 5}])
            } else {
                //concat new object
                appendToStorage('cartList', cartItem)
            }

            history.push('/shop')
            setItemSize(null)
            setSelectWarning(false);
        } else{
            console.log('nothing');
            setSelectWarning(true)
        }
    }

    useEffect(() => {
        const itemName = ThisProduct.map((item) =>{
            return item
        });
        setCartItem({
            name: itemName[0].name,
            cartId: `shop${itemName[0].id}`,
            type: 'shop',
            typeId: itemName[0].id,
            price: itemName[0].price,
            size: itemSize,
            quantity: itemQuantity,
            img: itemName[0].images[0]
        })
    },[itemSize, itemQuantity,]);

    console.log(itemQuantity);
    
    return (
        <>
            <div className="singleProduct-container">
                        {ThisProduct.map((item,ind) => {
                            const {name,price,images,color,discretion} = item;
                            return(
                            <div className="singleProduct" key={ind}>
                                <div className="top-container">
                                    <ul className="link-container">
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <NavLink to="/shop">Shop</NavLink>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <NavLink to="#" >{name}</NavLink>
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
                                        <h4 className="price">${price}</h4>
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
                                                <span onClick={() => setInfo(!info)}>{info ? <FaMinus /> : <FaPlus />}</span>
                                            </div>
                                            <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
                                        </div>
                                        <div className={`return-info accordion ${returnPolicy ? 'active' : null}`}>
                                            <div className="top-container">
                                                <h4>Return And Refund policy</h4>
                                                <span onClick={() => setReturnPolicy(!returnPolicy)}>{returnPolicy ? <FaMinus /> : <FaPlus />}</span>
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

export default SingleProduct






// const handleAddCart = () => {
//     //if there is no array stored
//     if (localStorage.getItem('cartList') === null) {
//         localStorage.setItem('cartList',JSON.stringify(cartList))
//     }
//     if (cartItem.size && cartItem.quantity) {
//         //here condation
//         if (!localData) {
//             appendToStorage('cartList', cartItem)
//         }else if (localData.some((item) => item.cartId === cartItem.cartId)) {
//             console.log('hello');
//             var itemPrice = localData.find((item) => item.cartId === cartItem.cartId);
            
//         } else {
//             appendToStorage('cartList', cartItem)
//         }

//         history.push('/shop')
//         setItemSize(null)
//         setSelectWarning(false);
//     } else{
//         console.log('nothing');
//         setSelectWarning(true)
//     }
//     //setCartList(cartList.concat(cartItem));
//     const storageCart = localStorage.getItem('cartList');
// }