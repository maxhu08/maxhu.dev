import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import {
  LoadingBar,
  RELOAD_LOADING_BAR_ID,
  RELOAD_LOADING_BAR_STYLE_ID,
  RELOAD_PENDING_KEY
} from "~/components/loading-bar";
import { Navbar } from "~/components/navbar";
import { ThemeProvider, type Theme } from "~/components/providers/theme-provider";
import { WEBSITE_NAME } from "~/constants/website-name";
import { cn } from "~/utils/cn";
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

const reloadLoadingBarBootstrap = `
  try {
    if (window.sessionStorage.getItem("${RELOAD_PENDING_KEY}") === "1") {
      if (!document.getElementById("${RELOAD_LOADING_BAR_STYLE_ID}")) {
        const style = document.createElement("style");
        style.id = "${RELOAD_LOADING_BAR_STYLE_ID}";
        style.textContent = "#${RELOAD_LOADING_BAR_ID}{position:fixed;top:0;left:0;z-index:1600;height:3px;width:100%;transform-origin:left center;background:#14b8a6;box-shadow:0 0 10px #14b8a6,0 0 5px #14b8a6;animation:reload-loading-bar 0.7s cubic-bezier(0.2,0.8,0.2,1) forwards}@keyframes reload-loading-bar{0%{transform:scaleX(0.45)}70%{transform:scaleX(0.88)}100%{transform:scaleX(0.94)}}";
        document.head.appendChild(style);
      }

      if (!document.getElementById("${RELOAD_LOADING_BAR_ID}")) {
        const bar = document.createElement("div");
        bar.id = "${RELOAD_LOADING_BAR_ID}";
        document.body.appendChild(bar);
      }
    }
  } catch {}
`;

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
        className={cn(
          jetBrainsMono.variable,
          "min-h-screen bg-neutral-200 antialiased dark:bg-neutral-900"
        )}
        dir="ltr"
      >
        <Script id="reload-loading-bar-bootstrap" strategy="beforeInteractive">
          {reloadLoadingBarBootstrap}
        </Script>
        <ThemeProvider initialTheme={initialTheme} initialResolvedTheme={initialResolvedTheme}>
          <LoadingBar />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
