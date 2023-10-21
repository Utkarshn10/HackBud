export default function Features() {
    return (
        <div class="bg-[#141D2C] p-4 md:p-8">
            <h1 className="flex items-center justify-center font-semibold text-6xl">Features</h1>
            <h4 className='flex items-center md:justify-center mt-4 md:my-7 text-gray-400 text-md'>Find Teams and Teammates, Apply to Teams, Invite Teammates</h4>
            <div class="container mx-auto  flex flex-col md:flex-row-reverse items-center justify-between mt-4 py-10">
                <div class="md:w-1/2">
                    <img
                        src="teams-main.png"
                        alt="Feature Image"
                        class="w-full h-auto rounded-2xl hover:shadow-xl"
                    />
                </div>
                <div class="md:w-1/2 p-4 md:p-7 text-center md:text-right">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                        🚀 Discover Your Dream Team
                    </h2>
                    <p class="text-gray-200 pt-1 md:pt-2">
                        Unlock the Power of HackBud to Find the{' '}
                        <span class="font-bold">Perfect Hackathon Team</span>
                    </p>
                </div>
            </div>

            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between mt-4 py-10">
                <div class="md:w-1/2">
                    <img
                        src="teammates-main.png"
                        alt="Feature Image"
                        class="w-full h-auto rounded-2xl hover:shadow-xl"
                    />
                </div>
                <div class="md:w-1/2 p-4 md:p-7 text-center">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                        🤝 Team Up for Success
                    </h2>
                    <p class="text-gray-200 pt-1">
                        Unleash Your Full Potential by{' '}
                        <span class="font-bold">
                            Connecting with Like-minded Hackers
                        </span>
                    </p>
                </div>
            </div>

            <div class="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 py-10">
                <div class="md:w-1/2">
                    <img
                        src="apply-main.png"
                        alt="Feature Image"
                        class="w-full h-auto rounded-2xl hover:shadow-xl"
                    />
                </div>
                <div class="md:w-1/2 p-4 md:p-7 text-center md:text-right">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                        🌟 Your Dream Team Awaits
                    </h2>
                    <p class="text-gray-200 pt-1">
                        <span class="font-bold">Seize Opportunities</span> and
                        Apply for the{' '}
                        <span class="font-bold">
                            Ultimate Hackathon Experience
                        </span>
                    </p>
                </div>
            </div>

            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between mt-4 py-10">
                <div class="md:w-1/2">
                    <img
                        src="invite-main.png"
                        alt="Feature Image"
                        class="w-full h-auto rounded-2xl hover:shadow-xl"
                    />
                </div>
                <div class="md:w-1/2 p-4 md:p-7 text-center">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                        📩 Invite Folks to Join Your Teams
                    </h2>
                    <p class="text-gray-200 pt-1">
                        Build Your Dream Team,{' '}
                        <span class="font-bold">One Invitation at a Time</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
