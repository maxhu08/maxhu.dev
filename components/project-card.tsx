import { FC } from "react"
import Markdown from "react-markdown"
import { Separator } from "~/components/separator"
import { technologies } from "~/components/technologies"
import { TechnologyIcon } from "~/components/technology-icon"

interface ProjectCardProps {
  info: {
    title: string
    technologies: string[]
  }
  children: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ info, children }) => {
  return (
    <div className="p-2">
      <p className="text-2xl">{info.title}</p>
      <div className="grid grid-flow-col gap-1 w-max place-items-center">
        <span className="text-sm text-zinc-500">made with</span>
        {technologies.map(technology => {
          if (info.technologies.includes(technology.name))
            return (
              <TechnologyIcon
                name={technology.name}
                icon={technology.icon}
                delay={100}
                className="w-6 h-6"
              />
            )
        })}
      </div>
      <Separator orientation="horizontal" className="my-2" />
      <Markdown className="leading-6">{children}</Markdown>
    </div>
  )
}
