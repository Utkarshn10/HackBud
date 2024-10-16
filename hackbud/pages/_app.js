import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/fonts.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
    // checks that we are client-side
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
            process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
        },
    })
}

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <PostHogProvider client={posthog}>
                <ToastContainer />
                <Component {...pageProps} />
            </PostHogProvider>
        </Layout>
    )
}
