import React,{useState, useEffect, useRef} from 'react'
import './scss/Sale.scss'
import SaleFilterBy from '../component/SaleFilterBy'
import ProductList from '../component/ProductList'
import {FaFilter} from 'react-icons/fa'
import SaleProductList from '../component/SaleProductList'

const Sale = () => {
    const [filterContainer, setFilterContainer] = useState(false);
    const salefilterRef = useRef(null)
    const salefilterBtnRef = useRef(null)

    // const handleClick = (e) => {
    //     if (salefilterBtnRef) {
    //         if (!salefilterBtnRef.current.contains(e.target)){
    //             if (salefilterRef.current.contains(e.target)) {
    //                 setFilterContainer(true);
    //             }else{
    //                 setFilterContainer(false);
    //             }
    //         }
    //     }
    // }

    // useEffect(() =>{
    //     document.addEventListener('click', handleClick)

    //     return () =>{
    //         document.removeEventListener('click', handleClick)
    //     }
    // })
    return (
        <>
            <div className="shop-container">
                <div className="shop">
                    <h1>Sale</h1>
                    <div className="filter-btn-container" ref={salefilterBtnRef}>
                        <span className="filter-btn" onClick={() => setFilterContainer(!filterContainer)}><FaFilter /></span>
                    </div>
                    <div className="content">
                        <div className={`filter ${filterContainer ? 'active' : null}` } ref={salefilterRef}>
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
