import React,{useState} from 'react'
import './sass/SaleProductList.scss'
import SaleProduct from './SaleProduct'
import { useGlobalContext } from '../context'

const SaleProductList = () => {
    const {saleData} = useGlobalContext();
    if (saleData.length < 1) {
        return (
            <h1>No Sale product found!</h1>
        )
    }
    return (
        <div className="productlist">
            {saleData.map((product,ind) => {
                    return(
                        <div key={ind}>
                            <SaleProduct product={product}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default SaleProductList
