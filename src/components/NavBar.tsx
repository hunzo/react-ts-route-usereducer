import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import '../App.css'
import { useAuth } from '../AuthContext'

const NavBar: React.FC = () => {
    const { state, dispatch } = useAuth()
    return (
        <nav>
            <ul className="menu">
                <li>
                    <NavLink className="button" to="/home">Home</NavLink>
                </li>
                <li >
                    <NavLink className="button" to="/app">App</NavLink>
                </li>
            </ul>
            <button
                className="button"
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
