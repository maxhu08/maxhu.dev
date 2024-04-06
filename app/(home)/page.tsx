import { NextPage } from "next";
import styles from "~/app/(home)/page.module.scss";
import { cn } from "~/utils/cn";

import { Technologies } from "~/components/home/technologies";
import { ContactMeButton } from "~/components/home/contact-me-button";
import { ProjectsButton } from "~/components/home/projects-button";
import { OtherButton } from "~/components/home/other-button";
import { Footer } from "~/components/home/footer";

const Page: NextPage = () => {
  return (
    <>
      <main className="w-full h-screen grid place-items-center overflow-hidden">
        <div className="grid place-items-center grid-flow-row pb-[5%] h-max gap-2">
          <div
            className={cn(
              "grid grid-cols-[repeat(3,max-content)] place-items-center gap-2",
              styles["fade-in-down"],
            )}
          >
            <span
              className={cn(
                "text-2xl md:text-4xl select-none",
                styles["wave-animation"],
              )}
              style={{ animationDelay: "1800ms" }}
            >
              👋
            </span>
            <span className="text-2xl md:text-4xl dark:text-white">
              Hi! I'm <span className="special-text">Max Hu</span>
            </span>
          </div>
          <div className="grid grid-cols-[max-content_max-content] gap-2">
            <div
              className={cn("pt-2 z-10", styles["bouncing-animation"])}
              style={{ animationDelay: "1000ms" }}
            >
              <ContactMeButton />
            </div>
            <div
              className={cn("pt-2 z-10", styles["bouncing-animation"])}
              style={{ animationDelay: "1200ms" }}
            >
              <ProjectsButton />
            </div>
          </div>
          <div
            className={cn("pt-2 z-[5]", styles["bouncing-animation"])}
            style={{ animationDelay: "1400ms" }}
          >
            <OtherButton />
          </div>
          <div className="grid place-items-center grid-flow-row gap-1 pt-10 md:pt-20">
            <span
              className={cn(
                "text-zinc-500 dark:text-zinc-400 !delay-300",
                styles["fade-in-left"],
              )}
            >
              technologies i'm learning
            </span>
            <Technologies />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
