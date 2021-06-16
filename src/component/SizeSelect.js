import React,{useState} from 'react'
import Select from 'react-select';
import './sass/SizeSelect.scss'

const options = [
    { value: 'large', label: 'Large' },
    { value: 'medium', label: 'Medium' },
    { value: 'small', label: 'Small' },
  ];

const SizeSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
        console.log(selectedOption.value);
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
