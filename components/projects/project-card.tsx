"use client";

import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import Image from "next/image";
import { useTheme } from "next-themes";
import { technologies } from "~/constants/technologies";

interface ProjectCardProps {
  info: {
    title: string;
    technologies: string[];
    link?: string;
  };
}

export const ProjectCard: FC<ProjectCardProps> = ({ info }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 p-4 rounded-md border-zinc-400 dark:border-border border-[1px]">
      <p className="font-semibold text-cyan-500">{info.title}</p>
      <div className="grid grid-flow-col w-max gap-1">
        {technologies.map((technology, index: number) => {
          if (info.technologies.includes(technology.name)) {
            return (
              <ActionTooltip label={technology.name} side="bottom" key={index}>
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
    </div>
  );
};
