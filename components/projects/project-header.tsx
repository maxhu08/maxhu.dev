import { FC } from "react";
import { Project } from "~/constants/projects";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div>
      <p>{project.title}</p>
    </div>
  );
};
