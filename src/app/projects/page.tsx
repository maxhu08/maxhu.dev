import { ProjectCard } from "~/components/projects/project-card";
import { getProjects } from "~/constants/projects";

export default function ProjectsPage() {
  const projectList = getProjects();

  return (
    <main className="mx-auto mt-20 mb-20 w-[92%] max-w-5xl md:mb-60">
      <div className="grid grid-flow-row gap-2 md:grid-cols-2">
        {projectList.map((project, index) => (
          <ProjectCard {...project} key={`project-${project.title}`} delay={index * 50} />
        ))}
      </div>
    </main>
  );
}
