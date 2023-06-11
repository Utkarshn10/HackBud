import SignUp from '@/components/Auth/auth'
import { Inter } from 'next/font/google'
import api from '@/components/appwrite'
import { useEffect } from 'react'
import { AuthProvider } from '@/components/Auth/authContext'

export default function Home() {
    const { account } = api()

    // useEffect(()=>{
    //     const promise = account.get('current')

    //     promise.then(
    //         function (response) {
    //             console.log(response) // Success
    //         },
    //         function (error) {
    //             console.log('error = ', error) // Failure
    //         }
    //     )
    // },[])
  
    return (
        <main>
            <SignUp />
        </main>
    )
}
