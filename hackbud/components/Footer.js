import Link from "next/link";
export default function Footer() {
    return (
      <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center text-center text-white">
          <span className="font-semibold">© 2023 </span>
          <Link
            href="https://github.com/Utkarshn10"
            className="ml-1 font-semibold hover:underline underline-offset-2"
          >
            Utkarsh Nagar
          </Link>
          <span className="ml-1 font-semibold">· All rights reserved.</span>
        </div>
      </div>
    );
  }