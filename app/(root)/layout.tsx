import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <main className="font-work-sans">
        <Navbar />
        {children}
      </main>
    </SessionProvider>
  );
}
