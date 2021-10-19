import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../AuthContext'

const NavBar: React.FC = () => {
    const { dispatch } = useAuth()
    return (
        <nav>
            <a href="/">Logo</a>
            <ul className="bar">
                <li className="items">
                    <Link to="/home">Home</Link>
                </li>
                <li className="items">
                    <Link to="/app">App</Link>
                </li>
            </ul>
            <button
                className="nav-btn"
                onClick={() =>
                    dispatch({
                        type: 'LOGOUT',
                        islogin: false,
                        username: '',
                    })
                }
            >
                logout
            </button>
        </nav>
    )
}

export default NavBar
