import { createContext, useContext, useState } from "react";

const LoginSessionContext = createContext(null)

export const LoginSessionProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [role, setRole] = useState(null)
    const isUserLoggedIn = () => {
        if (sessionStorage.getItem('isLoggedIn') !== null) {
            return true
        }
        return false
    }
    const login = (role) => {
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.setItem('isLoggedIn', 'jwttoken')
        sessionStorage.removeItem('role')
        sessionStorage.setItem('role', role)
        setLoggedIn(true)
        setRole(role)
    }

    const logout = () => {
        sessionStorage.removeItem('isLoggedIn')
        setLoggedIn(false)

        sessionStorage.removeItem('role')
        setRole(null)
    }

    return (
        <LoginSessionContext.Provider value={{ login, logout, isLoggedIn, isUserLoggedIn, role }}>
            {children}
        </LoginSessionContext.Provider>
    )
}

export const useLoginSessionContext = () => useContext(LoginSessionContext)