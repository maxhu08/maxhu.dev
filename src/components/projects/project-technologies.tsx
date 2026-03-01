"use client";

import Image from "next/image";
import { ActionTooltip } from "~/components/action-tooltip";
import { useTheme } from "~/components/providers/theme-provider";
import { technologies } from "~/constants/technologies";

interface ProjectTechnologiesProps {
  ptechnologies: string[];
}

export function ProjectTechnologies({ ptechnologies }: ProjectTechnologiesProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="grid w-max grid-flow-col gap-1">
      {technologies
        .filter((technology) => ptechnologies.includes(technology.name))
        .map((technology) => (
          <ActionTooltip label={technology.name} side="bottom" key={technology.name}>
            <div className="relative aspect-square h-6">
              {technology.iconLight && resolvedTheme === "light" ? (
                <Image src={technology.iconLight} alt={technology.name} fill />
              ) : (
                <Image src={technology.icon} alt={technology.name} fill />
              )}
            </div>
          </ActionTooltip>
        ))}
    </div>
  );
}
