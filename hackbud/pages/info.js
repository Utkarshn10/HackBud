import api from '@/components/appwrite'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Info() {
    const router = useRouter()
    const { account, listD, getSession } = api()
    const [postInfoTeam, setPostInfoTeam] = useState(false)
    const [postInfoTeammate, setPostInfoTeammate] = useState(false)

    useEffect(() => {}, [])

    const handlePostInfoTeam = () => {}

    const handlePostInfoTeammate = () => {}

    return (
        <div>
            <h1>Info</h1>
            <Link href="/form">
                Looking for a teammate ?
            </Link>
            <Link href="/form">
                Want to be part of a team ?
            </Link>
        </div>
    )
}

export default Info
