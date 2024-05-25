import { createContext, useContext, useState } from "react";

const LoginSessionContext = createContext(null)

export const LoginSessionProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const isUserLoggedIn = () => {
        if (sessionStorage.getItem('isLoggedIn') !== null) {
            return true
        }
        return false
    }
    const login = () => {
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.setItem('isLoggedIn', 'jwttoken')
        setLoggedIn(true)
    }

    const logout = () => {
        sessionStorage.removeItem('isLoggedIn')
        setLoggedIn(false)
    }

    return (
        <LoginSessionContext.Provider value={{ login, logout, isLoggedIn, isUserLoggedIn }}>
            {children}
        </LoginSessionContext.Provider>
    )
}

export const useLoginSessionContext = () => useContext(LoginSessionContext)