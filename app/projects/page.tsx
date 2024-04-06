import { NextPage } from "next";
import { PageContainer } from "~/components/page-container";
import { ProjectCard } from "~/components/projects/project-card";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <div className="grid grid-flow-row md:grid-cols-2 gap-2">
        <ProjectCard
          info={{
            title: "mtab",
            description: "simple new tab page extension for chrome",
            technologies: ["html", "css", "typescript"],
            demoLink:
              "https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg",
            codeLink: "https://github.com/maxhu08/mtab",
          }}
        />
        <ProjectCard
          info={{
            title: "tomb-of-the-mask-clone",
            description: "simple version tomb of the mask written in java",
            technologies: ["java"],
            codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone",
          }}
        />
        <ProjectCard
          info={{
            title: "create-neutrino-app",
            description:
              "create a lightweight template which has hmr, typescript, tailwind & sass",
            technologies: [
              "html",
              "sass",
              "tailwindcss",
              "typescript",
              "nodejs",
            ],
            codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone",
          }}
        />
      </div>
    </PageContainer>
  );
};

export default Page;
