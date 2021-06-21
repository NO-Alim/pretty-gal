import React,{useState, useContext} from 'react'
import data from './data'
import saledata from './SaleData'
import colorData from './colorData'


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [shopData, setShopData] = useState(data);
    const [saleData, setSaleData] = useState(saledata);
    const [hoverColor, setHoverColor] = useState('');

    return <AppContext.Provider value={{shopData, setShopData,saleData, setSaleData,hoverColor, setHoverColor}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}