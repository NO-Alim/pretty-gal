import React from 'react'
import './scss/CustomerCare.scss'
import CustomerForm from '../component/CustomerForm'
import Return from '../component/Return'
import Faq from '../component/Faq'

const CustomerCare = () => {
    return (
        <>
            <div className="customerCare-container">
                <div className="customer-content">
                    <h1>CUSTOMER CARE</h1>
                    <p className="main-para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <div className="coustomer-form-container">
                        <CustomerForm />
                    </div>
                    <div className="return-container">
                        <Return />
                    </div>
                    <div className="faq-container">
                        <Faq />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerCare
