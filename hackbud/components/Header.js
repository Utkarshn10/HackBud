import Link from 'next/link'

export default function Header() {
    return (
        <div className='mt-12'>
            {' '}
            <div className="flex justify-center items-center">
                <div className="text-4xl md:text-8xl font-bold text-white">
                    Unleash Your Hackathon{' '}
                    <p className="flex justify-center mt-2">
                        Success with HackBud
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center px-10 md:px-0 text-sm md:text-xl md:leading-8 my-6 flex-col text-slate-400">
                Are you ready to take your hackathon experience to the next
                level? Meet HackBud,{' '}
                <p className="flex justify-center ">
                    the ultimate team/teammate finder web app. Connect with
                    like-minded individuals, build{' '}
                </p>{' '}
                <p className="flex justify-center ">
                    dream teams, and make your hackathon dreams come true. Sign
                    up for free now!
                </p>
                <Link
                    href="/signup"
                    className="flex mt-10 mb-4 md:mb-0 items-center rounded-full py-4 px-6 justify-center font-lato text-white bg-violet-600 hover:bg-violet-900 text-sm md:text-lg font-normal"
                >
                    Get Started Now
                </Link>
            </div>
            <p className="my-11 text-slate-400 flex justify-center">
                50+ Hackathon Enthusiasts already joined!
            </p>
        </div>
    )
}