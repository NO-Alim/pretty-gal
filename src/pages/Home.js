import React from 'react'
import Header from '../component/Header'
import YearRound from '../component/YearRound'
import './scss/Home.scss'

const Home = () => {
    return (
        <>
            <div className="Home">
                <Header />
                <YearRound />
            </div>
        </>
    )
}

export default Home
