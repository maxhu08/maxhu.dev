import { NextPage } from "next"
import { Technologies } from "~/components/technologies"
import styles from "~/app/page.module.scss"
import { cn } from "~/utils/cn"
import { ContactMeButton } from "~/components/contact-me-button"
import { ProjectsButton } from "~/components/projects-button"

const Page: NextPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid place-items-center grid-flow-row pb-[5%] h-max gap-2">
        <div className={cn("grid grid-cols-[repeat(3,max-content)] place-items-center gap-2", styles["fade-in-down"])}>
          <span className={cn("text-2xl md:text-4xl select-none", styles["wave-animation"])} style={{ animationDelay: "1800ms" }}>
            👋
          </span>
          <span className="text-2xl md:text-4xl font-semibold dark:text-white">
            Hi! I&apos;m <span className="special-text">Max Hu</span>
          </span>
        </div>
        <div className="grid grid-cols-[max-content_max-content] gap-2">
          <div className={cn("pt-2", styles["bouncing-animation"])} style={{ animationDelay: "1000ms" }}>
            <ContactMeButton />
          </div>
          <div className={cn("pt-2", styles["bouncing-animation"])} style={{ animationDelay: "1200ms" }}>
            <ProjectsButton />
          </div>
        </div>
        <div className="grid place-items-center grid-flow-row gap-1 pt-10 md:pt-20">
          <span className={cn("text-zinc-500 dark:text-zinc-400k !delay-300", styles["fade-in-left"])}>technologies i&apos;m learning</span>
          <Technologies />
        </div>
      </div>
    </div>
  )
}

export default Page
