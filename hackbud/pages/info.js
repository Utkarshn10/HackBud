import api from '@/components/appwrite'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Info() {
    const router = useRouter()
    const { account, listD, getSession } = api()

    return (
        <div>
            <h1>Info</h1>
            <Link href="/form">Want to be part of a team ?</Link>
            <Link href="/need-teammate">Looking for a teammate ?</Link>
        </div>
    )
}

export default Info
