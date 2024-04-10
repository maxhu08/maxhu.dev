"use client";

import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import Image from "next/image";
import { useTheme } from "next-themes";
import { technologies } from "~/constants/technologies";
import { Paperclip, Code2 } from "lucide-react";
import { cn } from "~/utils/cn";
import styles from "~/components/projects/project-card.module.scss";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
  delay?: number;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "relative rounded-md overflow-hidden border-zinc-300 dark:border-border border-[1px] h-full min-h-40",
        styles["animate-up-bouncy"],
      )}
      style={{ animationDelay: (props.delay ?? 0) + "ms" }}
    >
      <Link href={`/projects/${props.title}`} className="cursor-pointer">
        <div className="hover:bg-neutral-500/20 w-full h-full absolute duration-300 ease-in-out"></div>
      </Link>
      <div className="bg-neutral-200 dark:bg-neutral-900 p-2 grid grid-flow-row h-full">
        <p className="font-semibold text-lime-500">{props.title}</p>
        <div className="grid grid-flow-col w-max gap-1">
          {technologies.map((technology, index: number) => {
            if (props.technologies.includes(technology.name)) {
              return (
                <ActionTooltip
                  label={technology.name}
                  side="bottom"
                  key={index}
                >
                  <div className="h-6 relative aspect-square">
                    {technology.iconLight && theme === "light" ? (
                      <Image
                        src={technology.iconLight}
                        alt={technology.name}
                        fill
                      />
                    ) : (
                      <Image src={technology.icon} alt={technology.name} fill />
                    )}
                  </div>
                </ActionTooltip>
              );
            }
          })}
        </div>
        <p className="pt-2">{props.description}</p>
        <div className="mt-auto grid grid-flow-col gap-4 w-max">
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-600 duration-300 ease-in-out">
                <Paperclip className="w-4 h-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {props.codeLink && (
            <a href={props.codeLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-600 duration-300 ease-in-out">
                <Code2 className="w-4 h-4" />
                <span>View code</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
