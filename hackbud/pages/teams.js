import React, { useEffect, useState } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import Card from '@/components/Card'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

function Teams() {
    const { account, getSession, databases, deleteCurrentSession } = api()
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
                    process.env.NEXT_PUBLIC_Collection_ID
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
                        <span class="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-violet-600 opacity-75"></span>
                        <span class="relative rounded-full h-8 w-8 -top-4 -left-4 bg-violet-400"></span>
                    </div>
                </div>
            ) : (
                <div className="flex items-center w-full  py-2 flex-col">
                    <div className="flex text-center md:text-left my-5">
                        <h1 className="text-4xl font-bold mb-4 text-white ml-3 font-orkney:wght@300">
                            Recommended Teams
                        </h1>
                    </div>
                    {data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-2 md:w-4/5">
                            {data.map((item, index) => (
                                <div key={index} className="mx-4 md:mx-2">
                                    <Card index={index} item={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="font-bold text-slate-500 flex items-center py-2 ">
                            No Data available
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Teams
