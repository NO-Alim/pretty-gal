import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import Product from './Product'
import './sass/ProductList.scss'

const ProductList = () => {
    const {shopData} = useGlobalContext();
    if (shopData.length < 1) {
        return(
            <h1>no item found </h1>
        )
    }
    return (
        <>
            <div className="productlist">
                {shopData.map((product,ind) => {
                    return(
                        <div key={ind}>
                            <Product product={product}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductList
