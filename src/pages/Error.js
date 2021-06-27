import React from 'react'
import './scss/Error.scss'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className="error">
            <h1>4<span>0</span>4!</h1>
            <h4>page not Found.</h4>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Error
