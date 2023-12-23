import { FC } from "react"
import { Icon } from "~/components/technology-icon"
import styles from "~/components/technologies.module.scss"
import { cn } from "~/utils/cn"

const items = [
  { name: "html", icon: "/assets/technologies/html.svg" },
  { name: "css", icon: "/assets/technologies/css.svg" },
  { name: "sass", icon: "/assets/technologies/sass.svg" },
  { name: "tailwindcss", icon: "/assets/technologies/tailwindcss.svg" },
  { name: "javascript", icon: "/assets/technologies/javascript.svg" },
  { name: "typescript", icon: "/assets/technologies/typescript.svg" },
  { name: "nodejs", icon: "/assets/technologies/nodejs.svg" },
  { name: "react", icon: "/assets/technologies/react.svg" },
  { name: "nextjs", icon: "/assets/technologies/nextjs_dark.svg", iconDark: "/assets/technologies/nextjs_light.svg" },
  { name: "graphql", icon: "/assets/technologies/graphql.svg" },
  { name: "apollo", icon: "/assets/technologies/apollo.svg" },
  { name: "trpc", icon: "/assets/technologies/trpc.svg" },
  { name: "prisma", icon: "/assets/technologies/prisma.svg" }
]

export const Technologies: FC = () => {
  return (
    <div className={cn("p-2 flex place-items-start gap-1 md:gap-2 max-w-[100vw] overflow-x-scroll", styles["technologies-container"])}>
      {/* {[...items, ...items].map((item, index) => (
            <Icon name={item.name} icon={item.icon} iconLight={item.iconDark} key={`techonology-${item.name}`} delay={index * 50 + 600} />
          ))} */}
      {items.map((item, index) => (
        <Icon name={item.name} icon={item.icon} iconLight={item.iconDark} key={`techonology-${item.name}`} delay={index * 50 + 600} />
      ))}
    </div>
  )
}
