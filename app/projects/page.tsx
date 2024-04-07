import { NextPage } from "next";
import {
  ProjectCard,
  ProjectCardProps,
} from "~/components/projects/project-card";

const projects: ProjectCardProps[] = [
  {
    title: "mtab",
    description: "simple new tab page extension for chrome",
    technologies: ["html", "css", "typescript"],
    demoLink:
      "https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg",
    codeLink: "https://github.com/maxhu08/mtab",
  },
  {
    title: "tomb-of-the-mask-clone",
    description: "simple version tomb of the mask written in java",
    technologies: ["java"],
    codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone",
  },
  {
    title: "create-neutrino-app",
    description:
      "create a lightweight template which has hmr, typescript, tailwind & sass",
    technologies: ["html", "sass", "tailwindcss", "typescript", "nodejs"],
    codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone",
  },
];

const Page: NextPage = () => {
  return (
    <main className="grid grid-flow-row mx-auto mt-20 mb-20 md:mb-60 w-[95%] lg:w-[75%]">
      <div className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-4 gap-2">
        {projects.map((project: ProjectCardProps, index) => (
          <ProjectCard {...project} key={project.title} delay={index * 50} />
        ))}
      </div>
    </main>
  );
};

export default Page;
