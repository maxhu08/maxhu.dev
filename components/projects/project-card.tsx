"use client";

import { FC, useEffect, useRef } from "react";
import { Paperclip, Code2, Star, Users } from "lucide-react";
import { cn } from "~/utils/cn";
import styles from "~/components/projects/project-card.module.scss";
import { Project } from "~/constants/projects";
import { ProjectTechnologies } from "~/components/projects/project-technologies";
import { useRouter } from "next/navigation";

type ProjectCardProps = Project & {
  delay?: number;
};

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
        "group relative h-full min-h-52 cursor-pointer overflow-hidden rounded-md border border-zinc-300 bg-neutral-200 opacity-0 transition-colors dark:border-border dark:bg-neutral-900",
        styles["animate-up-bouncy"]
      )}
      style={{ animationDelay: (props.delay ?? 0) + "ms" }}
      onClick={() => router.push(`/projects/${props.title}`)}
    >
      <div className="pointer-events-none absolute inset-0 duration-300 ease-in-out group-hover:bg-neutral-500/10" />
      <div className="relative z-[2] flex h-full flex-col gap-4 p-4">
        <div className="space-y-3">
          <p className="text-lg font-semibold leading-none text-lime-500">{props.title}</p>
          <ProjectTechnologies ptechnologies={props.technologies} />
          {(props.users || props.stars) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {props.users && (
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>{props.users} users</span>
                </div>
              )}
              {props.stars && (
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4" />
                  <span>{props.stars} stars</span>
                </div>
              )}
            </div>
          )}
        </div>
        <p className="flex-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {props.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-zinc-300/80 pt-3 dark:border-border/80">
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="z-[3]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-1.5 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Paperclip className="h-4 w-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {props.codeLink && (
            <a
              href={props.codeLink}
              target="_blank"
              rel="noreferrer"
              className="z-[3]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-1.5 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
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
