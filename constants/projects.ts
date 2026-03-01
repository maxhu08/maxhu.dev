interface ProjectDefinition {
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

export const projects = {
  mtab: {
    description: "simple new tab page extension for chrome",
    technologies: ["html", "css", "tailwindcss", "typescript"],
    demoLink: "https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg",
    codeLink: "https://github.com/maxhu08/mtab"
  }
} as const satisfies Record<string, ProjectDefinition>;

export type ProjectName = keyof typeof projects;

export interface Project extends ProjectDefinition {
  title: ProjectName;
}

export const getProject = (title: ProjectName): Project => ({
  title,
  ...projects[title]
});

export const getProjects = (): Project[] =>
  (Object.entries(projects) as [ProjectName, ProjectDefinition][]).map(([title, project]) => ({
    title,
    ...project
  }));
