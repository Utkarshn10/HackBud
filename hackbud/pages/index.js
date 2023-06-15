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
                    <div className="max-w-7xl font-Montserrat:wght@300 text-center sm:text-left mx-2">
                        <h1 className="relative flex flex-col px-4 items-center mt-8 md:mt-4 ">
                            <h1 className="text-4xl md:text-7xl my-2 md:my-4">
                                <span className="inline-block font-extrabold tracking-tight bg-gradient-to-r from-[#F9D307] to-[#FCA50A] bg-clip-text text-transparent">
                                Unleash 
                                </span>{' '}
                                <br />
                                <span className="inline-block font-extrabold tracking-tight bg-gradient-to-r from-[#FCA50A] to-[#FF8205] bg-clip-text text-transparent">
                                Your 
                                </span>{' '}
                                <span className="inline-block font-extrabold tracking-tight bg-gradient-to-r from-[#FCA50A] to-[#FF8205] bg-clip-text text-transparent">
                                Hackathon 
                                </span>{' '}
                                <br />
                                <span className="inline-block font-extrabold tracking-tight text-[#F9D307]">
                                Potential
                                </span>
                                <p className="text-base lg:text-2xl font-bold mt-4 md:mt-6  text-gray-300 ">
                                Empowering Collaboration in Hackathons
                            </p>
                            <Link
                            href="/signup"
                            className="flex mt-8 w-1/2 items-center rounded-xl p-4 justify-center font-lato text-[#332A36] bg-white text-lg font-medium"
                        >
                            Get Started
                            <div className="pl-3">
                                <BsArrowRightCircle />
                            </div>
                        </Link>
                            </h1>
                          
                        </h1>
                    </div>
                    <div className="md:my-0 md:mr-7">
                        <Image
                            src="/home-bg.png"
                            height={1000}
                            width={800}
                            className="rounded-3xl mx-auto shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
