import Link from "next/link";

export default function Navbar() {
    return (
      <div className="bg-black w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start h-16">
          <div className="md:ml-16 flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="text-white font-Montserrat:wght@300  font-bold text-xl">
                HackBud
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }