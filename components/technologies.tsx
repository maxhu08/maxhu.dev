import { FC } from "react"
import { Icon, IconProps } from "~/components/icon"

const items: IconProps[] = [
  { name: "javascript", icon: "/assets/technologies/javascript.svg" },
  { name: "javascript", icon: "/assets/technologies/typescript.svg" },
  { name: "javascript", icon: "/assets/technologies/nodejs.svg" },
  { name: "javascript", icon: "/assets/technologies/react.svg" },
  { name: "javascript", icon: "/assets/technologies/nextjs.svg" },
  { name: "javascript", icon: "/assets/technologies/tailwindcss.svg" },
  { name: "javascript", icon: "/assets/technologies/prisma.svg" }
]

export const Technologies: FC = () => {
  return (
    <div className="p-2 grid grid-flow-col place-items-center gap-2">
      {items.map(item => (
        <Icon name={item.name} icon={item.icon} key={item.name} />
      ))}
    </div>
  )
}
