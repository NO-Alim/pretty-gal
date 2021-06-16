import React from 'react'
import './scss/Stockists.scss'

const Stockists = () => {
    return (
        <>
            <div className="stockists-container">
                <h1>STOCKISTS</h1>
                <p className="main-para">find us in these fine store</p>
                <div className="stockists">
                    <div className="stockist-store">
                        <h3>The blues</h3>
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123.456.7890</p>
                        <br />
                        <p>Mon-Sat: 10:00am-7:00pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="stockist-store">
                        <h3>Eva</h3>
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123.456.7890</p>
                        <br />
                        <p>Mon-Fri: 9:00am-6:00pm</p>
                        <p>Sat-Sun: 10:00am-5:00pm</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stockists
