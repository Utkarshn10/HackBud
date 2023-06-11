import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import api from '@/components/appwrite'
import AuthContext from './Auth/authContext'
import { useRouter } from 'next/router'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isTabSelected, setIsTabSelected] = useState('')
    const { account, deleteCurrentSession } = api()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const promise = account.get()
        promise.then(
            function (response) {
                console.log(response) // Success
                if (response.status === true) {
                    setIsAuthenticated(true)
                }
            },
            function (error) {
                console.log('error = ', error) // Failure
                setIsAuthenticated(false)
            }
        )
    }, [account, isAuthenticated])

    function logoutClicked() {
        console.log('Session deleted')
        deleteCurrentSession()
        setIsAuthenticated(false)
        router.push('/')
    }

    return (
        <div>
            <nav className="bg-[#141D2C]">
                {isAuthenticated ? (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Link href="/">
                                        <div className="text-white font-Montserrat:wght@300  font-bold text-2xl">
                                            HackBud
                                        </div>
                                    </Link>
                                </div>

                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link
                                            href="/teams"
                                            onClick={() =>
                                                setIsTabSelected('teams')
                                            }
                                            className={`text-gray-300 hover:underline underline-offset-8 hover:text-white px-3 py-2 rounded-md text-md font-medium ${
                                                isTabSelected === 'teams'
                                                    ? 'underline underline-offset-8'
                                                    : ''
                                            }`}
                                        >
                                            Find Teams
                                        </Link>

                                        <Link
                                            href="/teammates"
                                            onClick={() =>
                                                setIsTabSelected('teammates')
                                            }
                                            className={`text-gray-300 hover:underline underline-offset-8 hover:text-white px-3 py-2 rounded-md text-md font-medium ${
                                                isTabSelected === 'teammates'
                                                    ? 'underline underline-offset-8'
                                                    : ''
                                            }`}
                                        >
                                            Find Teammates
                                        </Link>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="flex justify-end items-center">
                                    <button
                                        onClick={() => logoutClicked()}
                                        className="font-semibold text-black bg-white py-2 px-4 rounded-3xl"
                                    >
                                        Logout
                                    </button>
                                </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only"></span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                        <div className="h-16">
                            <div className="grid grid-cols-2">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <div className="text-white font-Montserrat:wght@300 font-bold text-2xl">
                                            HackBud
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex justify-end  items-center">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link
                                            href="/login"
                                            className="text-gray-300 hover:underline underline-offset-8 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            href="/signup"
                                            className="text-gray-300 hover:underline underline-offset-8 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                        >
                                            SignUp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            {isAuthenticated ? (
                                <div
                                    ref={ref}
                                    className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                                >
                                    <Link
                                        href="/teams"
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Find Teams
                                    </Link>

                                    <Link
                                        href="/teammates"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Find Teammates
                                    </Link>
                                    <button
                                        onClick={() => logoutClicked()}
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div
                                    ref={ref}
                                    className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                                >
                                    <Link
                                        href="/login"
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/signup"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        SignUp
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}
