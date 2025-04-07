import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import "@fontsource/work-sans";

const workSans = localFont({
  src: [
    { path: "./fonts/workSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/workSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/workSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/workSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/workSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/workSans-Thin.ttf", weight: "200", style: "normal" },
    { path: "./fonts/workSans-ExtraLight.ttf", weight: "200", style: "normal" },
  ],
  variable: "--font-work-sans", // ✅ Correctly placed
});

export const metadata: Metadata = {
  title: "Yc Directory",
  description: "Pitch,Vote and Grow,Post whatever you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
