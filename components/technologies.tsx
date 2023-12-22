import { FC } from "react"
import { Icon, IconProps } from "~/components/technology-icon"

const items = [
  { name: "javascript", icon: "/assets/technologies/javascript.svg" },
  { name: "typescript", icon: "/assets/technologies/typescript.svg" },
  { name: "nodejs", icon: "/assets/technologies/nodejs.svg" },
  { name: "react", icon: "/assets/technologies/react.svg" },
  { name: "nextjs", icon: "/assets/technologies/nextjs.svg" },
  { name: "tailwindcss", icon: "/assets/technologies/tailwindcss.svg" },
  { name: "prisma", icon: "/assets/technologies/prisma.svg" }
]

export const Technologies: FC = () => {
  return (
    <div className="p-2 grid grid-flow-col place-items-center gap-2">
      {items.map((item, index) => (
        <Icon name={item.name} icon={item.icon} key={item.name} delay={index * 100 + 600} />
      ))}
    </div>
  )
}
