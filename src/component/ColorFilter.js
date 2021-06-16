import React, { useCallback, useState } from 'react'
import { FaBlackberry } from 'react-icons/fa'
import './sass/ColorFilter.scss'
import AllColor from '../colorData'

const ColorFilter = () => {
    
    const [colors, setColors] = useState(AllColor);
    const [activeId, setActiveId] = useState([
        1,2
    ]);
    const [colorName, setColorName] = useState('');

    // const handleClick = (e) => {
    //     activeId.concat(e.id)
    // }

    return (
        <>
         <div className="colors">
             {colors.map((color,ind) => {
                 return (
                        <span className={`color ${1 === color.id} ? 'active' : null}`} key={ind} style={{background: `${color.hex}`}} onClick={() => {setActiveId(activeId.concat(color.id));setColorName(color.name)}}></span>
                    )
             })}
        </div>   
        </>
    )
}

export default ColorFilter
