import api from '@/components/appwrite'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
import Link from 'next/link'
import Faq from '@/components/Faq'
import Header from '@/components/Header'

export default function Home() {
    const { account } = api()

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
