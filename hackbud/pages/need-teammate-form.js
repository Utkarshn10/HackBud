import React, { useState, useEffect } from 'react'
import api from '@/components/appwrite'
import { ID, Permission, Role } from 'appwrite'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const Form = () => {
    const { account, getSession, databases } = api()
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

    function SubmitForm(e) {
        e.preventDefault()
        const userId = account.client.config.project
        // const about = teamDescription
        // const available = true
        // const contact = contactEmail
        // const github_url = githubURL
        // const twitter_url = twitterURL
        // const skills = teamSkills
        const created_by = userId
        const data = {
            hackathonName,
            teamName,
            teamDescription,
            teamSkills,
            requiredTeammates,
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
            <form className="flex items-center justify-center bg-white w-full min-h-screen py-2 flex-col mb-8">
                <h1 className="text-3xl font-bold text-center text-black mt-6 mb-10">
                    Find a HackBud
                </h1>
                <div className="grid grid-cols-2 gap-4 px-4 md:px-0">
                    <div className="mb-4">
                        <label
                            htmlFor="hackathonName"
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                            htmlFor="requiredTeammates"
                            className="block mb-2 font-medium text-gray-700 font-semibold"
                        >
                            Required Number of Teammates
                        </label>
                        <input
                            type="number"
                            id="requiredTeammates"
                            value={requiredTeammates}
                            onChange={(e) =>
                                setRequiredTeammates(e.target.value)
                            }
                            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="country"
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                            className="block mb-2 font-medium text-gray-700 font-semibold"
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
                        className="px-4 py-2 mx-4 font-medium text-white bg-black rounded-md hover:bg-black w-1/4"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
