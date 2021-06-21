import React,{useState, useEffect, useRef} from 'react'
import './scss/Sale.scss'
import SaleFilterBy from '../component/SaleFilterBy'
import ProductList from '../component/ProductList'
import {FaFilter} from 'react-icons/fa'
import SaleProductList from '../component/SaleProductList'

const Sale = () => {
    const [filterContainer, setFilterContainer] = useState(false);
    const filterRef = useRef(null)
    const filterBtnRef = useRef(null)
    return (
        <>
            <div className="shop-container">
                <div className="shop">
                    <h1>Sale</h1>
                    <div className="filter-btn-container">
                        <span className="filter-btn" onClick={() => setFilterContainer(!filterContainer)} ref={filterBtnRef}><FaFilter /></span>
                    </div>
                    <div className="content">
                        <div className={`filter ${filterContainer ? 'active' : null}` } ref={filterRef}>
                            <SaleFilterBy />
                        </div>
                        <div className="product-container">
                            <SaleProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sale
