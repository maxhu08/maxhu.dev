import { NextPage } from "next";
import { ProjectCard } from "~/components/projects/project-card";
import { ProjectName, projects } from "~/constants/projects";

const Page: NextPage = () => {
  return (
    <main className="mx-auto mb-20 mt-20 grid w-[95%] grid-flow-row md:mb-60 lg:w-[75%]">
      <div className="grid grid-flow-row gap-2 md:grid-cols-2 xl:grid-cols-4">
        {Object.keys(projects).map((key, index) => {
          const project = projects[key as ProjectName];

          return <ProjectCard {...project} key={`project-${project.title}`} delay={index * 50} />;
        })}
      </div>
    </main>
  );
};

export default Page;
