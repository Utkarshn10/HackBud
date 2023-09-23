import React, { useState, useEffect } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const Form = () => {
    const { account, databases } = api()
    const [hackathonName, setHackathonName] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamDescription, setTeamDescription] = useState('')
    const [teamSkills, setTeamSkills] = useState([])
    const [requiredTeammates, setRequiredTeammates] = useState(0)
    const [country, setCountry] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [githubURL, setGithubURL] = useState('')
    const [twitterURL, setTwitterURL] = useState('')
    const router = useRouter()
    const [userId,setUserId] =useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await account.get()
                console.log(response.$id)
                setUserId(response.$id)
                // Success
            } catch (error) {
                console.error('error = ', error) // Failure
                router.push('/')
            }
        }

        fetchData()
    }, [])

    async function SubmitForm(e) {
        e.preventDefault()
        // const about = teamDescription
        // const available = true
        // const contact = contactEmail
        // const github_url = githubURL
        // const twitter_url = twitterURL
        // const skills = teamSkills
        const created_by = userId
        console.log(userId, created_by)

        const data = {
            hackathonName,
            teamName,
            teamDescription,
            teamSkills,
            country,
            contactEmail,
            githubURL,
            created_by,
        }

        databases
            .createDocument(
                process.env.NEXT_PUBLIC_DB_ID,
                process.env.NEXT_PUBLIC_Collection_ID,
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
                // console.log(response)
                router.push('/teammates')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="w-full">
            <form className="flex items-center justify-center w-full min-h-screen py-2 flex-col mb-8">
                <h1 className="text-4xl font-bold text-center text-white mt-6 mb-14">
                    Find a HackBud
                </h1>
                <div className="grid grid-cols-2 gap-4 px-4 md:px-0">
                    <div className="mb-4">
                        <label
                            htmlFor="hackathonName"
                            className="block mb-2 font-medium text-gray-100"
                        >
                            Hackathon Name
                        </label>
                        <input
                            type="text"
                            id="hackathonName"
                            value={hackathonName}
                            onChange={(e) => setHackathonName(e.target.value)}
                            className="w-full text-black px-3 py-2 border rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="teamName"
                            className="block mb-2 font-medium text-gray-100 "
                        >
                            Team Name
                        </label>
                        <input
                            type="text"
                            id="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label
                            htmlFor="teamDescription"
                            className="block mb-2 font-medium text-gray-100 "
                        >
                            Team Description
                        </label>
                        <textarea
                            id="teamDescription"
                            value={teamDescription}
                            onChange={(e) => setTeamDescription(e.target.value)}
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="teamSkills"
                            className="block mb-2 font-medium text-gray-100"
                        >
                            Team Skills
                        </label>
                        <input
                            type="text"
                            id="teamSkills"
                            value={teamSkills}
                            onChange={(e) =>
                                setTeamSkills(e.target.value.split(','))
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
                            className="block mb-2 font-medium text-gray-100"
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
                    <div className="mb-4">
                        <label
                            htmlFor="twitterURL"
                            className="block mb-2 font-medium text-gray-100"
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
                    </div>
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
                        className="px-4 py-2 mx-4 font-medium text-white bg-violet-600 hover:bg-violet-900 rounded-md w-1/4"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
