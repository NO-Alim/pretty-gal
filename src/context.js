import React,{useState, useContext} from 'react'
import data from './data'
import saledata from './SaleData'
import colorData from './colorData'


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [shopData, setShopData] = useState(data);
    const [saleData, setSaleData] = useState(saledata);
    const [hoverColor, setHoverColor] = useState('');
    const [cartItem, setCartItem] = useState({
        name: 'none',
        cartId: '',
        type: '',
        typeId: null,
        price: null,
        priceTwo: null,
        size: '',
        color: '',
        quantity: null,
        img: ''
    })
    const [itemSize, setItemSize] = useState('');
    const [itemColor, setItemColor] = useState('');
    const [itemQuantity, setItemQuantity] = useState(5);
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [selectWarning, setSelectWarning] = useState(false)

    return <AppContext.Provider value={{shopData, setShopData,saleData, setSaleData,hoverColor, setHoverColor,cartItem, setCartItem,itemSize, setItemSize,itemColor, setItemColor,itemQuantity, setItemQuantity,cartList, setCartList,totalPrice, setTotalPrice,selectWarning, setSelectWarning}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}