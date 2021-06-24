import React,{useEffect, useState} from 'react'
import Select from 'react-select';
import { useGlobalContext } from '../context';
import './sass/SizeSelect.scss'

const options = [
    { value: 'large', label: 'Large' },
    { value: 'medium', label: 'Medium' },
    { value: 'small', label: 'Small' },
  ];

const SizeSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {setItemSize,selectWarning, setSelectWarning} = useGlobalContext();

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        setItemSize(selectedOption.value);
        setSelectWarning(false)
    }

    // useEffect(() =>{
    //     const timeout = () => {
    //         setTimeout(() => {
    //             setSelectWarning(false)
    //         }, 3000);
    //     }

    //     timeout();
    //     return(
    //         timeout()
    //     )
    // },[selectWarning])
    return (
        <>
            <div className="size-container">
                <p>size</p>
            <Select options={options} value={selectedOption} onChange={handleChange}/>
            <span className={`warning ${selectWarning ? 'active' : null}`}>Please select your size</span>
            </div>
        </>
    )
}

export default SizeSelect
