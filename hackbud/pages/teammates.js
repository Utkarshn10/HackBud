import React, { useEffect, useState } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import CardNeedTeammate from '@/components/Card-need-teammate'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

function Teammates() {
    const { account, getSession, databases } = api()
    const [data, setData] = useState([])
    const router = useRouter()

    const checkAuth = async () => {
        const promise = account.get()
        promise.then(
            function (response) {
                return true
            },
            function (error) {
                console.log('error = ', error) // Failure
                router.push('/')
                return false
            }
        )
    }

    useEffect(() => {
        if (checkAuth()) {
            const promise = databases.listDocuments(
                process.env.NEXT_PUBLIC_DB_ID,
                process.env.NEXT_PUBLIC_Collection_need_team_ID
            )

            promise.then(
                function (response) {
                    // console.log(response) // Success
                    setData(response.documents)
                },
                function (error) {
                    console.log(error) // Failure
                }
            )
        }
    }, [])

    return (
        <div className="w-full">
            <Navbar />
            <div className="flex items-center bg-white w-full min-h-screen py-2 flex-col">
                <div className="flex text-left my-5">
                    <h1 className="text-4xl font-orkney font-bold mb-4 text-black ml-3">
                        Recommended Teammates
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen py-2 bg-white">
                    {data.length > 0 &&
                        data.map((item, index) => (
                            <div key={index} className="mx-3">
                                <CardNeedTeammate index={index} item={item} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Teammates
