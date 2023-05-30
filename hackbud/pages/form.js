import React, { useState } from 'react'
import api from '@/components/appwrite'

const Form = () => {
    const { account, getSession } = api()
    const [hackathonName, setHackathonName] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamDescription, setTeamDescription] = useState('')
    const [teamSkills, setTeamSkills] = useState([])
    const [requiredTeammates, setRequiredTeammates] = useState(0)
    const [country, setCountry] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [githubURL, setGithubURL] = useState('')
    const [twitterURL, setTwitterURL] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        // Create an object with form data
        const formData = {
            hackathonName,
            teamName,
            teamDescription,
            teamSkills,
            requiredTeammates,
            country,
            contactEmail,
            githubURL,
            twitterURL,
        }

        // Do something with the form data (e.g., send it to an API)
        console.log(formData)
    }

    function ResetForm() {
        setHackathonName('')
        setTeamName('')
        setTeamDescription('')
        setTeamSkills([])
        setRequiredTeammates(0)
        setCountry('')
        setContactEmail('')
        setGithubURL('')
        setTwitterURL('')
    }

    return (
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label
                    htmlFor="hackathonName"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Hackathon Name
                </label>
                <input
                    type="text"
                    id="hackathonName"
                    value={hackathonName}
                    onChange={(e) => setHackathonName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="teamName"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Team Name
                </label>
                <input
                    type="text"
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="teamDescription"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Team Description
                </label>
                <textarea
                    id="teamDescription"
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="teamSkills"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Team Skills
                </label>
                <input
                    type="text"
                    id="teamSkills"
                    value={teamSkills}
                    onChange={(e) => setTeamSkills(e.target.value.split(','))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="requiredTeammates"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Required Number of Teammates
                </label>
                <input
                    type="number"
                    id="requiredTeammates"
                    value={requiredTeammates}
                    onChange={(e) => setRequiredTeammates(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="country"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Country
                </label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="contactEmail"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Contact Email
                </label>
                <input
                    type="email"
                    id="contactEmail"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="githubURL"
                    className="block mb-2 font-medium text-gray-700"
                >
                    GitHub URL
                </label>
                <input
                    type="url"
                    id="githubURL"
                    value={githubURL}
                    onChange={(e) => setGithubURL(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="twitterURL"
                    className="block mb-2 font-medium text-gray-700"
                >
                    Twitter URL (optional)
                </label>
                <input
                    type="url"
                    id="twitterURL"
                    value={twitterURL}
                    onChange={(e) => setTwitterURL(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="reset"
                    onClick={ResetForm}
                    className="px-4 py-2 mx-4 font-medium text-black bg-white rounded-md hover:bg-gray-400"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    onClick={handleFormSubmit}
                    className="px-4 py-2 mx-4 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form
