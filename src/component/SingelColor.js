import React,{useState} from 'react'

const SingelColor = ({color}) => {

    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (e) => {
        setSelectedColor(e.target.value);
    }

return (
    <div className="colors">
        <div className="color-name">
            <p>Color: {selectedColor}</p>
        </div>
        <div className="colors-container">
        {color.map((item,ind) => {
            return(
                <div  key={ind} className="main-color">
                    <p className="hover-color">{item}</p>
                    <button className="color-box" style={{backgroundColor:`${item}`}} value={item}  onClick={handleColorSelect}></button>
                </div>
            )
        })}
        </div>
    </div>
)
}

export default SingelColor



        






