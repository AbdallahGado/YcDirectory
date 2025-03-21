"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white px-5 py-3 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center text-black">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={144}
            height={30}
            style={{ width: "auto", height: "auto" }} // ✅ Prevents Next.js warning
          />
        </Link>
        <div className="flex items-center gap-5">
          {session ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-red-500"
              >
                Logout
              </button>
              <Link href={`/user/${session.user?.name}`}>
                <span>{session.user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn("github")} className="text-blue-500">
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
