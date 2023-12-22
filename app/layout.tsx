import type { Metadata } from "next"
import { Fira_Mono } from "next/font/google"
import "./globals.scss"
import { cn } from "~/utils/cn"
import { ThemeProvider } from "~/components/providers/theme-provider"
import { Navbar } from "~/components/navbar"

const fira = Fira_Mono({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "maxhu.dev",
  description: "This is my website"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(cn(fira.className), "bg-neutral-900")} dir="ltr">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
