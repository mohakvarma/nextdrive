import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

import "~/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NextDrive - Cloud Storage Simplified",
  description: "A modern, refined cloud storage platform built with Next.js",
  authors: [{ name: "Your Name" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NextDrive",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground selection:bg-primary/10">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}