import { Account, Appwrite, Client, ID } from 'appwrite'
import api from '../appwrite'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignUp() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { account } = api()

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            account.createOAuth2Session('github', 'http://localhost:3000/info')
        } catch (error) {
            console.log(error)
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
