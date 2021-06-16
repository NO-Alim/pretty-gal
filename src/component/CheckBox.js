import React,{useState} from 'react'
import './sass/CheckBox.scss'

const CheckBox = () => {
    const size = ["large","medium","small"]
    const [checkedValues, setCheckedValues] = useState([]);

    const handleChecked = (e) => {
        setCheckedValues(checkedValues.concat(e.target.value));
    }
    return (
        <>
            <div className="check-boxes">
                {size.map((item,ind) => {
                    return(
                        <div className="checkbox" key={ind}>
                            <input type="checkbox" value={item} onClick={handleChecked}/>
                            <label>{item}</label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CheckBox
