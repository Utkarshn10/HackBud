import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <ToastContainer />
            <Component {...pageProps} />
            <Analytics />
        </Layout>
    )
}
