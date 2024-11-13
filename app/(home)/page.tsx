import { Metadata, NextPage } from "next";
import styles from "~/app/(home)/page.module.scss";
import { cn } from "~/utils/cn";

import { Technologies } from "~/components/home/technologies";
import { ContactMeButton } from "~/components/home/contact-me-button";
import { ProjectsButton } from "~/components/home/projects-button";
import { OtherButton } from "~/components/home/other-button";
import { Footer } from "~/components/home/footer";
import { websiteName } from "~/constants/website-name";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxhu.dev/"),
  title: `${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png"
  },
  authors: [{ name: "Max Hu", url: "https://maxhu.dev" }]
};

const Page: NextPage = () => {
  return (
    <>
      <main className="grid h-screen w-full place-items-center overflow-hidden">
        <div className="grid h-max grid-flow-row place-items-center gap-2 pb-[5%]">
          <div
            className={cn(
              "grid grid-cols-[repeat(3,max-content)] place-items-center gap-2",
              styles["fade-in-down"]
            )}
          >
            <span
              className={cn("select-none text-2xl md:text-4xl", styles["wave-animation"])}
              style={{ animationDelay: "1800ms" }}
            >
              👋
            </span>
            <span> </span>
            <span className="text-2xl dark:text-white md:text-4xl">
              Hi! I'm <span className={styles["special-text"]}>Max Hu</span>
            </span>
          </div>
          <div className="grid grid-cols-[max-content_max-content] gap-2">
            <div
              className={cn("z-10 pt-2", styles["bouncing-animation"])}
              style={{ animationDelay: "1000ms" }}
            >
              <ContactMeButton />
            </div>
            <div
              className={cn("z-10 pt-2", styles["bouncing-animation"])}
              style={{ animationDelay: "1200ms" }}
            >
              <ProjectsButton />
            </div>
          </div>
          <div
            className={cn("z-[5] pt-2", styles["bouncing-animation"])}
            style={{ animationDelay: "1400ms" }}
          >
            <OtherButton />
          </div>
          <div className="grid grid-flow-row place-items-center gap-1 pt-10 md:pt-20">
            <span
              className={cn("text-zinc-500 !delay-300 dark:text-zinc-400", styles["fade-in-left"])}
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
