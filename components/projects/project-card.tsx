"use client"

import { useTheme } from "next-themes"
import { FC, useEffect, useRef, useState } from "react"
import Markdown from "react-markdown"
import { ActionTooltip } from "~/components/action-tooltip"
import { Separator } from "~/components/separator"
import { technologies } from "~/components/home/technologies"
import { cn } from "~/utils/cn"
import Image from "next/image"
import styles from "~/components/projects/project-card.module.scss"
import { Code2, Paperclip } from "lucide-react"

interface ProjectCardProps {
  info: {
    title: string
    technologies: string[]
    codeLink?: string
    demoLink?: string
  }
  children: string
  className?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ info, children, className }) => {
  const { theme } = useTheme()
  let technologiesIndex = 0
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting)
      })
    })

    if (cardRef.current) observer.observe(cardRef.current)

    return () => {
      observer.disconnect()
    }
  }, [cardRef.current])

  return (
    <div ref={cardRef} className={cn("p-2", className)}>
      <p className="text-2xl">{info.title}</p>
      <div className="grid grid-flow-col gap-1 w-max place-items-center">
        <span className="text-zinc-500">made with</span>
        {isVisible &&
          technologies.map((technology, index) => {
            if (info.technologies.includes(technology.name)) {
              const renderedIndex = technologiesIndex++
              return (
                <ActionTooltip label={technology.name} side="bottom" key={index}>
                  <div
                    className={cn(
                      "w-6 h-6 relative cursor-pointer !aspect-square",
                      styles["technology-fade-in"]
                    )}
                    style={{ animationDelay: `${renderedIndex * 100 + 500}ms` }}
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
      <div className="pt-2 grid grid-cols-2 w-max gap-4 ml-auto">
        {info.demoLink && (
          <a href={info.demoLink} target="_blank">
            <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out">
              <Paperclip className="w-4 h-4" />
              <span>View demo</span>
            </div>
          </a>
        )}
        {info.codeLink && (
          <a href={info.codeLink} target="_blank">
            <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out">
              <Code2 className="w-4 h-4" />
              <span>View code</span>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
