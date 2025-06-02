import type { Metadata } from "next"
import { Instrument_Sans, Crimson_Pro } from "next/font/google"
import type { ReactNode } from "react"
import "~/styles/globals.css"

// Crimson Pro (serif) for large headings - similar to Gestura
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
})

// Instrument Sans for body text
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FULU Foundation - Fighting for Digital Ownership Rights",
  description: "Restoring freedom, autonomy, and real ownership in a digital-first world",
  authors: [{ name: "Mohak Varma" }],
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
    title: "FULU Foundation",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${instrumentSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground selection:bg-primary/10">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}