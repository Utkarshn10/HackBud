import { useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '@/components/appwrite'

function Dashboard() {
    const { account, databases, getSession } = api()
    const router = useRouter()
    const session = getSession()
    useEffect(() => {
        if (session) {
            const promise = databases.listDocuments(
                '6472e9626de7a4f0ed84',
                '6472e99701633339b475'
            )
            // const promise2 = databases.listDocuments(process.env.DB_ID, process.env.COLLECTION_need_team_ID);
            promise.then(
                function (response) {
                    console.log(response)
                },
                function (error) {
                    console.log(error)
                    router.push('/info')
                }
            )
        }
    })

    return (
        <>
            <h1>Dashboard after login</h1>
        </>
    )
}

export default Dashboard
