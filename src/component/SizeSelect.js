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
    const {setItemSize} = useGlobalContext();

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        setItemSize(selectedOption.value)
    }
    return (
        <>
            <div className="size-container">
                <p>size</p>
            <Select options={options} value={selectedOption} onChange={handleChange}/>
            </div>
        </>
    )
}

export default SizeSelect
