import api from '@/components/appwrite'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Faq from '@/components/Faq'
import Header from '@/components/Header'


export default function Home() {
    return (
        <>
            <Head>
                <Head>
                    <title>Hackbud - Hackathon Team Building App</title>
                    <meta
                        name="description"
                        content="Connect with like-minded individuals and build teams for hackathons on Hackbud, the ultimate team building app."
                    />

                    {/* Set other meta tags as needed */}
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        name="keywords"
                        content="hackathon, team building, app, Hackbud"
                    />
                    <meta name="author" content="Utkarsh Nagar" />
                </Head>
            </Head>
            <div className="w-full">
                <Header />
                <Faq />
            </div>
        </>
    )
}
