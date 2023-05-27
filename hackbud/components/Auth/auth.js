import { Account,Appwrite, Client,ID } from 'appwrite'
import {api} from '../appwrite'
import { useState } from 'react'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async (event) => {
        event.preventDefault()

        try {
            let appwrite = new Client()
            appwrite.setEndpoint('https://cloud.appwrite.io/v1')
            appwrite.setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
        
            const account = new Account(appwrite)

            account.create(ID.unique(),email, password, name);
              
            // await api.createSession(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form>
            <input
                type="text"
                className="text-black"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSignUp}>
                Sign Up
            </button>
        </form>
    )
}
