import React, { useState } from 'react'
import data from '../data'
import Product from './Product'
import './sass/ProductList.scss'

const ProductList = () => {
    const [products, setProjects] = useState(data);

    return (
        <>
            <div className="productlist">
                {products.map((product,ind) => {
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
