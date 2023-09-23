import React, { useEffect, useState } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

const Form = () => {
    const { account, databases } = api()
    const [personName, setPersonName] = useState('')
    const [Description, setDescription] = useState('')
    const [Skills, setSkills] = useState([])
    const [country, setCountry] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [githubURL, setGithubURL] = useState('')
    const [twitterURL, setTwitterURL] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const promise = account.get()
        promise.then(
            function (response) {
                //success
            },
            function (error) {
                console.log('error = ', error) // Failure
                router.push('/')
            }
        )
    }, [])

    async function SubmitForm(e) {
        e.preventDefault()
        const userId = await account.get().id
        const created_by = userId
        const name = personName
        const about = Description
        const available = true
        const contact = contactEmail
        const github_url = githubURL
        const twitter_url = twitterURL
        const skills = Skills

        // Check for missing fields
        const missingFields = []
        if (!name) missingFields.push('Hackathon Name')
        if (!about) missingFields.push('Team Description')
        if (!skills.length) missingFields.push('Team Skills')
        if (!country) missingFields.push('Country')
        if (!contactEmail) missingFields.push('Contact Email')
        if (!githubURL) missingFields.push('GitHub URL')
        // Display toast message if any field is missing
        if (missingFields.length > 0) {
            toast.error('Please fill all in the missing fields')
            return
        }
        const data = {
            name,
            about,
            skills,
            country,
            contact,
            github_url,
            available,
            created_by,
        }
        databases
            .createDocument(
                process.env.NEXT_PUBLIC_DB_ID,
                process.env.NEXT_PUBLIC_Collection_need_team_ID,
                ID.unique(),
                data,
                [
                    (Permission.read(Role.any()),
                    // Permission.update(Role.team("writers")),
                    Permission.write(Role.any())),
                    // Permission.delete(Role.team("writers")),
                    // Permission.delete(Role.team("writers")),
                    // Permission.update(Role.user(userId)),
                    // Permission.write(Role.user(userId)),
                    // Permission.delete(Role.user(userId))
                ]
            )
            .then((response) => {
                router.push('/teams')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // function ResetForm() {
    //     setHackathonName('')
    //     setTeamName('')
    //     setTeamDescription('')
    //     setTeamSkills([])
    //     setRequiredTeammates(0)
    //     setCountry('')
    //     setContactEmail('')
    //     setGithubURL('')
    //     setTwitterURL('')
    // }

    return (
        <div className="w-full">
            <form className="flex items-center justify-center w-full min-h-screen py-2 flex-col mb-8 px-4 md:px-0">
                <h1 className="text-4xl font-bold text-center text-white mt-6 mb-10">
                    Find your HackBuds
                </h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4 col-span-2">
                        <label
                            htmlFor="teamName"
                            className="block mb-2 font-medium text-gray-100 "
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="personName"
                            value={personName}
                            onChange={(e) => setPersonName(e.target.value)}
                            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label
                            htmlFor="Description"
                            className="block mb-2 font-medium text-gray-100"
                        >
                            Description
                        </label>
                        <textarea
                            id="Description"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="Skills"
                            className="block mb-2 font-medium text-gray-100"
                        >
                            Skills
                        </label>
                        <input
                            type="text"
                            id="Skills"
                            value={Skills}
                            onChange={(e) =>
                                setSkills(e.target.value.split(','))
                            }
                            placeholder="Next.js, TailwindCSS, Figma"
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="country"
                            className="block mb-2 font-medium text-gray-100"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="contactEmail"
                            className="block mb-2 font-medium text-gray-100"
                        >
                            Contact Email
                        </label>
                        <input
                            type="email"
                            id="contactEmail"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="githubURL"
                            className="block mb-2 font-medium text-gray-100 "
                        >
                            GitHub URL
                        </label>
                        <input
                            type="url"
                            id="githubURL"
                            value={githubURL}
                            onChange={(e) => setGithubURL(e.target.value)}
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label
                            htmlFor="twitterURL"
                            className="block mb-2 font-medium text-gray-700 font-semibold"
                        >
                            Twitter URL (optional)
                        </label>
                        <input
                            type="url"
                            id="twitterURL"
                            value={twitterURL}
                            onChange={(e) => setTwitterURL(e.target.value)}
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                        />
                    </div> */}
                </div>
                <div className="flex justify-center w-full my-8">
                    {/* <button
                        type="reset"
                        onClick={ResetForm}
                        className="px-4 py-2 mx-4 font-medium text-black bg-white rounded-md hover:bg-gray-400"
                    >
                        Reset
                    </button> */}
                    <button
                        type="submit"
                        onClick={SubmitForm}
                        className="px-4 py-2 mx-4 font-medium text-white bg-violet-600 hover:bg-violet-900 rounded-md  w-1/4"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <ToastContainer />
        </div>
    )
}

export default Form
