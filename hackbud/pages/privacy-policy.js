import Link from 'next/link'

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen my-8 mx-2 bg-white">
            <div className="flex items-start justify-start">
                <button>
                    <Link href="/">
                        <p>Back</p>
                    </Link>
                </button>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold">Privacy Policy</h1>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mx-auto max-w-lg px-4">
                <p className="text-lg mb-4">
                    Welcome to HackBud! This Privacy Policy describes how
                    HackBud collects, uses, and shares your information when you
                    use the HackBud application and any related services
                    provided by HackBud. By accessing or using the application,
                    you agree to the terms of this Privacy Policy. If you do not
                    agree to this Privacy Policy, please do not use the
                    application.
                </p>
                <h2 className="text-lg font-bold mb-2">
                    1. Information We Collect
                </h2>
                <p className="text-lg mb-4">
                    We collect information you provide directly to us when you
                    use the Service, such as when you create an account, submit
                    content, or contact us for support. The types of information
                    we may collect include your name, email address, and any
                    other information you choose to provide.
                </p>
                {/* Repeat for other sections */}
                <h2 className="text-lg font-bold mb-2">
                    3. Children$apos;s Privacy
                </h2>
                <p className="text-lg mb-4">
                    We do not knowingly collect any personal information from
                    children under the age of 13. If you are a parent or
                    guardian and you are aware that your child has provided us
                    with personal information, please contact us so that we can
                    take necessary actions.
                </p>
                <h2 className="text-lg font-bold mb-2">
                    4. Data Collection Methods
                </h2>
                <p className="text-lg mb-4">
                    We may use web cookies to collect non-personal information
                    about your interactions with the Service. This information
                    is used to analyze trends, administer the site, track
                    users&apos; movements around the site, and gather
                    demographic information about our user base as a whole. You
                    can control or disable cookie tracking through your browser
                    settings.
                </p>
                <h2 className="text-lg font-bold mb-2">
                    5. Information Sharing
                </h2>
                <p className="text-lg mb-4">
                    We may share your information with third-party service
                    providers who assist us in providing, maintaining, and
                    improving the Service. These service providers are obligated
                    to use your information only as necessary to provide the
                    services to us. We may also share your information in
                    response to a legal request, such as a subpoena, court
                    order, or government request.
                </p>
                <h2 className="text-lg font-bold mb-2">6. Governing Law</h2>
                <p className="text-lg mb-4">
                    This Privacy Policy shall be governed and construed in
                    accordance with the laws of India, without regard to its
                    conflict of law provisions.
                </p>
                <h2 className="text-lg font-bold mb-2">
                    7. Updates to the Privacy Policy
                </h2>
                <p className="text-lg mb-4">
                    Users will be notified of any updates to this Privacy Policy
                    via email.
                </p>
                <h2 className="text-lg font-bold mb-2">8. Contact Us</h2>
                <p className="text-lg mb-4">
                    If you have any questions about this Privacy Policy, please
                    contact us at html.emails1@gmail.com.
                </p>
                <p className="text-lg">
                    By using HackBud, you agree to the terms of this Privacy
                    Policy. Thank you for using HackBud!
                </p>
            </div>
        </div>
    )
}
