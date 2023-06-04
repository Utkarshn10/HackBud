import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className="flex items-center justify-center bg-white py-8">{children}</main>
        <Footer />
      </>
    );
  }