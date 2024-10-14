import Link from 'next/link'

export default function Tos() {
    return (
        <div className="flex flex-col min-h-screen my-8 mx-2">
            <div className="flex items-start justify-start">
                <button>
                    <Link href="/">
                        <p>Back</p>
                    </Link>
                </button>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-3xl font-bold">Terms of Service</h1>
                <p className="text-lg"></p>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mx-auto max-w-lg px-4 h-full">
                <p className="text-lg mb-4">
                    Welcome to HackBud! These terms of service govern your use
                    of the HackBud and any related services provided by HackBud.
                    By accessing or using the application, you agree to be bound
                    by these Terms. If you do not agree to these Terms, please
                    do not use the application.
                </p>
                <p className="text-lg mb-4">
                    1. <strong>Use of Service</strong>
                    <ul className="list-disc ml-8">
                        <li>
                            HackBud provides a platform where users can add
                            information and share content.
                        </li>
                        <li>
                            By using the Service, you agree not to engage in any
                            activity that:
                            <ul className="list-disc ml-8">
                                <li>Violates any laws or regulations.</li>
                                <li>Infringes upon the rights of others.</li>
                                <li>
                                    Interferes with or disrupts the Service or
                                    servers connected to the Service.
                                </li>
                            </ul>
                        </li>
                        <li>
                            We reserve the right to suspend or terminate your
                            access to the Service at any time for any reason
                            without notice or liability.
                        </li>
                    </ul>
                </p>

                <p className="text-lg mb-4">
                    2. <strong>User Content</strong>
                    <ul className="list-disc ml-8">
                        <li>
                            Users may submit content, including text, images,
                            and other materials (&quot;User Content&quot;),
                            through the Service.
                        </li>
                        <li>
                            By submitting User Content, you grant HackBud a
                            worldwide, non-exclusive, royalty-free license to
                            use, reproduce, modify, adapt, publish, translate,
                            distribute, and display such User Content on the
                            application.
                        </li>
                        <li>
                            You are solely responsible for the User Content you
                            submit, and you represent and warrant that you have
                            all rights necessary to grant us the license
                            described above.
                        </li>
                    </ul>
                </p>
                <p className="text-lg mb-4">
                    3. <strong>Children&apos;s Privacy</strong>
                    <ul className="list-disc ml-8">
                        <li>
                            We do not knowingly collect any personal information
                            from children under the age of 13. If you are a
                            parent or guardian and you are aware that your child
                            has provided us with personal information, please
                            contact us so that we can take necessary actions.
                        </li>
                    </ul>
                </p>
                <p className="text-lg mb-4">
                    4. <strong>Data Collection Methods</strong>
                    <ul className="list-disc ml-8">
                        <li>
                            We may use web cookies to collect non-personal
                            information about user&apos;s interactions with the
                            Service.
                        </li>
                    </ul>
                </p>
                <p className="text-lg mb-4">
                    5. <strong>Governing Law</strong>
                    <ul className="list-disc ml-8">
                        <li>
                            These Terms shall be governed and construed in
                            accordance with the laws of India, without regard to
                            its conflict of law provisions.
                        </li>
                        <li>
                            Our failure to enforce any right or provision of
                            these Terms will not be considered a waiver of those
                            rights.
                        </li>
                    </ul>
                </p>
                <p className="text-lg mb-4">
                    6. <strong>Updates to the Terms</strong>
                    <ul className="list-disc ml-8">
                        <li>
                            Users will be notified of any updates to this
                            Privacy Policy via email.{' '}
                        </li>
                    </ul>
                </p>
                {/* Repeat for other sections */}
                <p className="text-lg mb-4">
                    If you have any questions about these Terms, please contact
                    us at html.emails1@gmail.com.
                </p>
                <p className="text-lg">
                    By using the HackBud, you agree to abide by these Terms of
                    Service. Thank you for using HackBud!
                </p>
            </div>
        </div>
    )
}
