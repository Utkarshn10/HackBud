import SignUp from '@/components/Auth/auth'
import { Inter } from 'next/font/google'
import api from '@/components/appwrite'
import { useEffect } from 'react'
import { AuthProvider } from '@/components/Auth/authContext'

export default function Home() {
    const { account } = api()

  
    return (
        <main>
            <SignUp />
        </main>
    )
}
