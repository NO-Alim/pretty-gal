import React, { useState, useEffect, useRef } from 'react'
import './scss/Shop.scss'
import FilterBy from '../component/FilterBy'
import ProductList from '../component/ProductList'
import {FaFilter} from 'react-icons/fa'
const Shop = () => {
    const [filterContainer, setFilterContainer] = useState(false);
    const filterRef = useRef(null)
    const filterBtnRef = useRef(null);
    return (
        <>
            <div className="shop-container">
                <div className="shop">
                    <h1>Shop</h1>
                    <div className="filter-btn-container">
                        <span className="filter-btn" onClick={() => setFilterContainer(!filterContainer)} ref={filterBtnRef}><FaFilter /></span>
                    </div>
                    <div className="content">
                        <div className={`filter ${filterContainer ? 'active' : null}` } ref={filterRef}>
                            <FilterBy />
                        </div>
                        <div className="product-container">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
