import { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useRouter } from 'next/router'
import { ID } from 'appwrite'
import api from '@/components/appwrite'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { account } = api()

    const handleLogin =  () => {
        const promise =  account.createEmailSession(email, password)

        promise.then(
            function (response) {
                console.log(response) // Success
                setLoading(false)
                // router.push('')
            },
            function (error) {
                setLoading(false)
                console.log(error) // Failure
            }
        )
    }

    return (
         <div className=" bg-[#141D2C] flex justify-center items-center w-full">
            <div className="bg-submain md:w-2/5 w-2/3 p-6 rounded-md">
                <div className="m-4">
                    {/* Cancel icon */}
                    <button
                        type="button"
                        className="relative float-right top-0 right-0 mb-2"
                        onClick={() => router.push('/')}
                    >
                        <MdOutlineCancel className="h-6 w-6 text-gray-500" />
                    </button>
                    <h1 className="mt-3 mb-8 main-font font-Montserrat:wght@300 font-bold text-6xl">
                        Sign in
                    </h1>

                    <div className="flex flex-col submain-font font-lato mx-auto h-auto">
                        <h1 className="my-2 font-semibold text-lg ">Email</h1>
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
                            className="block font-semibold mb-1 text-lg"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full border text-black border-gray-300 rounded-md py-2 px-3  mt-2 mb-6"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            className="py-2 rounded-lg w-full bg-gray-400 text-lg text-white font-semibold hover:bg-gray-700 hover:text-white p-2 px-4"
                            onClick={handleLogin}
                        >
                            {loading ? 'Loading...' : 'Sign In'}
                        </button>

                        {/* <button
                            type="button"
                            className="py-2 mt-2 rounded-lg w-full  text-lg font-semibold text-[#3A4D5E] hover:bg-[#E4F4FA] p-2 px-4"
                            // onClick={}
                        >
                            Forgot Password?
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}