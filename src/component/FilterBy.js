import React, { useRef, useState, useEffect } from 'react'
import './sass/FilterBy.scss'
import MultiRangeSlider from './MultiRangeSlider'
import {FaPlus,FaMinus} from 'react-icons/fa'
import ColorFilter from './ColorFilter'
import CheckBox from './CheckBox'
import {useSelector} from 'react-redux'

const FilterBy = () => {
    const data = useSelector(state => state.SaleReducer.data);

    const max = data.reduce((acc, data) => acc = acc > data.price ? acc : data.price, 0);
    const min = data.reduce((prev, curr) => {
      return prev.price < curr.price ? prev.price : curr.price;
    });


    const [price, setPrice] = useState(false)
    const [color, setColor] = useState(false)
    const [check, setCheck] = useState(false);

    return (
        <>
            <div className="fitler-container">
                <h2>Filter by</h2>
                <div className="filters">
                <div className="range-slider single-filter">
                    <div className="top">
                        <p>Price</p>
                        <span onClick={() => setPrice(!price)}>{price ? <FaMinus />: <FaPlus />}</span>
                    </div>
                    <div className={`range ${price ? 'active': null}`}>
                    <MultiRangeSlider min={min} max={max} />
                    </div>
                </div>
                <div className="color-filter single-filter">
                    <div className="top">
                        <p>Color</p>
                        <span onClick={() => setColor(!color)}>{color ? <FaMinus />: <FaPlus />}</span>
                    </div>
                    <div className={`color-container ${color ? 'active': ''}`}>
                        <ColorFilter />
                    </div>
                </div>
                <div className="checkBox-filter single-filter">
                    <div className="top">
                        <p>size</p>
                        <span onClick={() => setCheck(!check)}>{check ? <FaMinus />: <FaPlus />}</span>
                    </div>
                    <div className={`checkBox-container ${check ? 'active': null}`}>
                        <CheckBox />
                    </div>
                </div>
                </div>
                <span className="clear-btn">Clear all</span>
            </div>
        </>
    )
}

export default FilterBy
