import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { JetBrains_Mono } from "next/font/google";
import { LoadingBar } from "~/components/loading-bar";
import { Navbar } from "~/components/navbar";
import { ThemeProvider, type Theme } from "~/components/providers/theme-provider";
import { WEBSITE_NAME } from "~/constants/website-name";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxhu.dev"),
  title: WEBSITE_NAME,
  description: "welcome to my website",
  authors: [{ name: "Max Hu", url: "https://maxhu.dev" }],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: WEBSITE_NAME,
    description: "welcome to my website",
    images: "/assets/mh.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#14b8a6"
};

function resolveInitialTheme(theme: Theme): "light" | "dark" {
  if (theme === "light") {
    return "light";
  }

  return "dark";
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get("theme")?.value;
  const initialTheme: Theme =
    storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
      ? storedTheme
      : "dark";
  const initialResolvedTheme = resolveInitialTheme(initialTheme);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={initialResolvedTheme === "dark" ? "dark" : undefined}
      style={{ colorScheme: initialResolvedTheme }}
    >
      <body
        className={`${jetBrainsMono.variable} min-h-screen bg-neutral-200 antialiased dark:bg-neutral-900`}
        dir="ltr"
      >
        <ThemeProvider initialTheme={initialTheme} initialResolvedTheme={initialResolvedTheme}>
          <LoadingBar />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
