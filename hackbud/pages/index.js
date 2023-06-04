import SignUp from '@/components/Auth/auth'
import { Inter } from 'next/font/google'
import api from '@/components/appwrite'

export default function Home() {
    const {getSession} = api()
    console.log(getSession)
    return <main>
        <SignUp />
    </main>
}
