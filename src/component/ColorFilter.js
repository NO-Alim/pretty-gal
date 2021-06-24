import React, { useCallback, useEffect, useState } from 'react'
import { FaBlackberry } from 'react-icons/fa'
import './sass/ColorFilter.scss'
import AllColor from '../colorData'
import { useGlobalContext } from '../context'
import ShopData from '../data'
import SaleData from '../SaleData'

const ColorFilter = () => {
    const {hoverColor, setHoverColor,setShopData,setSaleData} = useGlobalContext();
    const [colors, setColors] = useState(AllColor);
    const [activeId, setActiveId] = useState([
    ]);
    const [selectedColor , setSelectedColor] = useState([]);



    const handleClick = () => {
        console.log("nothing");
    }
    useEffect(() =>{
        //filter data which is include selected color name
        let filterShopData = ShopData.filter(e => e.color.filter(c => selectedColor.includes(c)).length > 0);
        let filterSaleData = SaleData.filter(e => e.color.filter(c=> selectedColor.includes(c)).length > 0)
        if (selectedColor.length < 1) {
            //if color not a single color selected 
            setShopData(ShopData);
            setSaleData(SaleData)
        } else {
            setShopData(filterShopData)
            setSaleData(filterSaleData)
        }
    },[selectedColor])


    return (
        <>
         <div className="colors">
             {colors.map((color,ind) => {
                 return (
                     
                    // eslint-disable-next-line no-lone-blocks
                    <button className={`color ${selectedColor.includes(color.name) ? 'active': null}`} key={ind} style={{background: `${color.hex}`}}  onClick={() => {{if (selectedColor.includes(color.name)) {
                        const arr = selectedColor.filter((item)=>{
                            return item !== color.name
                        })
                        setSelectedColor(arr);
                    }
                    else{
                    setSelectedColor(selectedColor.concat(color.name))
                }};handleClick()}} onMouseOver={() => setHoverColor(color.name)} onMouseOut={() => setHoverColor(null)} value={color.name}></button>
                )
             })}
        </div>
        </>
    )
}

export default ColorFilter

