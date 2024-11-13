"use client";

import { FC } from "react";
import { technologies } from "~/constants/technologies";
import { ActionTooltip } from "~/components/action-tooltip";
import Image from "next/image";
import { useTheme } from "next-themes";

interface ProjectTechnologiesProps {
  ptechnologies: string[];
}

export const ProjectTechnologies: FC<ProjectTechnologiesProps> = ({ ptechnologies }) => {
  const { theme } = useTheme();

  return (
    <div className="grid w-max grid-flow-col gap-1">
      {technologies.map((technology, index: number) => {
        if (ptechnologies.includes(technology.name)) {
          return (
            <ActionTooltip label={technology.name} side="bottom" key={index}>
              <div className="relative aspect-square h-6">
                {technology.iconLight && theme === "light" ? (
                  <Image src={technology.iconLight} alt={technology.name} fill />
                ) : (
                  <Image src={technology.icon} alt={technology.name} fill />
                )}
              </div>
            </ActionTooltip>
          );
        }
      })}
    </div>
  );
};
