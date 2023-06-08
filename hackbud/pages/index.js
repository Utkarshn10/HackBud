import SignUp from '@/components/Auth/auth'
import { Inter } from 'next/font/google'
import api from '@/components/appwrite'
import { useEffect } from 'react'

export default function Home() {
    // create a true/false context when success happens from oauth and on logout turn the auth context to false

    const { account } = api()
    const promise = account.getOauth2Session('current')

    promise.then(
        function (response) {
            console.log(response) // Success
        },
        function (error) {
            console.log("error = ",error) // Failure
        }
    )
    return (
        <main>
            <SignUp />
        </main>
    )
}
