import React, { useState } from 'react'
import './sass/CustomerForm.scss'

const CustomerForm = () => {
    const [customerState, setCustomerState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange =(e) => {
        const value = e.target.value;
        setCustomerState({
            ...customerState,
            [e.target.name]: value
        })
    }
    return (
        <div className="Form-container">
            <div className="content">
                <p>Have any questions or concerns? <br /> We’re always ready to help!</p>
                <div>
                    <strong>Call Us at</strong>
                    <p>123-456-7890</p>
                    <p>or send us an email to:</p>
                    <p>info@mysite.com</p>
                </div>
            </div>
            <div className="form">
                <form>
                    <input type="text" value={customerState.name} name="name" placeholder="Name"  onChange={handleChange}/>
                    <input type="Email" value={customerState.email} name="email" placeholder="Email"  onChange={handleChange}/>
                    <input type="text" value={customerState.subject} name="subject" placeholder="Subject"  onChange={handleChange}/>
                    <textarea name="message" value={customerState.message} placeholder="Message" onChange={handleChange}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default CustomerForm
