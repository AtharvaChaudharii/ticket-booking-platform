import { SignedIn } from "@clerk/nextjs"
import { SignInButton } from "@clerk/nextjs"
import { SignedOut } from "@clerk/nextjs"
import logo from "@/images/logo.png"
import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import SearchBar from "./SearchBar"

function Header() {
  return (
    <div className="border-b">
       <div className="flex flex-col lg:flex-row items-center gap-4 p-4 ">
        <div className="flex items-center justify-between w-full lg:w-auto">

            <Link href="/" className="font-bold shrink-0">
                <Image src={logo} alt="logo" width={100} height={100} className="w-24 lg:w-28 " />
            </Link>

            <div className="lg:hidden">
                <SignedIn>    {/* helper component from clerk nextjs*/}
                <UserButton />
                </SignedIn>
                <SignedOut>
                   <SignInButton mode="modal">
                    <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300 cursor-pointer">
                    Sign In
                    </button>
                 </SignInButton>
                </SignedOut>
            </div>
        </div>

          {/* Search Bar - Full width on mobile */}
          <div className="w-full lg:max-w-2xl">
            <SearchBar />
         </div>

        {/* Signed in user options - For Desktop  */}
        <div className="hidden lg:block ml-auto">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition cursor-pointer">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300 cursor-pointer">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300 cursor-pointer">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/*for mobile */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition cursor-pointer">
                Sell Tickets
              </button>
            </Link>

            <Link href="/tickets" className="flex-1">
              <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300 cursor-pointer ">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>


       </div>
    </div>
  )
}

export default Header