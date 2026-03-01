interface ProjectDefinition {
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
  stars?: string;
  users?: string;
}

export const projects = {
  mtab: {
    description: "simple new tab page extension for chrome",
    technologies: ["html", "css", "tailwindcss", "typescript"],
    demoLink: "https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg",
    codeLink: "https://github.com/maxhu08/mtab",
    users: "10,000+",
    stars: "500+"
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
