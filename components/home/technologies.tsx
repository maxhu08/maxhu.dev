import { FC } from "react";
import { TechnologyIcon } from "~/components/home/technology-icon";
import styles from "~/components/home/technologies.module.scss";
import { cn } from "~/utils/cn";

const technologies = [
  { name: "html", icon: "/assets/technologies/html.svg" },
  { name: "css", icon: "/assets/technologies/css.svg" },
  { name: "sass", icon: "/assets/technologies/sass.svg" },
  { name: "tailwindcss", icon: "/assets/technologies/tailwindcss.svg" },
  { name: "javascript", icon: "/assets/technologies/javascript.svg" },
  { name: "typescript", icon: "/assets/technologies/typescript.svg" },
  { name: "nodejs", icon: "/assets/technologies/nodejs.svg" },
  { name: "react", icon: "/assets/technologies/react.svg" },
  {
    name: "nextjs",
    icon: "/assets/technologies/nextjs_dark.svg",
    iconLight: "/assets/technologies/nextjs_light.svg"
  },
  { name: "graphql", icon: "/assets/technologies/graphql.svg" },
  { name: "apollo", icon: "/assets/technologies/apollo.svg" },
  { name: "trpc", icon: "/assets/technologies/trpc.svg" },
  { name: "prisma", icon: "/assets/technologies/prisma.svg" },
  { name: "java", icon: "/assets/technologies/java.svg" }
];

const learning = [
  "html",
  "css",
  "sass",
  "tailwindcss",
  "javascript",
  "typescript",
  "tailwind",
  "nodejs",
  "react",
  "nextjs",
  "graphql",
  "apollo",
  "prisma"
];

interface TechnologiesProps {
  showAnimations: boolean;
}

export const Technologies: FC<TechnologiesProps> = ({ showAnimations }) => {
  let technologiesIndex = 0;

  return (
    <div
      className={cn(
        "flex max-w-[100vw] place-items-start gap-1 overflow-x-scroll p-2 md:gap-2",
        styles["technologies-container"]
      )}
    >
      {technologies.map((technology) => {
        const renderedIndex = technologiesIndex++;

        if (learning.includes(technology.name))
          return (
            <TechnologyIcon
              name={technology.name}
              icon={technology.icon}
              iconLight={technology.iconLight}
              key={`techonology-${technology.name}`}
              delay={renderedIndex * 50 + 600}
              showAnimations={showAnimations}
            />
          );
      })}
    </div>
  );
};
