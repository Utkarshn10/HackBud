import React, { useEffect, useState } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import Card from '@/components/Card'

function Teams() {
    const { account, getSession, databases } = api()
    const [data, setData] = useState([])

    useEffect(() => {
        const promise = databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_Collection_need_team_ID
        )

        promise.then(
            function (response) {
                console.log(response) // Success
                setData(response.documents)
            },
            function (error) {
                console.log(error) // Failure
            }
        )
    }, [])

    useEffect(() => {
        data.map((item) => {
            console.log(item)
        })
    })
    return (
        <div className=' bg-white'>
            <div className='flex text-left'>
                <h1 className="text-3xl font-orkney font-bold mb-4 text-black  ml-3">
                    Recommended Teams
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen py-2">
                {data.length > 0 &&
                    data.map((item, index) => (
                        <div className="mx-3">
                            <Card index={index} item={item} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Teams
