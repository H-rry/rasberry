"use client"

import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";


const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="w-full bg-gradient-to-r from-fuchsia-950 via-purple-950 to-rose-950 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
      <Link className="text-4xl font-black tracking-wide text-rose-500" href="/">Raspberry</Link>
      <div className="flex gap-4">
        <Link className="text-lg hover:text-rose-500 hover:scale-115 duration-200" href="/control-centre">Control Centre</Link>
        <Link className="text-lg hover:text-rose-500 hover:scale-115 duration-200" href="/targets">Targets</Link>
        <Link className="text-lg hover:text-rose-500 hover:scale-115 duration-200" href="/timeline">Timeline</Link>
      </div>
      <div>
        {session ? (
            <button onClick={() => signOut()} className="text-lg font-bold bg-rose-500 text-black px-4 py-2 rounded-md hover:bg-rose-600">
              Sign Out
            </button>
        ) : (
            <button onClick={() => signIn()} className="text-lg font-bold bg-rose-500 text-black px-4 py-2 rounded-md hover:bg-rose-600">
              Sign In
            </button>
        )}
      </div>

      </nav>
      </header>
  )
}
export default Header;
