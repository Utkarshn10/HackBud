import api from '@/components/appwrite'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Faq from '@/components/Faq'
import Header from '@/components/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title>HackBud</title>
            </Head>
            <div className="w-full">
                <Header />
                <Faq />
            </div>
        </>
    )
}
