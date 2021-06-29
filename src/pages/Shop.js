import React, { useState, useEffect, useRef } from 'react'
import './scss/Shop.scss'
import FilterBy from '../component/FilterBy'
import ProductList from '../component/ProductList'
import {FaFilter, FaIgloo} from 'react-icons/fa'
const Shop = () => {
    const [filterContainer, setFilterContainer] = useState(false);
    const filterRef = useRef(null)
    const filterBtnRef = useRef(null);

    // const handleClick = (e) => {
    //         if (!filterBtnRef.current.contains(e.target)){
    //             if (filterRef.current.contains(e.target)) {
    //                 setFilterContainer(true);
    //             }else{
    //                 setFilterContainer(false);
    //             }
    //     }
    // }

    // useEffect(() =>{
    //     const toggleFilter = () => {
    //         if (filterBtnRef) {
    //             document.addEventListener('click', handleClick)
    //         }
    //     }
    //     toggleFilter();

    //     return () =>{
    //         //document.removeEventListener('click', handleClick)
    //         toggleFilter();
    //     }
    // })
    
    return (
        <>
            <div className="shop-container">
                <div className="shop">
                    <h1>Shop</h1>
                    <div className="filter-btn-container"  ref={filterBtnRef}>
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
