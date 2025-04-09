"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-[#f7f7f7]  px-5 py-3  shadow-sm font-work-sans">
      <nav className="flex justify-between items-center text-black">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={144}
            height={30}
            priority // ✅ Adds priority for faster loading
            style={{ width: "auto", height: "auto" }} // ✅ Prevents Next.js warning
          />
        </Link>

        <div className="flex items-center gap-5">
          {session ? (
            <div className="flex items-center gap-4">
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              {/* User Info */}
              <Link
                href={`/user/${session.user?.name}`}
                className="flex items-center gap-2"
              >
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-red-500 cursor-pointer hover:underline "
                >
                  Logout
                </button>
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt="Profile Picture"
                    width={35}
                    height={35}
                    className="rounded-full border"
                  />
                )}
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {/* GitHub Login */}
              <button
                onClick={() => signIn("github")}
                className="flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-lg text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.216.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.528 2.341 1.088 2.91.832.091-.647.35-1.088.637-1.338-2.22-.252-4.556-1.11-4.556-4.94 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.584 9.584 0 0112 6.84c.85.004 1.706.114 2.505.334 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.393.1 2.646.64.698 1.03 1.59 1.03 2.682 0 3.841-2.34 4.685-4.567 4.932.36.31.678.924.678 1.863 0 1.345-.013 2.428-.013 2.758 0 .268.18.578.688.48A10.006 10.006 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                Login with GitHub
              </button>

              {/* Google Login */}
              <button
                onClick={() => signIn("google")}
                className="flex items-center gap-2 border border-blue-500 px-4 py-2 rounded-lg text-blue-600 font-medium hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.5 0 6.6 1.3 9 3.5l6.8-6.8C35.8 2 30.3 0 24 0 14.5 0 6.4 5.3 2.6 13.1l7.9 6.1C13 12.9 18 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.5 24.5c0-1.5-.1-2.9-.4-4.3H24v8.1h13c-.6 3.1-2.3 5.7-4.8 7.4l7.4 5.8c4.3-3.9 6.9-9.7 6.9-16z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.6 28.3c-1-3.1-1-6.4 0-9.5L2.7 13c-3.2 6.3-3.2 13.8 0 20.1l7.9-4.8z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 48c6.3 0 11.7-2 15.6-5.4l-7.4-5.8c-2.1 1.4-4.7 2.2-7.6 2.2-6 0-11-3.9-12.8-9.2l-7.9 4.8C8.3 42.8 15.5 48 24 48z"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
