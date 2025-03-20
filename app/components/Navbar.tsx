import { auth } from "@/auth"
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
    const session = await auth()
  return (
    <header className="bg-white px-5 py-3 shadow-sm font-work-sans">
        <nav className="flex justify-between items-center text-black">
           <Link href={"/"}>
           <Image src="/logo.svg" alt="logo" width={144} height={30} />
           </Link>
           <div className="flex items-center gap-5">
                {session && session?.user ? (
                    <>
                    <Link href={"/startup/create"}>
                    <span>Create</span>
                    </Link>
                    <form action={async () => {
                        "use server";
                        await signOut( Option: {redirectTo ="/"} );
                    }}>Logout</form>
                    <Link href={`/user/${session?.user?.name}`}></Link>
                    </>
                ):(
                    <form action={async () => {
                        "use server ";
                        await signIn(provider: 'github');
                    }}>
                       <button type="submit">Login</button>
                    </form>
                )}
           </div>
        </nav>
    </header>
  )
}
export default Navbar