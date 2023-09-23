import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '@/components/appwrite'

export default function Choices() {
    const { account } = api()
    const router = useRouter()

    function logoutClicked() {
        console.log('Session deleted')
        deleteCurrentSession()
        router.push('/')
    }

    useEffect(() => {
        const promise = account.get()
        promise.then(
            function (response) {},
            function (error) {
                console.log('error = ', error) // Failure
                router.push('/')
                return false
            }
        )
    }, [])
    return (
        <div className="w-full bg-[#141D2C]">
            <div className="flex items-center justify-center  w-full py-2 flex-col">
                <div className="flex items-center justify-center flex-col  mt-4">
                    <h2 className="font-bold text-4xl text-white text-center mb-4">
                        Where Ideas Flourish, Together
                    </h2>
                    <div className="text-center w-full md:w-2/5 px-4 md:px-6 mt-6 font-medium text-sm md:text-lg">
                        <div className="text-slate-400 font-normal">
                            At the heart of progress lies collaboration. Join a
                            community of driven individuals eager to unite their
                            talents, share ideas, and redefine innovation.
                            Together, we will pave the path to success.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <div className="bg-white w-3/4 text-black border-2 border-slate-200 rounded-3xl my-2 md:my-10 cursor-pointer flex flex-col items-center justify-center transition-transform hover:shadow-xl hover:border-white transform hover:scale-105">
                            <Link
                                href="/team-form"
                                className="w-full h-30"
                                style={{
                                    maxWidth: '70%',
                                    maxHeight: '40%',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src="/teams.jpg"
                                    alt="Team"
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    className="rounded-lg m-4"
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                            <h2 className="font-semibold text-lg my-3">
                                Looking for a Team?
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-white w-3/4 text-black border-2 border-slate-200 rounded-3xl my-2 md:my-10 cursor-pointer flex flex-col items-center justify-center transition-transform hover:shadow-xl hover:border-white transform hover:scale-105">
                            <Link
                                className="w-full h-30"
                                style={{
                                    maxWidth: '70%',
                                    maxHeight: '40%',
                                    overflow: 'hidden',
                                }}
                                href="need-teammate-form"
                            >
                                <Image
                                    src="/teammate.webp"
                                    alt="Teammates"
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    className="rounded-lg m-4"
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                            <h2 className="font-semibold text-lg my-3">
                                Looking for Teammates?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
