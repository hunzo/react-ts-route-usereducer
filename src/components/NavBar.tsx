import React from 'react'
import { Link} from 'react-router-dom'
import '../App.css'
import { useAuth } from '../AuthContext'

const NavBar: React.FC = () => {
    const { state, dispatch } = useAuth()
    return (
        <nav>
            <ul className="list">
                <li className="items">
                    <Link to="/home">Home</Link>
                </li>
                <li className="items">
                    <Link to="/app">App</Link>
                </li>
            </ul>
            <p>hello: {state.username}</p>
            <button
                className="btn"
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
