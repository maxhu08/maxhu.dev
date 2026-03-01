import { FC } from "react";
import { Project } from "~/constants/projects";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { ProjectTechnologies } from "~/components/projects/project-technologies";
import { Code2, Paperclip, Star, Users } from "lucide-react";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="space-y-4">
      <FancyHeader title={project.title} />
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-end">
        <div className="space-y-3">
          <ProjectTechnologies ptechnologies={project.technologies} />
          {(project.users || project.stars) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {project.users && (
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>{project.users} users</span>
                </div>
              )}
              {project.stars && (
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4" />
                  <span>{project.stars} stars</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:justify-self-end">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noreferrer" className="z-[2]">
              <div className="flex items-center gap-1.5 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Paperclip className="h-4 w-4" />
                <span>View demo</span>
              </div>
            </a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noreferrer" className="z-[2]">
              <div className="flex items-center gap-1.5 text-blue-500 duration-300 ease-in-out hover:text-blue-600">
                <Code2 className="h-4 w-4" />
                <span>View code</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
