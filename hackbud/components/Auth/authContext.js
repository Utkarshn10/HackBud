import { createContext, useEffect } from 'react'
import api from '../appwrite'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false) 
    const { account } = api()

    useEffect(()=>{
        const session  = account.getSession('current')
        console.log(session)
    },[])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
