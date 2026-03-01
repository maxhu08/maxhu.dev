"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Code2, Paperclip, Star, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Project } from "~/constants/projects";
import { ProjectTechnologies } from "~/components/projects/project-technologies";
import { cn } from "~/utils/cn";
import styles from "./project-card.module.css";

type ProjectCardProps = Project & {
  delay?: number;
};

export function ProjectCard({
  codeLink,
  demoLink,
  delay = 0,
  description,
  stars,
  technologies,
  title,
  users
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const cardEl = cardRef.current;

    if (!cardEl) {
      return;
    }

    const handleAnimationEnd = () => {
      cardEl.classList.remove("opacity-0");
    };

    cardEl.addEventListener("animationend", handleAnimationEnd);
    return () => cardEl.removeEventListener("animationend", handleAnimationEnd);
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group dark:border-border relative h-full min-h-52 cursor-pointer overflow-hidden rounded-md border border-zinc-300 bg-neutral-200 opacity-0 transition-colors dark:bg-neutral-900",
        styles["animate-up-bouncy"]
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => router.push(`/projects/${title}`)}
    >
      <div className="pointer-events-none absolute inset-0 duration-300 ease-in-out group-hover:bg-neutral-500/10" />
      <div className="relative z-[2] flex h-full flex-col gap-4 p-4">
        <div className="space-y-3">
          <p className="text-lg leading-none font-semibold text-lime-500">{title}</p>
          <ProjectTechnologies ptechnologies={technologies} />
          {(users || stars) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {users && (
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>{users} users</span>
                </div>
              )}
              {stars && (
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4" />
                  <span>{stars} stars</span>
                </div>
              )}
            </div>
          )}
        </div>
        <p className="flex-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
        <div className="dark:border-border/80 mt-auto flex flex-wrap items-center gap-3 border-t border-zinc-300/80 pt-3">
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="z-[3]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-1.5 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Paperclip className="h-4 w-4" />
                <span>View demo</span>
              </div>
            </Link>
          )}
          {codeLink && (
            <Link
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="z-[3]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-1.5 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Code2 className="h-4 w-4" />
                <span>View code</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
