import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'

function Card({ index, item }) {
    const [date, setDate] = useState('')
    const colors = ['#e3dbfa', '#fbe2f4', '#ffe1cc', '#d4f6ed']
    useEffect(() => {
        const dateString = item.$updatedAt
        const date = new Date(dateString)

        const year = date.getFullYear()
        const month = new Intl.DateTimeFormat('en-US', {
            month: 'long',
        }).format(date)
        const day = date.getDate()

        const formattedDate = `${day} ${month}, ${year}`
        setDate(formattedDate)
    }, [])

    return (
        <div className="w-full border rounded-xl border-slate-300 ">
            <div
                className={`bg-${colors[index % colors.length]} rounded-xl m-1`}
                style={{ backgroundColor: colors[index % colors.length] }}
            >
                <div className="mx-3 py-1">
                    <div className="mt-2"></div>
                    <div className="w-1/3 border font-bold rounded-3xl flex items-center justify-center bg-white text-black text-xs py-2 ">
                        <h2 className="">{date}</h2>
                    </div>

                    <div className="my-4 text-black">
                        <h3 className="text-sm font-bold font-orkney">
                            {item.teamName}
                        </h3>
                        <h1 className="text-lg font-bold font-orkney">
                            {item.hackathonName}
                        </h1>
                        <h1 className="text-sm font-light font-orkney mt-3">
                            {item.teamDescription}
                        </h1>
                    </div>

                    <div className="my-1 grid grid-cols-4">
                        {item.teamSkills.map((skill,indexitem) => (
                            <div key={indexitem} className="border rounded-2xl flex items-center justify-center border-slate-400 my-2 mx-1 text-black text-xs py-2 px-4 ">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <h2 className="my-3 text-xs text-black mx-4 font-orkney">
                Required teammates: {item.requiredTeammates}
            </h2>
            <div className="flex flex-row">
                <Link
                    className="flex my-3 text-md items-center justify-center text-black mx-4 hover:underline underline-offset-4"
                    href={item.githubURL}
                >
                    <AiFillGithub className="text-md" />
                    <h2 className="pl-1">Github</h2>
                </Link>
                <Link
                    className="flex my-3 text-md items-center justify-center text-black mx-4  hover:underline underline-offset-4"
                    href={item.contactEmail}
                >
                    <AiOutlineMail className="text-md" />
                    <h2 className="pl-1 font-orkney">Email</h2>
                </Link>
                {/* {item.twitterUrl != null && (
                    <Link
                        className="flex my-3 text-md items-center justify-center text-black mx-4 hover:underline underline-offset-4"
                        href={item.twitter_url}
                    >
                        <AiOutlineTwitter className="text-md" />
                        <h2 className="pl-1">Twitter</h2>
                    </Link>
                )} */}
            </div>
        </div>
    )
}
export default Card
