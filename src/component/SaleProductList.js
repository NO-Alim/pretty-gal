import React,{useState} from 'react'
import './sass/SaleProductList.scss'
import SaleProduct from './SaleProduct'
import {useSelector} from 'react-redux'

const SaleProductList = () => {
    const data = useSelector(state => state.SaleReducer.data)
    const [products, setProjects] = useState(data);
    return (
        <div className="productlist">
            {products.map((product,ind) => {
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
