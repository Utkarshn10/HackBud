import Link from 'next/link'
import api from '@/components/appwrite'

export default function Header() {
    const { account } = api()

    const handleGitHubLogin = () => {
        account.createOAuth2Session('github', 'https://hack-bud.vercel.app/')
    }

    return (
        <div className="mt-12 md:my-24 ">
            {' '}
            <div className=" items-center justify-center">
                <div className="flex justify-center items-center text-center px-4">
                    <div className="text-3xl md:text-6xl font-bold text-white">
                        Elevate Your{' '}
                        <span className="px-2 bg-clip-text text-transparent bg-gradient-to-t from-purple-400 via-pink-400 to-white rounded-lg">
                            Hackathon
                        </span>
                        Game{' '}
                        <p className="flex justify-center mt-2">with HackBud</p>
                    </div>
                </div>
                <div className="flex justify-center items-center px-10 md:px-0 text-sm md:text-xl md:leading-8 my-6 flex-col text-slate-400">
                    <p className="flex justify-center text-center w-2/3">
                        Building a team for Hackathons just became a lot easier
                    </p>
                    <button
                        onClick={() => handleGitHubLogin()}
                        className="flex mt-5 md:mb-0 items-center rounded-xl py-4 px-4 justify-center font-lato text-white bg-violet-600 hover:bg-violet-900 text-sm md:text-lg font-normal"
                    >
                        Get started for Free
                    </button>
                </div>
                <p className="my-5 text-slate-400 flex justify-center">
                    70+ Hackathon Enthusiasts already joined!
                </p>
            </div>
        </div>
    )
}
