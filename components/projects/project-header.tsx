import { FC } from "react";
import { Project } from "~/constants/projects";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { ProjectTechnologies } from "~/components/projects/project-technologies";
import { Code2, Paperclip } from "lucide-react";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="pb-2">
      <FancyHeader title={project.title} />
      <div className="grid sm:grid-cols-[auto_max-content] gap-2">
        <div>
          <ProjectTechnologies ptechnologies={project.technologies} />
        </div>
        <div className="mt-auto grid grid-flow-col gap-4 w-max">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-600 duration-300 ease-in-out">
                <Paperclip className="w-4 h-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 hover:text-blue-600 duration-300 ease-in-out">
                <Code2 className="w-4 h-4" />
                <span>View code</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
