import { Account, Appwrite, Client, ID } from 'appwrite'
import api from '../appwrite'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import authContext from './authContext'

export default function SignUp() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { account } = api()
    const {setIsAuthenticated} = useContext(authContext)

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            account.createOAuth2Session('github', 'http://localhost:3000/info')
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
        }
    }

    return (
        <>
            <button type="submit" onClick={handleSignUp}>
                Sign Up
            </button>
        </>
    )
}
