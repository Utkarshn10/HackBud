import { createContext, useEffect, useMemo, useState } from 'react'
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

    const AuthObj = useMemo(()=>{
        let obj = { isAuthenticated, setIsAuthenticated }
        return obj
    },[isAuthenticated])

    return (
        <AuthContext.Provider value={AuthObj}>
            {children}
        </AuthContext.Provider>
    )
}
