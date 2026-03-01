import type { Metadata } from "next";
import { cookies } from "next/headers";
import { JetBrains_Mono } from "next/font/google";
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
  description: "Welcome to my website.",
  authors: [{ name: "Max Hu", url: "https://maxhu.dev" }],
  openGraph: {
    title: WEBSITE_NAME,
    description: "Welcome to my website."
  }
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
