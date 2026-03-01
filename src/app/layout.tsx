import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "~/components/providers/theme-provider";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxhu.dev"),
  title: "maxhu.dev",
  description: "Welcome to my website.",
  authors: [{ name: "Max Hu", url: "https://maxhu.dev" }],
  openGraph: {
    title: "maxhu.dev",
    description: "Welcome to my website."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              const storageKey = "theme";
              const stored = localStorage.getItem(storageKey);
              const theme = stored ?? "dark";
              const resolved = theme === "system"
                ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
                : theme;
              document.documentElement.classList.toggle("dark", resolved === "dark");
              document.documentElement.style.colorScheme = resolved;
            })();
          `}
        </Script>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
