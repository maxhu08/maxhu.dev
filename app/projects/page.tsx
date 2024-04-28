import { NextPage } from "next";
import { ProjectCard } from "~/components/projects/project-card";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  return (
    <main className="grid grid-flow-row mx-auto mt-20 mb-20 md:mb-60 w-[95%] lg:w-[75%]">
      <div className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-4 gap-2">
        {Object.keys(projects).map((key, index) => {
          const project = projects[key];

          return (
            <ProjectCard
              {...project}
              key={`project-${project.title}`}
              delay={index * 50}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Page;
