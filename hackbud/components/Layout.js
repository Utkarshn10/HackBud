import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import api from '@/components/appwrite'
import { Query } from 'appwrite'

export default function Layout({ children }) {
    const [documents, setDocuments] = useState([])
    const { account, databases } = api()

    useEffect(async () => {
        const accountData = await account.get()
        const userId = accountData.$id
        const docs = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_Collection_need_team_ID,
            [Query.equal('created_by', [userId])]
        )
        setDocuments(docs)
    }, [])

    return (
        <div className="h-screen flex flex-col">
            <Navbar documents={documents} />
            <main className="flex-grow flex bg-[#141D2C]">{children}</main>
            <Footer />
        </div>
    )
}
