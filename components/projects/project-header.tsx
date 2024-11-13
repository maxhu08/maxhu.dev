import { FC } from "react";
import { Project } from "~/constants/projects";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { ProjectTechnologies } from "~/components/projects/project-technologies";
import { Code2, Paperclip } from "lucide-react";
import { FancyGap } from "~/components/fancy/fancy-gap";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div>
      <FancyHeader title={project.title} />
      <div className="grid gap-2 sm:grid-cols-[auto_max-content]">
        <div>
          <ProjectTechnologies ptechnologies={project.technologies} />
        </div>
        <div className="mt-auto grid w-max grid-flow-col gap-4">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Paperclip className="h-4 w-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" className="z-[2]">
              <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Code2 className="h-4 w-4" />
                <span>View code</span>
              </div>
            </a>
          )}
        </div>
      </div>
      <FancyGap />
    </div>
  );
};
