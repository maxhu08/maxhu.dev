import { FC } from "react";
import { TechnologyIcon } from "~/components/home/technology-icon";
import styles from "~/components/home/technologies.module.scss";
import { cn } from "~/utils/cn";
import { technologies } from "~/constants/technologies";

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

export const Technologies: FC = () => {
  let technologiesIndex = 0;

  return (
    <div className={cn("p-2 flex place-items-start gap-1 md:gap-2 max-w-[100vw] overflow-x-scroll", styles["technologies-container"])}>
      {/* {[...items, ...items].map((item, index) => (
            <Icon name={item.name} icon={item.icon} iconLight={item.iconDark} key={`techonology-${item.name}`} delay={index * 50 + 600} />
          ))} */}
      {technologies.map((technology, index) => {
        const renderedIndex = technologiesIndex++;

        if (learning.includes(technology.name))
          return (
            <TechnologyIcon
              name={technology.name}
              icon={technology.icon}
              iconLight={technology.iconLight}
              key={`techonology-${technology.name}`}
              delay={renderedIndex * 50 + 600}
            />
          );
      })}
    </div>
  );
};
