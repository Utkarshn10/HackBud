import SignUp from '@/components/Auth/auth'
import { Inter } from 'next/font/google'
import api from '@/components/appwrite'
import { useEffect } from 'react'
import { AuthProvider } from '@/components/Auth/authContext'
import Navbar from '@/components/Navbar'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
    const { account } = api()

    return (
            <div className="w-full">
                <Navbar />
            </div>
    )
}
