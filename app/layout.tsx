import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "~/utils/cn";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/home/footer";
import { TitleChanger } from "~/components/title-changer";
import { websiteName } from "~/constants/website-name";

const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: `🌴 ${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png"
  },
  authors: [{ name: "Max Huj", url: "https://maxhu.dev" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(cn(fira.className), "bg-neutral-200 dark:bg-neutral-900")} dir="ltr">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TitleChanger />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
