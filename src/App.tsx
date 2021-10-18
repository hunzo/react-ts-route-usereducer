import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { useAuth } from './AuthContext'
import AppPage from './components/AppPage'
import { ProtectRouter, UnProtectRouter } from './components/CustomRoute'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import NavBar from './components/NavBar'
const App: React.FC = () => {
    const { state, dispatch } = useAuth()
    //localstorage
    useEffect(() => {
        const isLogin = localStorage.getItem('_islogin')
        if (isLogin !== null) {
            dispatch({
                type: 'LOGIN',
                islogin: true,
                username: JSON.parse(isLogin).username,
            })
        }
    }, [dispatch])

    return (
        <div className="App">
            <BrowserRouter>
                {state.isLogin ? <NavBar /> : null}
                <Switch>
                    <UnProtectRouter exact path="/" component={LoginPage} />
                    <ProtectRouter path="/home" component={LandingPage} />
                    <ProtectRouter path="/app" component={AppPage} />
                    <Route path="*" component={LoginPage} />
                </Switch>
            </BrowserRouter>
            {JSON.stringify(state)}
        </div>
    )
}

export default App
