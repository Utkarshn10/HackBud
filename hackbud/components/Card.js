import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Query } from 'appwrite'
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import axios from 'axios'
import api from '@/components/appwrite'
import { toast } from 'react-toastify'
import startCase from 'lodash/startCase';

function Card({ index, item }) {
    const [date, setDate] = useState('')
    const { account, databases } = api()
    const colors = ['#e3dbfa', '#fbe2f4', '#ffe1cc', '#d4f6ed']
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const dateString = item.$updatedAt
        const date = new Date(dateString)

        const year = date.getFullYear()
        const month = new Intl.DateTimeFormat('en-US', {
            month: 'long',
        })
            .format(date)
            .slice(0, 3)
        const day = date.getDate()

        const formattedDate = `${day} ${month}, ${year}`
        setDate(formattedDate)
    }, [])

    async function sendEmail(userEmail, teamName) {
        setLoader(true)
        const userId = account.client.config.project
        const documents = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_Collection_need_team_ID,
            [Query.equal('created_by', [userId])]
        )
        const applierEmail = documents.documents[0].contact
        const applierName = documents.documents[0].name
        const applierGitHub = documents.documents[0].github_url
        const applierSkills = documents.documents[0].skills.join()

        if (
            applierEmail.length > 0 &&
            applierName.length > 0 &&
            applierGitHub.length > 0 &&
            applierSkills.length > 0
        ) {
            if (userEmail === applierEmail) {
                toast.error('You cannot apply for you own Team.')
            } else {
                const requestData = {
                    userEmail,
                    teamName,
                    applierEmail,
                    applierName,
                    applierGitHub,
                    applierSkills,
                }
                axios
                    .post('/api/apply-email', requestData)
                    .then((response) => {
                        setLoader(false)
                        toast.success('Email Sent Successfully')
                    })
                    .catch((err) => {
                        setLoader(false)
                        console.log(err)
                    })
            }
        } else {
            setLoader(false)

            toast.error('Please fill Join a Team form to Apply')
        }
    }

    return (
        <div className="w-full border rounded-3xl bg-white border-slate-100">
            <div
                className={`bg-${
                    colors[index % colors.length]
                } rounded-3xl m-1`}
                style={{ backgroundColor: colors[index % colors.length] }}
            >
                <div className="mx-3 py-1">
                    <div className="mt-2"></div>
                    <div className="font-bold flex items-center justify-start font-Montserrat:wght@300  text-black py-2 ">
                        <h2 className="text-lg">{item.teamName}</h2>
                    </div>

                    <div className="my-4 text-black">
                        {/* <h3 className="text-sm font-bold font-orkney">
                            {item.teamName}
                        </h3> */}
                        <h1 className="text-lg font-bold font-orkney">
                            {item.hackathonName}
                        </h1>
                        <h1 className="text-sm font-light font-orkney mt-3">
                            {item.teamDescription}
                        </h1>
                    </div>

                    <div className="my-1 grid grid-cols-3">
                        {item.teamSkills.map((skill, indexitem) => (
                            <div
                                key={indexitem}
                                className="border rounded-2xl flex items-center justify-center bg-white my-2 mx-1 text-black text-xs py-2 px-4 "
                            >
                                {startCase(skill)}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row">
                    <Link
                        className="flex my-3 text-md items-center justify-center text-black mx-4 hover:underline underline-offset-4"
                        href={item.githubURL}
                    >
                        <AiFillGithub className="text-md" />
                        <h2 className="pl-1">Github</h2>
                    </Link>
                    <button
                        className="flex m-3 ml-auto text-md items-center justify-center text-white bg-purple-500 font-semibold rounded-xl px-4 py-2 hover:bg-purple-700 hover:text-white mx-4 "
                        onClick={() =>
                            sendEmail(item.contactEmail, item.teamName)
                        }
                    >
                        {!loader ? (
                            <>
                                <AiOutlineMail className="text-md" />
                                <h2 className="pl-1 font-orkney">Apply</h2>
                            </>
                        ) : (
                            <h2>
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    class="inline w-2 h-2 mr-2 text-purple-700 animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                    ></path>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Sending.
                            </h2>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card
