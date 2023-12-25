"use client";

import { useTheme } from "next-themes";
import { FC, memo, useEffect, useRef, useState } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import { Separator } from "~/components/separator";
import { technologies } from "~/constants/technologies";
import { cn } from "~/utils/cn";
import Image from "next/image";
import styles from "~/components/shared.module.scss";
import { Code2, Expand, FoldVertical, Paperclip } from "lucide-react";
import { useMediaQuery } from "react-responsive";

interface ProjectCardProps {
  info: {
    title: string;
    technologies: string[];
    codeLink?: string;
    demoLink?: string;
  };
  children: React.ReactNode;
  className?: string;
}

const _ProjectCard: FC<ProjectCardProps> = ({ info, children, className }) => {
  const { theme } = useTheme();
  let technologiesIndex = 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const isMdOrLarger = useMediaQuery({ minWidth: 768 });

  const updateElementHeight = () => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      setContentHeight(contentHeight);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (cardRef.current) observer.observe(cardRef.current);

    updateElementHeight();

    const handleResize = () => {
      updateElementHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [cardRef.current]);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    updateElementHeight();
  }, [expanded]);

  return (
    <div ref={cardRef} className={cn("p-2", className)}>
      <p className={cn("text-2xl", isVisible && isMdOrLarger && styles["fade-in-bounce"])}>
        {info.title} {expanded + " " + contentRef.current?.clientHeight}
      </p>
      <div className="grid grid-flow-col gap-1 w-max place-items-center">
        <span className="text-zinc-500">made with</span>
        {technologies.map((technology, index) => {
          if (info.technologies.includes(technology.name)) {
            const renderedIndex = technologiesIndex++;
            return (
              <ActionTooltip label={technology.name} side="bottom" key={index}>
                <div
                  className={cn(
                    "w-6 h-6 relative cursor-pointer !aspect-square",
                    isVisible && isMdOrLarger && styles["fade-in-bounce"]
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
            );
          }
        })}
      </div>
      <Separator orientation="horizontal" className="my-2" />
      <div
        ref={contentRef}
        className={cn("relative w-full overflow-hidden", !expanded && "max-h-60")}
      >
        {children}
        {!expanded && (
          // 240 = h-60
          <div className={cn("w-full h-full", contentHeight > 240 && "hidden")}>
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-neutral-200 dark:from-neutral-900 to-transparent w-full h-48"></div>
            <div className="absolute grid w-full place-items-center bottom-0 left-0 h-20">
              <button
                onClick={() => {
                  setExpanded(true);
                  updateElementHeight();
                }}
                className="p-1 bg-cyan-500 hover:bg-cyan-700 ease-in-out duration-300 cursor-pointer rounded-md"
              >
                <div className="grid grid-cols-[max-content_max-content] gap-1 place-items-center text-white">
                  <Expand className="w-4 h-4" />
                  <span>Expand</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="pt-2 grid grid-flow-col w-max gap-4 ml-auto">
        {expanded && (
          <button onClick={() => setExpanded(false)} className="cursor-pointer">
            <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out">
              <FoldVertical className="w-4 h-4" />
              <span>Collapse</span>
            </div>
          </button>
        )}
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
  );
};

export const ProjectCard = memo(_ProjectCard);
