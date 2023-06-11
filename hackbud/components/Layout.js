import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="h-screen flex flex-col">
            {/* <Navbar /> */}
            <main className="flex-grow flex bg-[#141D2C]">{children}</main>
            <Footer />
        </div>
    )
}
