"use client"

import { useTheme } from "next-themes"
import { FC } from "react"
import Markdown from "react-markdown"
import { ActionTooltip } from "~/components/action-tooltip"
import { Separator } from "~/components/separator"
import { technologies } from "~/components/technologies"
import { cn } from "~/utils/cn"
import Image from "next/image"
import styles from "~/components/project-card.module.scss"

interface ProjectCardProps {
  info: {
    title: string
    technologies: string[]
  }
  children: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ info, children }) => {
  const { theme } = useTheme()
  let technologiesIndex = 0

  return (
    <div className="p-2">
      <p className="text-2xl">{info.title}</p>
      <div className="grid grid-flow-col gap-1 w-max place-items-center">
        <span className="text-zinc-500">made with</span>
        {technologies.map((technology, index) => {
          if (info.technologies.includes(technology.name)) {
            const renderedIndex = technologiesIndex++
            return (
              <ActionTooltip label={technology.name} side="bottom" key={index}>
                <div
                  className={cn(
                    "w-6 h-6 relative cursor-pointer !aspect-square",
                    styles["technology-fade-in"]
                  )}
                  style={{ animationDelay: `${renderedIndex * 100}ms` }}
                >
                  {technology.iconLight && theme === "light" ? (
                    <Image src={technology.iconLight} alt={technology.name} fill />
                  ) : (
                    <Image src={technology.icon} alt={technology.name} fill />
                  )}
                </div>
              </ActionTooltip>
            )
          }
        })}
      </div>
      <Separator orientation="horizontal" className="my-2" />
      <Markdown className="leading-6">{children}</Markdown>
    </div>
  )
}
