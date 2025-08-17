
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { dark, shadesOfPurple } from '@clerk/themes'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
 <SpeedInsights/>
      <ClerkProvider appearance={{
        baseTheme: shadesOfPurple
      }}>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

            <Navbar />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <main>
              {children}
            </main>
          </body>
        </html>
      </ClerkProvider>

    </>
  )
}
