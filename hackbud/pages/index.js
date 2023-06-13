import api from '@/components/appwrite'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
import Link from 'next/link'

export default function Home() {
    const { account } = api()

    return (
        <>
            <Head>
                <title>HackBud</title>
            </Head>
            <div className="w-full">
                <Navbar />
                

                <div className="lg:overflow-hidden flex flex-col md:flex-row mx-auto mb-auto items-center justify-center md:py-16">
                    <div className="max-w-7xl font-Montserrat:wght@300 text-center sm:text-left mx-6 ">
                        <h1 className="relative flex flex-col px-4 items-center mt-8 md:mt-4 ">
                            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight my-2 md:my-4">
                                <span className="inline-block bg-gradient-to-r from-[#F9D307] to-[#FCA50A] bg-clip-text text-transparent">
                                    Unlock
                                </span>{' '}
                                <br />
                                <span className="inline-block  bg-gradient-to-r from-[#FCA50A] to-[#FF8205] bg-clip-text text-transparent">
                                    your
                                </span>{' '}
                                <br />
                                <span className="inline-block text-[#F9D307]">
                                    potential
                                </span>
                            </h1>
                            <p className="text-base lg:text-2xl font-bold mt-2 md:mt-3 flex justify-center text-center relative text-gray-300 items-center">
                                in the world of hackathons and innovation
                            </p>
                        </h1>
                        <Link
                            href="/signup"
                            className="flex mt-8 mx-auto w-1/2 justify-center items-center rounded-xl p-4 font-lato text-[#332A36] bg-white text-lg font-medium"
                        >
                            Get Started
                            <div className="pl-3">
                                <BsArrowRightCircle />
                            </div>
                        </Link>
                    </div>
                    <div className="my-10 md:my-0  ">
                        <Image
                            src="/main-bg2.png"
                            height={1000}
                            width={700}
                            className="rounded-3xl mx-auto shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
