import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "~/utils/cn";
import { ThemeProvider } from "~/components/providers/theme-provider";

const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });

const websiteName = "maxhu.dev";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxhu.dev/"),
  title: `${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png",
  },
  authors: [{ name: "Max Hu", url: "https://maxhu.dev" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          (cn(fira.className),
          "bg-neutral-200 dark:bg-neutral-900 min-h-screen")
        }
        dir="ltr"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
