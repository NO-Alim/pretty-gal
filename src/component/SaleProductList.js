import React,{useState} from 'react'
import './sass/SaleProductList.scss'
import data from '../SaleData'
import SaleProduct from './SaleProduct'

const SaleProductList = () => {
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
