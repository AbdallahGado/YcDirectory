<<<<<<< HEAD
=======
import { SessionProvider } from "next-auth/react";
>>>>>>> 6392fa7 (git hub auth)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "YcDirctory",
  description: "Post what ever you want",
=======
  title: "YcDirectory",
  description: "Post whatever you want",
>>>>>>> 6392fa7 (git hub auth)
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode;
}>) {
=======
}: {
  children: React.ReactNode;
}) {
>>>>>>> 6392fa7 (git hub auth)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<<<<<<< HEAD
        {children}
=======
        <SessionProvider>{children}</SessionProvider>
>>>>>>> 6392fa7 (git hub auth)
      </body>
    </html>
  );
}
