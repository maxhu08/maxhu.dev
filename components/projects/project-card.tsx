"use client";

import { FC, useEffect, useRef } from "react";
import { Paperclip, Code2 } from "lucide-react";
import { cn } from "~/utils/cn";
import styles from "~/components/projects/project-card.module.scss";
import Link from "next/link";
import { Project } from "~/constants/projects";
import { ProjectTechnologies } from "~/components/projects/project-technologies";

type ProjectCardProps = Project & {
  delay?: number;
};

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEl = cardRef.current;

    if (cardEl) {
      const handleAnimationEnd = () => {
        cardEl.classList.remove("opacity-0");
      };

      cardEl.addEventListener("animationend", handleAnimationEnd);

      return () => cardEl.removeEventListener("animationend", handleAnimationEnd);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative h-full min-h-40 overflow-hidden rounded-md border-[1px] border-zinc-300 opacity-0 dark:border-border",
        styles["animate-up-bouncy"]
      )}
      style={{ animationDelay: (props.delay ?? 0) + "ms" }}
    >
      <Link href={`/projects/${props.title}`} className="cursor-pointer">
        <div className="absolute h-full w-full duration-300 ease-in-out hover:bg-neutral-500/20"></div>
      </Link>
      <div className="grid h-full grid-flow-row bg-neutral-200 p-2 dark:bg-neutral-900">
        <p className="font-semibold text-lime-500">{props.title}</p>
        <ProjectTechnologies ptechnologies={props.technologies} />
        <p className="pt-2">{props.description}</p>
        <div className="mt-auto grid w-max grid-flow-col gap-4">
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Paperclip className="h-4 w-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {props.codeLink && (
            <a href={props.codeLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Code2 className="h-4 w-4" />
                <span>View code</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
