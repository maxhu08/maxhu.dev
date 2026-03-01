import { NextPage } from "next";
import { ProjectCard } from "~/components/projects/project-card";
import { getProjects } from "~/constants/projects";

const Page: NextPage = () => {
  const projectList = getProjects();

  return (
    <main className="mx-auto mb-20 mt-20 w-[92%] max-w-5xl md:mb-60">
      <div className="grid grid-flow-row gap-2 md:grid-cols-2">
        {projectList.map((project, index) => {
          return <ProjectCard {...project} key={`project-${project.title}`} delay={index * 50} />;
        })}
      </div>
    </main>
  );
};

export default Page;
