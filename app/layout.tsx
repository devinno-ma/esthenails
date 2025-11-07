import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-garamond",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ESTHENAILS - Premium Nail Art & Beauty Services",
  description:
    "Experience premium nail art, gel manicures, pedicures, and nail extensions at ESTHENAILS. Expert nail technicians delivering stunning designs and flawless finishes.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
