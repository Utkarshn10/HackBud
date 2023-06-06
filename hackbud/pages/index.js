import SignUp from '@/components/Auth/auth'
import { Inter } from 'next/font/google'
import api from '@/components/appwrite'
import { useEffect } from 'react'

export default function Home() {
    const { account } = api()
    const promise = account.getSession('current')

    promise.then(
        function (response) {
            console.log(response) // Success
        },
        function (error) {
            console.log(error) // Failure
        }
    )
    return (
        <main>
            <SignUp />
        </main>
    )
}
