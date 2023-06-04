import { useEffect, useState } from 'react'

function Card({ index,item }) {
    console.log(item)
    const [date, setDate] = useState('')
    const colors = [
        '#e3dbfa',
        '#fbe2f4',
        '#ffe1cc',
        '#d4f6ed'
    ]
    useEffect(() => {
        const dateString = item.$updatedAt;
        const date = new Date(dateString)

        const year = date.getFullYear()
        const month = new Intl.DateTimeFormat('en-US', {
            month: 'long',
        }).format(date)
        const day = date.getDate()

        const formattedDate = `${day} ${month} ${year}`
        setDate(formattedDate)
    }, [])

    return (
        <div className="w-full h-1/3 border rounded-xl border-black ">
            <div className={`bg-[${colors[index%4]}] rounded-xl m-1`}>
                <div className="m-2">
                    <div className="rounded-xl bg-white text-black text-xs w-1/4 p-2">
                        {date}
                    </div>

                    <div className="my-4 text-black">
                        <h3 className="text-sm">{item.name}</h3>
                        <h1 className="text-md font-bold">Hackathon Name</h1>
                    </div>

                    <div className="my-2 grid grid-cols-4">
                        {item.skills.map((skill) => (
                            <div className="border rounded-xl border-slate-700 my-2 mx-1 text-black text-xs p-2 ">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
