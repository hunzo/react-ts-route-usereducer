import React from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../AuthContext'

const LoginPage: React.FC = () => {
    const {dispatch} = useAuth()
    const history = useHistory()
    return (
        <>
            <div className="container">
                <p>Login Page</p>
                <button onClick={() => {
                    const store = {
                        username: "myusername",
                        token: "mytoken"
                    }
                    localStorage.setItem('_islogin', JSON.stringify(store))
                    dispatch({type: "LOGIN", username: store.username, islogin: true})
                    history.push('/home')
                }}>Login</button>
            </div>
        </>
    )
}

export default LoginPage
