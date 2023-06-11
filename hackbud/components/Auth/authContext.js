import { createContext, useEffect, useState } from 'react'
import api from '../appwrite'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { account } = api()

    useEffect(() => {
        const promise = account.get('current')
        promise.then(
            function (response) {
                if (response.status === true) {
                    setIsAuthenticated(true)
                }
            },
            function (error) {
                console.log('error = ', error) // Failure
            }
        )
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
