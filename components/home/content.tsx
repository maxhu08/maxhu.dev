"use client";

import { FC, useEffect, useState } from "react";
import styles from "~/app/(home)/page.module.scss";
import { BlogButton } from "~/components/home/blog-button";
import { ContactMeButton } from "~/components/home/contact-me-button";
import { OtherButton } from "~/components/home/other-button";
import { ProjectsButton } from "~/components/home/projects-button";
import { Technologies } from "~/components/home/technologies";
import { cn } from "~/utils/cn";

export const Content: FC = () => {
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      setShowAnimations(true);
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-[repeat(3,max-content)] place-items-center gap-2",
          showAnimations && styles["fade-in-down"]
        )}
      >
        <span
          className={cn(
            "select-none text-2xl md:text-4xl",
            showAnimations && styles["wave-animation"]
          )}
          style={{ animationDelay: "1800ms" }}
        >
          👋
        </span>
        <span> </span>
        <span className="text-2xl dark:text-white md:text-4xl">
          Hi! I'm <span className={styles["special-text"]}>Max Hu</span>
        </span>
      </div>
      <div className="grid w-full grid-flow-row place-content-center gap-2 pt-4 sm:grid-flow-col">
        {[
          { delay: "800ms", Component: ContactMeButton },
          { delay: "1000ms", Component: ProjectsButton },
          { delay: "1200ms", Component: BlogButton },
          { delay: "1400ms", Component: OtherButton }
        ].map(({ delay, Component }, i) => (
          <div
            key={i}
            className={cn("z-10 w-full", showAnimations && styles["bouncing-animation"])}
            style={{ animationDelay: delay }}
          >
            <Component />
          </div>
        ))}
      </div>
      <div className="grid grid-flow-row place-items-center gap-1 pt-4">
        <span
          className={cn(
            "text-zinc-500 !delay-300 dark:text-zinc-400",
            showAnimations && styles["fade-in-left"]
          )}
        >
          technologies i'm learning
        </span>
        <Technologies showAnimations={showAnimations} />
      </div>
    </>
  );
};
