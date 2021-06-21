import React, { useCallback, useEffect, useState } from 'react'
import { FaBlackberry } from 'react-icons/fa'
import './sass/ColorFilter.scss'
import AllColor from '../colorData'
import { useGlobalContext } from '../context'

const ColorFilter = () => {
    const {hoverColor, setHoverColor} = useGlobalContext();
    const [colors, setColors] = useState(AllColor);
    const [activeId, setActiveId] = useState([
        1,2
    ]);

    const addOrRemove = (e) =>{
        if (activeId.includes(e.target.value)) {
            console.log('match');
        }
        if (!activeId.includes(e.target.value)) {
            console.log("doesn't match");
        }
    }

    useEffect(() => {
        //filter products
        console.log(activeId);
    },[activeId])
    return (
        <>
         <div className="colors">
             {colors.map((color,ind) => {
                 return (
                    //  toggle value into array
                    //activeId = [1,2,3....]
                        <button className={`color ${activeId.includes(color.id) ? 'active': null}`} key={ind} style={{background: `${color.hex}`}}  onClick={() => {if (activeId.includes(color.id)) {
                            const arr = activeId.filter((item)=>{
                                return item !== color.id
                            })
                            setActiveId(arr);
                        }
                        else{
                        setActiveId(activeId.concat(color.id))
                    }}} onMouseOver={() => setHoverColor(color.name)} onMouseOut={() => setHoverColor(null)} value={color.id}></button>
                    )
             })}
        </div>   
        </>
    )
}

export default ColorFilter
