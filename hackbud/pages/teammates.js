import React, { useEffect, useState } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import CardNeedTeammate from '@/components/Card-need-teammate'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

function Teammates() {
    const { account, getSession, databases } = api()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        if (checkAuth()) {
            setTimeout(() => {
                const promise = databases.listDocuments(
                    process.env.NEXT_PUBLIC_DB_ID,
                    process.env.NEXT_PUBLIC_Collection_need_team_ID
                )

                promise.then(
                    function (response) {
                        // console.log(response) // Success
                        setData(response.documents)
                        setLoading(false)
                    },
                    function (error) {
                        console.log(error) // Failure
                    }
                )
            }, [4000])
        }
    }, [])

    return (
        <div className="w-full bg-[#141D2C] ">
            {loading ? (
                <div className="flex items-center justify-center h-screen ">
                    <div class="flex h-8 w-8 absolute">
                        <span class="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-white opacity-75"></span>
                        <span class="relative rounded-full h-8 w-8 -top-4 -left-4 bg-white"></span>
                    </div>
                </div>
            ) : (
                <div className="flex items-center w-full min-h-screen py-2 flex-col">
                    <div className="flex text-center md:text-left my-5">
                        <h1 className="text-4xl font-Montserrat:wght@300  text-white font-bold mb-4 ml-3">
                            Recommended Teammates
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen py-2 bg-[#141D2C] ">
                        {data.length > 0 &&
                            data.map((item, index) => (
                                <div key={index} className="mx-3">
                                    <CardNeedTeammate
                                        index={index}
                                        item={item}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Teammates
