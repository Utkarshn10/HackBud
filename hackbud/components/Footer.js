import Link from "next/link";
export default function Footer() {
    return (
      <div className="w-full h-16 text-xs md:text-lg bg-[#141D2C] px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center text-center font-normal text-white">
          <span className="font-normal">© 2023 </span>
          <Link
            href="https://github.com/Utkarshn10"
            className="ml-1  hover:underline underline-offset-2"
          >
            Utkarsh Nagar
          </Link>
          <span className="ml-1">· All rights reserved.</span>
        </div>
      </div>
    );
  }