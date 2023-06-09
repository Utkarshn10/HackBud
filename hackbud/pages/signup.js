import { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useRouter } from 'next/router'
import { ID } from 'appwrite'
import api from '@/components/appwrite'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SignUp({ setOpenRegisterModal }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { account } = api()

    function createSession() {
        const promise = account.createEmailSession(email, password)
        promise.then(
            function (response) {
                setLoading(false)
                // console.log(response)
                router.push('/choices')
            },
            function (error) {
                console.log(error)
                toast.error("",error)
                setLoading(false)
            }
        )
    }
    const handleLogin = async () => {
        setLoading(true)
        const promise = account.create(ID.unique(), email, password)
        promise.then(
            function (response) {
                setLoading(false)
                // console.log(response)
                createSession()
            },
            function (error) {
                console.log(error)
                setLoading(false)
            }
        )
    }

    return (
        <div className=" bg-[#141D2C] flex justify-center items-center w-full">
            <div className="bg-submain w-full md:w-2/5 p-6 rounded-md">
                <div className="m-4">
                    {/* Cancel icon */}
                    <button
                        type="button"
                        className="relative float-right top-0 right-0 mb-2"
                        onClick={() => router.push('/')}
                    >
                        <MdOutlineCancel className="h-6 w-6 text-gray-500" />
                    </button>
                    <h1 className="mt-3 mb-8 text-gray-400  font-Montserrat:wght@300 font-bold text-5xl md:text-6xl">
                        Sign Up
                    </h1>

                    <div className="flex flex-col text-gray-200  font-lato mx-auto h-auto">
                        <h1 className="my-2 font-semibold text-base md:text-lg ">Email</h1>
                        <input
                            id="email"
                            placeholder="Type in your email address"
                            type="text"
                            className="w-full border border-gray-300 text-black rounded-md py-2 px-3 mt-2 mb-6"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label
                            htmlFor="password"
                            className="block font-semibold mb-1 text-base md:text-lg"
                        >
                           Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full border border-gray-300 text-black rounded-md py-2 px-3 mt-2 mb-6"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            className="py-2 rounded-lg w-full bg-gray-500 text-lg text-white font-semibold hover:bg-gray-700 hover:text-white p-2 px-4"
                            onClick={handleLogin}
                        >
                            {loading ? 'Loading...' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
