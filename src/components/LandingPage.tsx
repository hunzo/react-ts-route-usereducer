import React from 'react'
import logo from '../logo512.png'

const LandingPage: React.FC = () => {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <p>
                <img src={logo} alt="logo" width="200px" />
            </p>
        </div>
    )
}

export default LandingPage
