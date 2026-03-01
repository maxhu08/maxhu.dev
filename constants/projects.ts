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
  },
  "tomb-of-the-mask-clone": {
    description: "simple version tomb of the mask written in java",
    technologies: ["java"],
    codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone"
  },
  "create-neutrino-app": {
    description: "create a lightweight template which has hmr, typescript, tailwind & sass",
    technologies: ["html", "sass", "tailwindcss", "typescript", "nodejs"],
    codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone"
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
