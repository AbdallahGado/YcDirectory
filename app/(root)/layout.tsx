<<<<<<< HEAD
=======
import { SessionProvider } from "next-auth/react";
>>>>>>> 6392fa7 (git hub auth)
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
=======
    <SessionProvider>
      <main className="font-work-sans">
        <Navbar />
        {children}
      </main>
    </SessionProvider>
>>>>>>> 6392fa7 (git hub auth)
  );
}
