import Image from 'next/image'
import Link from 'next/link'

export default function Choices() {
    function logoutClicked() {
        console.log('Session deleted')
        deleteCurrentSession()
        router.push('/')
    }
    return (
        <div className="w-full">
            <nav className="flex bg-[#141D2C] justify-between">
                <div className="flex h-16 items-center ml-3">
                    <Link href="/">
                        <div className="text-white font-Montserrat:wght@300 font-bold text-2xl flex justify-start">
                            HackBud
                        </div>
                    </Link>
                </div>
                <div className="flex items-center mr-3">
                    <button
                        onClick={() => logoutClicked()}
                        className="font-semibold text-black bg-white py-2 px-4 rounded-3xl"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div className="flex items-center justify-center bg-white w-full min-h-screen py-2 flex-col">
                <div className="flex items-center justify-center flex-col mt-4">
                    <h2 className="font-bold text-4xl text-black text-center mb-4">
                        Collaborate, Innovate, Succeed
                    </h2>
                    <div className="text-center w-full md:w-3/5 px-4 md:px-6 font-medium text-sm md:text-lg mb-4">
                        <div className="text-slate-400 font-normal">
                            Harness the power of collaboration. Connect with
                            driven individuals who are eager to work together,
                            share ideas, and push the boundaries of innovation.
                            Achieve your goals and create a legacy.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <div className="bg-white w-3/4 text-black border-2 border-slate-200 rounded-3xl my-2 md:my-10 cursor-pointer flex flex-col items-center justify-center hover:shadow-xl hover:border-slate-300">
                            <Link
                                href="/team-form"
                                className="w-full h-50"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src="/teams.jpg"
                                    alt="Team"
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    className="rounded-lg m-4"
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                            <h2 className="font-semibold text-lg my-3">
                                Looking for a Team?
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-white w-3/4 text-black border-2 border-slate-200 rounded-3xl my-2 md:my-10 cursor-pointer flex flex-col items-center justify-center hover:shadow-xl hover:border-slate-300">
                            <Link
                                className="w-full h-50"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    overflow: 'hidden',
                                }}
                                href="need-teammate-form"
                            >
                                <Image
                                    src="/teammate.webp"
                                    alt="Teammates"
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    className="rounded-lg m-4"
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                            <h2 className="font-semibold text-lg my-3">
                                Looking for Teammates?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
