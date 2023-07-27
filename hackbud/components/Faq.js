function FaqCard({ question, answer }) {
    return (
        <div className="bg-slate-800 m-4 p-8 rounded-xl">
            <h3 className="text-white font-normal text-base md:text-xl">{question}</h3>
            <div className="text-slate-400 text-sm md:text-lg mt-4">{answer}</div>
        </div>
    )
}

export default function Faq() {
    const data = [
        [
            'Can I use HackBud to find teammates for specific technology stacks or project domains?',
            "Absolutely! HackBud's Team Finder and Teammate Finder pages allow you to filter and search based on specific criteria such as project domain, required skills, and technologies involved. This makes it easier for you to find teammates who align with your project requirements",
        ],
        [
            'Can I create a profile for my existing team on HackBud?',
            "Yes, you can create a profile for your existing team on HackBud. Provide detailed information about your team's skills, expertise, and areas of interest to attract potential teammates who align with your goals",
        ],
        [
            'How can I connect with potential team leads or teammates on HackBud?',
            'Yes, you can find the necessary contact details of a team or team lead on their profile page. This typically includes their email address and potentially other ways to connect, such as a LinkedIn profile or a personal website',
        ],
        [
            'Can I use HackBud to participate in hackathons globally?',
            "HackBud allows you to participate in hackathons globally, connecting you with hackathon enthusiasts worldwide. Whether you're seeking teammates for a local event or looking to join a global hackathon, HackBud helps you find the right people to form winning teams",
        ],
        ['Is HackBud free to use?', 'Yes, HackBud is completely free to use'],
    ]
    return (
        <>
            <div className="flex justify-center text-center mt-4 md:mt-8">
                <div className="flex flex-col">
                    <div className="text-white font-bold text-2xl md:text-5xl">
                        Frequently asked questions
                    </div>
                    <div className="text-slate-400 text-lg md:text-xl my-4 md:my-8 flex justify-center ">
                        We have put together some commonly asked questions
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {data.map((item,index) => (
                    <FaqCard key={index} question={item[0]} answer={item[1]} />
                ))}
            </div>
        </>
    )
}
