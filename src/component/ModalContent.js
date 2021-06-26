import React, { useState } from 'react'
import {link} from 'react-router-dom'

const ModalContent = () => {
    const [signUp, setSignUp] = useState(false);
    return (
        <>
            <div className="modal-content">
                <div className={`contentOne ${signUp? 'active' : null}`}>
                    <h1>Sign Up</h1>
                    <p>already a member? <span className="tab-link" onClick={() => setSignUp(!signUp)}>log In</span></p>
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password"/>
                        <input type="submit" />
                    </form>
                </div>
                <div className={`contentOne ${signUp? null : 'active'}`}>
                    <h1>Log In</h1>
                    <p>New to the site? <span className="tab-link" onClick={() => setSignUp(!signUp)}>Sign up</span></p>
                    <form>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <span>forgot password</span>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalContent
