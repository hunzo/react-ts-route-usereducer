import { createContext, useContext, useReducer } from 'react'

// Reducer
type Auth = {
    isLogin: boolean
    username: string
}

type Action = {
    type: 'LOGIN' | 'LOGOUT'
    username: string
    islogin: boolean
}

const initAuth: Auth = {
    isLogin: false,
    username: '',
}

const authReducer = (auth: Auth, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('_token', action.username)
        
            return { ...auth, isLogin: true, username: action.username }

        case 'LOGOUT':
            console.log('call authReducer LOGOUT')
            localStorage.clear()
            return { ...auth, isLogin: false, username: '' }

        default:
            return auth
    }
}

// Context

type Dispatch = (action: Action) => void

export const AuthContext = createContext<
    { state: Auth; dispatch: Dispatch } | undefined
>(undefined)

export const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initAuth)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be use inside AuthProvider')
    return context
}
