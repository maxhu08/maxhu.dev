"use client";

import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import Image from "next/image";
import { useTheme } from "next-themes";
import { technologies } from "~/constants/technologies";
import { Paperclip, Code2 } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  info: {
    title: string;
    description: string;
    technologies: string[];
    codeLink?: string;
    demoLink?: string;
  };
}

export const ProjectCard: FC<ProjectCardProps> = ({ info }) => {
  const { theme } = useTheme();

  return (
    <div className="relative rounded-md overflow-hidden border-zinc-400 dark:border-border border-[1px] h-full min-h-40">
      <Link href={`/projects/${info.title}`} className="cursor-pointer">
        <div className="hover:bg-black/20 dark:hover:bg-white/20 w-full h-full absolute duration-300 ease-in-out"></div>
      </Link>
      <div className="bg-neutral-200 dark:bg-neutral-900 p-2 grid grid-flow-row h-full">
        <p className="font-semibold text-cyan-500">{info.title}</p>
        <div className="grid grid-flow-col w-max gap-1">
          {technologies.map((technology, index: number) => {
            if (info.technologies.includes(technology.name)) {
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
        <p className="pt-2">{info.description}</p>
        <div className="mt-auto grid grid-flow-col gap-4 w-max">
          {info.demoLink && (
            <a href={info.demoLink} target="_blank" className="z-[500]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-600 duration-300 ease-in-out">
                <Paperclip className="w-4 h-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {info.codeLink && (
            <a href={info.codeLink} target="_blank" className="z-[500]">
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
