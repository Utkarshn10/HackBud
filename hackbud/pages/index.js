import Head from 'next/head'
import Faq from '@/components/Faq'
import Header from '@/components/Header'
import Features from '@/components/Features'

export default function Home() {
    const pageTitle = 'HackBud - Building Hackathon Teams Made Easy'
    const pageDescription =
        'Find your dream hackathon team effortlessly with HackBud. Connect with like-minded hackers and make teamwork a breeze. Join us today!'
    const imageUrl = 'https://hack-bud.vercel.app/teammates-main.png'
    const pageUrl = 'https://hack-bud.vercel.app/'

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="keywords"
                    content="hackathon teams, team building, hackathon, team finder, teamwork, HackBud"
                />
                <meta
                    name="keywords"
                    content="Hackathon,Hackathon Teams, Hackathon Team finder, Hackathon Teammates"
                />
                <meta
                    name="google-site-verification"
                    content={process.env.NEXT_PUBLIC_ANALYTICS}
                />
                <meta
                    name="google-adsense-account"
                    content={process.env.NEXT_PUBLIC_AD}
                />

                {/* Open Graph (Facebook, LinkedIn, etc.) */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:url" content={pageUrl} />
                <meta name="author" content="Utkarsh Nagar" />
            </Head>

            <div className="w-full bg-[#0F172A]">
                <Header />
                <Features />
                <Faq />
            </div>
        </>
    )
}
