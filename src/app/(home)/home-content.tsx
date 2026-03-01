"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RiGithubLine, RiTwitterXLine, RiYoutubeLine } from "@remixicon/react";
import { Antenna, Boxes, ChevronRight, Webhook } from "lucide-react";
import { ActionTooltip } from "~/components/action-tooltip";
import styles from "./page.module.css";

const buttons = [
  {
    label: "contact me",
    href: "mailto:contact@maxhu.dev",
    icon: ChevronRight,
    iconClassName: "arrow",
    cardClassName: "bg-emerald-500 hover:bg-emerald-700",
    delay: "800ms"
  },
  {
    label: "projects",
    href: "/projects",
    icon: Webhook,
    iconClassName: "icon",
    cardClassName: "bg-pink-500 hover:bg-pink-700",
    delay: "1000ms"
  },
  {
    label: "blog",
    href: "https://blog.maxhu.dev",
    icon: Antenna,
    iconClassName: "antenna",
    cardClassName: "bg-indigo-500 hover:bg-indigo-700",
    delay: "1200ms"
  },
  {
    label: "other links",
    href: "https://maxhu.dev/other",
    icon: Boxes,
    iconClassName: "boxes",
    cardClassName: "bg-sky-500 hover:bg-sky-700",
    delay: "1400ms"
  }
] as const;

const socials = [
  {
    label: "github",
    href: "https://github.com/maxhu08",
    icon: RiGithubLine
  },
  {
    label: "youtube",
    href: "https://www.youtube.com/@maxhudotdev",
    icon: RiYoutubeLine
  },
  {
    label: "twitter/x",
    href: "https://twitter.com/maxhu08",
    icon: RiTwitterXLine
  }
] as const;

export function HomeContent() {
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;

    if (!sessionStorage.getItem("visited")) {
      frameId = window.requestAnimationFrame(() => {
        setShowAnimations(true);
      });
    }

    sessionStorage.setItem("visited", "true");

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      <main className="grid h-screen w-full place-items-center overflow-hidden">
        <div className="grid h-max grid-flow-row place-items-center gap-2 pb-[5%]">
          <div
            className={`grid grid-cols-[repeat(3,max-content)] place-items-center gap-2 ${
              showAnimations ? styles["fade-in-down"] : ""
            }`}
          >
            <span
              aria-hidden="true"
              className={`text-2xl select-none md:text-4xl ${styles["wave-animation"]}`}
              style={{ animationDelay: "1800ms" }}
            >
              👋
            </span>
            <span />
            <span className="text-2xl md:text-4xl dark:text-white">
              Hi! I&apos;m <span className={styles["special-text"]}>Max Hu</span>
            </span>
          </div>

          <div className="grid w-full grid-flow-row place-content-center gap-2 pt-4 sm:grid-flow-col">
            {buttons.map(({ label, href, icon: Icon, iconClassName, cardClassName, delay }) => (
              <div
                key={label}
                className={`z-10 w-full ${showAnimations ? styles["bouncing-animation"] : ""}`}
                style={{ animationDelay: delay }}
              >
                <ActionTooltip label={label} side="top">
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={`block w-full ${styles.button}`}
                    aria-label={label}
                  >
                    <div
                      className={`grid grid-cols-[max-content_max-content] place-items-center gap-1 rounded-md p-2 text-white duration-300 ease-in-out ${cardClassName}`}
                    >
                      <Icon className={`h-4 w-4 ${styles[iconClassName]}`} />
                      <span>{label}</span>
                    </div>
                  </Link>
                </ActionTooltip>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 z-20 w-full">
        <div className="grid place-items-center px-4 py-2">
          <div className="grid w-max grid-flow-col place-items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <ActionTooltip key={label} label={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 text-blue-500 hover:text-blue-600" />
                </Link>
              </ActionTooltip>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
