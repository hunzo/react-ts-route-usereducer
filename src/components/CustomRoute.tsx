import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'

interface Props extends RouteProps {
    component: any
}

const isLogin = () => {
    const check = localStorage.getItem('_islogin')
    if (check !== null) {
        //check authentication ex. jwt
        return true
    }
    //no localstorage 
    return false
}

const ProtectRouter: React.FC<Props> = (props: Props) => {
    const { component: Component, ...rest } = props
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )
}

const UnProtectRouter: React.FC<Props> = (props: Props) => {
    const { component: Component, ...rest } = props
    return (
        <Route
            {...rest}
            render={(props) =>
                !isLogin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/home',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )
}

export { ProtectRouter, UnProtectRouter }
