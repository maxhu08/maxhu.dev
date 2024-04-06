import { NextPage } from "next";
import { PageContainer } from "~/components/page-container";
import { ProjectCard } from "~/components/projects/project-card";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <div className="grid grid-flow-row md:grid-cols-2 gap-2">
        <ProjectCard
          info={{
            title: "tomb-of-the-mask-clone",
            technologies: ["java"],
            link: "https://github.com/maxhu08/tomb-of-the-mask-clone",
          }}
        />
        <ProjectCard
          info={{
            title: "mtab",
            technologies: ["html", "css", "typescript"],
            link: "https://github.com/maxhu08/mtab",
          }}
        />
      </div>
    </PageContainer>
  );
};

export default Page;
